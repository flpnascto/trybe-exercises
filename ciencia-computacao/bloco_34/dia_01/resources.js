const os = require('os')

const numberCores = os.cpus().length
const cpuModel = os.cpus()[0].model;
const speed = (os.cpus()[0].speed / 1000).toFixed(2);

const ram = parseInt(os.totalmem() * 1e-9);

console.log(`CPU "${cpuModel}" com ${numberCores} cores e velocidade ${speed} GHz e ${ram}GB RAM`);