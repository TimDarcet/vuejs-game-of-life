import { getCellId, getCellIdFromIndex } from './grid-helper'

/**
 * This function returns the Ids of the directly nearby cells
 *
 * @param {integer} row
 * @param {integer} column
 */
const getNeighbours = (row, column) => {
  return [
    getCellId(row - 1, column - 1),
    getCellId(row - 1, column),
    getCellId(row - 1, column + 1),
    getCellId(row, column - 1),
    getCellId(row, column + 1),
    getCellId(row + 1, column - 1),
    getCellId(row + 1, column),
    getCellId(row + 1, column + 1)
  ]
}

/**
 * This function returns the count of a position nearby alive cells
 *
 * @param {integer} row
 * @param {integer} column
 * @param {Object}  aliveCellsMap
 */
const getAliveNeighboursCount = (row, column, aliveCellsMap) => {
  var count = 0;
  for (var id of getNeighbours(row, column)) {
    if (id in aliveCellsMap) {
      count++;
    }
  }
  return count;
}

/**
 * This function returns the next state of the cell according to Conway's rules
 *
 * @param {boolean} isAliveCell
 * @param {Object}  aliveNeighboursCount
 */
const getCellNextState = (isAliveCell, aliveNeighboursCount) => {
  if ((aliveNeighboursCount == 3) || (aliveNeighboursCount == 2 && isAliveCell)) {
    return true;
  }
  else {
    return false;
  }
}

/**
 * This function returns the new map of alive cells, after 1 iteration
 *
 * @param {integer} rowsCount
 * @param {integer} columnsCount
 * @param {Object}  aliveCellsMap
 */
export const getNextMap = (rowsCount, columnsCount, aliveCellsMap) => {
  const newMap = Object();
  for (var i = 0; i < columnsCount; i++) {
    for (var j = 0; j < rowsCount; j++) {
      var id = getCellId(j, i);
      if (getCellNextState(id in aliveCellsMap, getAliveNeighboursCount(j, i, aliveCellsMap))) {
        newMap[id] = true;
      }
    }
  }
  return newMap;
}
