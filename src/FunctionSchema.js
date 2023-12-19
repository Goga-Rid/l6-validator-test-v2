class FunctionSchema {
  constructor() {
    this.summon = false;
    this.properties = {};
    this.expct = null;
    this.args = null;
  }

  context(value) {
    const result = value.apply(this.properties, this.args);
    if (result === this.expct) {
      return true;
    }
    return false;
  }

  isValid(data) {
    if (typeof data !== 'function') {
      return false;
    }
    if (this.summon && !this.context(data)) {
      return false;
    }
    return true;
  }

  expect(value) {
    this.expct = value;
    this.summon = true;
    return this;
  }

  callWith(props) {
    this.properties = props;
    this.summon = true;
    return this;
  }

  arguments(...value) {
    this.args = value;
    this.summon = true;
    return this;
  }
}
export default FunctionSchema;
