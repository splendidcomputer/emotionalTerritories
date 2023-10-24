import { promises } from "node:fs";
import path from "node:path";
import { findMaxCoord } from "./findMaxCoord";
import { deleteAndAddMean } from "./deleteAndAddMean";
import { correlation } from "./correaltion";
import { MyHClustering } from "./MyHClustering";
// import { create, all } from "mathjs";

// Problem Settings
const nFeatures = 5;

const __dirname = path.dirname(import.meta.url);
const fileUrl = new URL(`${__dirname}/../data/data.csv`);
// console.log("Reading the data.csv...", fileUrl);
try {
  const data = await promises.readFile(fileUrl, "utf8");
  let i = 0;
  const lines = data.split(/\r?\n/);
  const fieldNames = lines[0].split(";").slice(0, nFeatures);
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const fieldValues = lines[i].split(";");
    const o: Record<string, number> = { line: i };
    for (let j = 0; j < fieldNames.length; j++) {
      o[fieldNames[j]] = parseInt(fieldValues[j]);
    }
    result.push(o);
  }
  // console.log(fieldNames);
  const dataMat = result.map((obj) => Object.values(obj));

  const numRows = dataMat.length;
  const numCols = dataMat[0].length;

  // Perform Hierachical Clustering
  const maxCoords: number[][] = MyHClus`tering(dataMat);
  console.log(maxCoords);

  // Calculate the Correaltion Matrix

  // let corrMat = correlation(dataMat);

  // console.log(`The data array has ${numRows} rows and ${numCols} columns.`);
  // console.table(corrMat);
  // let maxCoor = findMaxCoord(corrMat);
  // console.log(maxCoor);
  // console.log(corrMat[maxCoor[0]][maxCoor[1]]);
  // const corrRows = corrMat.length;
  // const corrCols = corrMat[0].length;
  // console.log(
  //   `The correlation array has ${corrRows} rows and ${corrCols} columns.`
  // );
} catch (err) {
  console.error(err);
}
