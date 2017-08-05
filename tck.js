var tck = {
  'isFunction': function (fn) {
    return typeof fn === 'function';
  },
  'isArray': function (obj) {
    return typeof obj === "object" && obj instanceof Array;
  },
  'isObject': function (obj) {
    return (typeof obj === "object") && !(obj instanceof Array) && obj !== null;
  },
  'isNumber': function (obj) {
    return typeof obj === "number" || obj instanceof Number;
  },
  'isInteger': function (obj) {
    if (tck.isNumber(obj)) return obj % 1 === 0;
    else return false;
  },
  'isString': function (obj ) {
    return typeof obj === "string" || obj instanceof String;
  },
  'isBoolean': function (obj) {
    return typeof obj === "boolean";
  },
  'isEmpty': function (data) {
    return (undefined === data || data === null || data === "");
  },
  'isNull': function (data) {
    return data === null;
  },
  'isNaN': function (data) {
    return isNaN(data);
  },
  'isUndefined': function (data) {
    return data === undefined;
  }
};

module.exports = tck;
