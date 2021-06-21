const os = require('os')

const ram = os.totalmem();

function startScript() {
  setInterval(() => {
    const freeRam = os.freemem();
    const usedRam = ((ram - freeRam) * 1e-9).toFixed(2);
    const totalRam = (ram * 1e-9).toFixed(2)

    console.log(`Memória total: ${totalRam} - Memória utilizada: ${usedRam}`);
  }, 1000)
}

startScript();
