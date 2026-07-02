if (process.argv.length < 5) {
  console.log("Uso: node tk_deploy_strategy.js <isCritical> <currentVersion> <newVersion>");
  console.log("Ejemplo: node tk_deploy_strategy.js false 1.0 2.0");
  process.exit(1);
}

const isCritical = process.argv[2] === "true";
const currentVersion = process.argv[3];
const newVersion = process.argv[4];


const partsCurrent = currentVersion.split(".");
const partsNew = newVersion.split(".");

if (isCritical) {
  console.log(`[RollingUpdate] - Deploying version ${newVersion} over ${currentVersion}`);
} else if (partsCurrent[0] !== partsNew[0]) {
  console.log(`[Recreate] - Deploying version ${newVersion} over ${currentVersion}`);
} else {
  console.log(`[RollingUpdate] - Deploying version ${newVersion} over ${currentVersion}`);
}
