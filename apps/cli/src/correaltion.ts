export function correlation(matrix: number[][]): number[][] {
  const nRows = matrix.length;
  const nCols = matrix[0].length;
  const means = new Array(nCols).fill(0);
  for (let j = 0; j < nCols; j++) {
    for (let i = 0; i < nRows; i++) {
      means[j] += matrix[i][j];
    }
    means[j] /= nRows;
  }
  const stdDevs = new Array(nCols).fill(0);
  for (let j = 0; j < nCols; j++) {
    for (let i = 0; i < nRows; i++) {
      stdDevs[j] += (matrix[i][j] - means[j]) ** 2;
    }
    stdDevs[j] = Math.sqrt(stdDevs[j] / (nRows - 1));
  }
  const corrMat = new Array(nCols).fill(0).map(() => new Array(nCols).fill(0));
  for (let j = 0; j < nCols; j++) {
    for (let k = j; k < nCols; k++) {
      let numerator = 0;
      for (let i = 0; i < nRows; i++) {
        numerator += (matrix[i][j] - means[j]) * (matrix[i][k] - means[k]);
      }
      const denominator = stdDevs[j] * stdDevs[k];
      const corr = numerator / ((nRows - 1) * denominator);
      corrMat[j][k] = corr;
      corrMat[k][j] = corr;
    }
  }
  return corrMat;
}
