/*This is a recursive function that takes the `dataMat`,
and then calcualtes the correlation of the `dataMat`using the defined `correaltion.ts`.
Then finds the coordinates of the maximum element in it using the `findMaxCoor.ts`.
Then uses the `deleteAndAddMean.ts to receive the new dataMat to call itself while `dataMat` has more than one column.
This function should return the coordinates of the maximum element each time it is executed.*/

import { Correlation } from "./Correaltion";
import { DeleteAndAddMean } from "./DeleteAndAddMean";
import { FindMaxCoord } from "./FindMaxCoord";

export function MyHClustering(
  dataMat: number[][],
  maxCoords: number[][] = []
): number[][] {
  // Calculate the Correaltion Matrix
  let corrMat = Correlation(dataMat);
  let maxCoor = FindMaxCoord(corrMat);

  maxCoords.push(maxCoor);

  console.log(dataMat[1].length);
  // Base case: if dataMat has only one column, return the maxCoords
  if (dataMat[1].length === 1) {
    return maxCoords;
  }

  // Recursive case: delete one column and call the function again
  let newDataMat = DeleteAndAddMean(dataMat, maxCoor[0], maxCoor[1]);
  return MyHClustering(newDataMat, maxCoords);
}
