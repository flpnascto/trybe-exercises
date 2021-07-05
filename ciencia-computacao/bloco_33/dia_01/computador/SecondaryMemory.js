const fs = require('fs')
// const { writeFileSync, readFileSync } = require('node:fs')

const DISK_PATH = './disk'

class SecondaryMemory {
  load(value) {
    const disk = fs.readdirSync(DISK_PATH)

    const nextFileName = `${DISK_PATH}/cel${disk.length}`

    fs.writeFileSync(nextFileName, value)
  }

  get(index) {
    const fileName = `${DISK_PATH}/cel${index}`

    const value = fs.readFileSync(fileName);
    return parseFloat(value);
  }

  clean() {
    fs.rmdirSync(DISK_PATH, { recursive: true })
    fs.mkdirSync(DISK_PATH)
  }
}

module.exports = SecondaryMemory