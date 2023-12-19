class StringSchema {
  constructor() {
    this.call = false;
  }

  findSpace(value) {
    for (let i = 0; i < value.length; i += 1) {
      if (value[i] === ' ') {
        return true;
      }
    }
    return false;
  }

  isValid(data) {
    if (typeof data !== 'string') {
      return false;
    }
    if (this.call && !this.findSpace(data)) {
      return false;
    }
    return true;
  }

  hasSpaces() {
    this.call = true;
    return this;
  }
}
export default StringSchema;

// for (let i = 0; i < value.length; i++) {
//     if (value[i] === ' ') {
//         return true;
//     }
// return false
//   }
