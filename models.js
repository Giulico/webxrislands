import * as path from "path";
import parse from "gltfjsx/src/utils/parser.js";

const modelName = "Islands";
const inFile = path.join("public", `${modelName}.glb`);
const outJsx = path.join("src", `${modelName}.jsx`);

const jsxOptions = {
  transform: true,
  root: ".",
};

parse(inFile, outJsx, jsxOptions)
  .then((e) => {
    console.log(e);
  })
  .catch((e) => {
    console.log(e);
  });
