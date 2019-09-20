export const getCellIdFromIndex = function(cellIndex, columnsCount) {
  const row = Math.floor((cellIndex - 1) / columnsCount)
  const column = (cellIndex - 1) % columnsCount

  return getCellId(row, column)
}

export const getCellId = function(row, column) {
  return `R${row}C${column}`
}

export const getRandomizedMap = function(rowsCount, columnsCount) {
  var res = Object();
  for (var i = 0; i < columnsCount; i++){
    for (var j = 0; j < rowsCount; j++){
      if (Math.random() > 0.8) {
        res[getCellId(j, i)] = true;
      }
    }
  }
  return res;
}