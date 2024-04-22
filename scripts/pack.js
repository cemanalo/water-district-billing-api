const fs = require("fs");
const path = require("path");
const { exec } = require("node:child_process");

const distDir = ".dist";
const handlersDir = './src/handlers'

const handlerFiles = fs
  .readdirSync(handlersDir, {
    withFileTypes: true,
  })
  .filter((f) => f.isFile());

console.log({ handlerFiles });

const zipFiles = handlerFiles.map((f) => {
  const outputDir = `${distDir}/${path.basename(f.name, '.ts')}`;
  return [`${outputDir}.zip`, `${outputDir}*`];
});

const zipCommands = zipFiles.map(
  ([target, sources]) => `zip -rqj ${target} ${sources}`
);

exec(zipCommands.join(" && "), (err, out) => {
  console.log({
    out,
    err,
  });
});
