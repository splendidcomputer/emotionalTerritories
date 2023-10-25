/**
 * This function is recursive and does the following:
 * 1. Takes 'dataMat';
 * 2. Calculates correlation using 'Correlation.ts';
 * 3. Finds coordinates of the maximum element of the correlation matrix (the most similar pair) using 'FindMaxCoor.ts';
 * 4. Uses 'DeleteAndAddMean.ts' to get a new 'dataMat'.
 * 5. Repeats as long as 'dataMat' has more than one column.
 * Returns the coordinates of the maximum element each time.
 */

import { Correlation } from "./Correaltion";
import { DeleteAndAddMean } from "./DeleteAndAddMean";
import { FindMaxCoord } from "./FindMaxCoord";

export function MyHClustering(
  dataMat: number[][],
  maxCoords: number[][] = []
): number[][] {
  // Calculate the Correaltion Matrix
  let corrMat = Correlation(dataMat); // The correlation matrix of the current points.
  let maxCoor = FindMaxCoord(corrMat); // The coordinates of the most similar pair.

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
