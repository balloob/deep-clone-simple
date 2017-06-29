function isObject(value) {
  return !!value && typeof value == 'object';
}

module.exports = function deepcopy(value) {
  if (!isObject(value)) {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(deepcopy);
  }
  const result = {};
  Object.keys(value).forEach(
    key => { result[key] = deepcopy(value[key]); });
  return result;
}
