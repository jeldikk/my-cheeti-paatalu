const Ajv = require("ajv");

const ajv = new Ajv({ allErrors: true });

function validateData(schema, data) {
  const validator = ajv.compile(schema);
  const valid = validator(data);
  return { valid, errors: validator.errors };
}

function createErrorMap(errors) {}

module.exports = {
  validateData,
};
