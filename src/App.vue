<template>
  <div id="game-of-life">
    <div class="logos-container">
      <img class="theodo-logo" alt="Theodo logo" src="./assets/theodo-logo.png">
      <img class="vue-logo" alt="Vue logo" src="./assets/vue-logo.png">
    </div>
    <div class="buttons-container">
      <button @click="randomizeMap()">Random</button>
    </div>
    <div class="buttons-container">
      <button @click="updateAliveCellsMap()">Next</button>
    </div>
    <div class="buttons-container">
      <button @click="killAll()">Kill</button>
    </div>
    <div class="buttons-container">
      <button @click="live()">Live</button>
    </div>
    <Grid v-bind:toggleStateCallback="this.toggleCellState" v-bind:rows-count="this.rowsCount" v-bind:columns-count="this.columnsCount" v-bind:alive-cells-map="this.aliveCellsMap"/>
  </div>
</template>

<script>
import Grid from './Grid.vue'
import { getRandomizedMap } from './services/grid-helper.js'
import { getNextMap } from './services/conway-rules.js'
const initialRowsCount = 50
export default {
  name: 'GameOfLife',
  components: {Grid},
  data: function() {
    return  {
      rowsCount: initialRowsCount,
      aliveCellsMap: {
        R6C15: true,
        R9C13: true,
        R8C18: true,
        R1C25: true,
        R5C24: true,
      }
    };
  },
  computed: {
    columnsCount: function() {
      return 3 * this.rowsCount;
    }
  },
  methods: {
    randomizeMap: function() {
      this.aliveCellsMap = getRandomizedMap(this.rowsCount, this.columnsCount);
    },
    toggleCellState: function(id) {
      const newAliveCellsMap = {}
      for (let [key, value] of Object.entries(this.aliveCellsMap)) {
        if (key != id) {
          newAliveCellsMap[key] = value
        }
      }
      if (!(id in this.aliveCellsMap)) {
        newAliveCellsMap[id] = true;
      }
      this.aliveCellsMap = newAliveCellsMap;
    },
    updateAliveCellsMap: function() {
      this.aliveCellsMap = getNextMap(this.rowsCount, this.columnsCount, this.aliveCellsMap);
    },
    killAll: function() {
      this.aliveCellsMap = Object();
    },
    live: function() {
      setInterval(this.updateAliveCellsMap, 100);
    }
  }
}
</script>

<style>
#game-of-life {
  padding: 60px 40px;
  position: relative;
}
.logos-container {
  position: absolute;
  top: 0;
  left: 0;
}
.logos-container img {
  height: 40px;
}
.logos-container img + img {
  margin-left: 5px;
}
.buttons-container {
  width: 65px;
  margin: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: rgba(220, 220, 220, 0.5);
}
</style>
