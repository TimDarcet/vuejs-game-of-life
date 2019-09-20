<template>
  <div class="grid__container" :style="`--rows:${rowsCount}; --columns:${columnsCount};`">
    <Cell v-for="x in cellsCount" :key="x" v-bind:is-alive="isCellAlive(getCellIdFromIndex(x, columnsCount))" @click.native="toggleStateCallback(getCellIdFromIndex(x, columnsCount))"/>
  </div>
</template>

<script>
import { getCellIdFromIndex } from './services/grid-helper.js'
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
        },
        toggleStateCallback: {
          type: Function
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
    },
    getCellIdFromIndex
  }
}
</script>

<style>
.grid__container {
  /* width: var(--columns) * 10px; */
  width: 90vw;
  height: 30vw;
  margin: auto;
  display: grid;
  border: solid 1px black;
  background-color: black;
  grid-gap: 1px;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
}
</style>