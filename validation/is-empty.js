// this function checks if the value is empty regardless of whether it's undefined, null, an object or a string

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof vaue === "string" && value.trim().length === 0);

module.exports = isEmpty;
