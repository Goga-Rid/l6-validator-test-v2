class ObjectSchema {
  constructor() {
    this.validations = {};
  }

  shape(newData) {
    this.validations = newData;
    return this;
  }

  validateField(data, validation) {
    if (validation === null || typeof validation !== 'object') {
      return data === validation;
    }
    if (validation.isValid) {
      return validation.isValid(data);
    }
    const dataKeys = Object.keys(data);
    const schemaKeys = Object.keys(validation);

    if (dataKeys.length !== schemaKeys.length) {
      return false;
    }

    return schemaKeys.every((key) => this.validateField(data[key], validation[key]));
  }

  isValid(data) {
    return this.validateField(data, this.validations);
  }
}
export default ObjectSchema;
