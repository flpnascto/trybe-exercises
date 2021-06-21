class MainMemory {
  constructor() {
    this.loadedMemory = []
  }

  load(value) {
    this.loadedMemory.push(value);
  }

  get(index) {
    const value = this.loadedMemory[index];
    return parseFloat(value);
  }

  clean() {
    this.loadedMemory = []
  }
}

module.exports = MainMemory