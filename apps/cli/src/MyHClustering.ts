/*This is a recursive function that takes the `dataMat`,
and then calcualtes the correlation of the `dataMat`using the defined `correaltion.ts`.
Then finds the coordinates of the maximum element in it using the `findMaxCoor.ts`.
Then uses the `deleteAndAddMean.ts to receive the new dataMat to call itself while `dataMat` has more than one column.
This function should return the coordinates of the maximum element each time it is executed.*/

import { correlation } from "./correaltion";
import { deleteAndAddMean } from "./deleteAndAddMean";
import { findMaxCoord } from "./findMaxCoord";

export function MyHClustering(
  dataMat: number[][],
  maxCoords: number[][] = []
): number[][] {
  // Calculate the Correaltion Matrix
  let corrMat = correlation(dataMat);

  //   console.log(
  //     `The data array has ${dataMat.length} rows and ${dataMat[0].length} columns.`
  //   );
  //   console.table(corrMat);
  let maxCoor = findMaxCoord(corrMat);
  //   console.log(maxCoor);
  //   console.log(corrMat[maxCoor[0]][maxCoor[1]]);
  maxCoords.push(maxCoor);
  const corrRows = corrMat.length;
  const corrCols = corrMat[0].length;
  //   console.log(
  //     `The correlation array has ${corrRows} rows and ${corrCols} columns.`
  //   );

  // Base case: if dataMat has only one column, return the maxCoords
  if (dataMat[0].length === 1) {
    return maxCoords;
  }

  // Recursive case: delete one column and call the function again
  let newDataMat = deleteAndAddMean(dataMat, maxCoor[0], maxCoor[1]);
  return MyHClustering(newDataMat, maxCoords);
}
