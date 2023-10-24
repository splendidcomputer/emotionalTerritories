export function findMaxCoord(matrix: number[][]): [number, number] {
  const nRows = matrix.length;
  const nCols = matrix[0].length;
  const maxCoord: [number, number] = [0, 0];
  let maxVal = -Infinity;
  for (let i = 0; i < nRows; i++) {
    for (let j = 0; j < nCols; j++) {
      if (i !== j && i !== nCols - j - 1) {
        if (matrix[i][j] > maxVal) {
          maxVal = matrix[i][j];
          maxCoord[0] = i;
          maxCoord[1] = j;
        }
      }
    }
  }
  return maxCoord;
}
