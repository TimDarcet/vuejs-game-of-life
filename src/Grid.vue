<template>
  <div class="grid__container" :style="`width:${width}px; height:${height}px; --rows:${rowsCount}; --columns:${columnsCount};`">
    <Cell v-for="x in cellsCount" :key="x"/>
  </div>
</template>

<script>
import Cell from './Cell.vue'
export default {
    name: "Grid",
    components: {Cell},
    props: {
        rowsCount: {
            type: Number,
            required: true
        },
        columnsCount: {
            type: Number,
            required: true
        },
        aliveCellsMap: {
            type: Object
        }
    },
    computed: {
        cellsCount: function() {
            return this.columnsCount * this.rowsCount;
        },
        width: function() {
            return 13 * this.columnsCount;
        },
        height: function() {
            return 8 * this.columnsCount;
        }
  },
  methods: {
    isCellAlive: function (index) {
      return index in this.aliveCellsMap
    }
  }
}
</script>

<style>
.grid__container {
  /* width: var(--columns) * 10px; */
  /* height: 30vw; */
  /* margin: auto; */
  display: grid;
  border: solid 1px black;
  background-color: black;
  grid-gap: 1px;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
}
</style>