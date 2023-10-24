export function deleteAndAddMean(
  dataMat: number[][],
  col1: number,
  col2: number
): number[][] {
  // Get the number of rows in the data matrix
  const numRows = dataMat.length;

  // Calculate the mean of the two columns
  const mean =
    dataMat.reduce((acc, row) => acc + row[col1] + row[col2], 0) /
    (2 * numRows);

  // Log the two columns and their mean
  console.table({
    [col1]: dataMat.map((row) => row[col1]),
    [col2]: dataMat.map((row) => row[col2]),
    mean: Array(numRows).fill(mean),
  });

  // Create a new matrix with the two columns removed and the mean added as the last column
  const newDataMat = dataMat.map((row) => [
    ...row.slice(0, col1),
    ...row.slice(col1 + 1, col2),
    ...row.slice(col2 + 1),
    mean,
  ]);

  return newDataMat;
}
