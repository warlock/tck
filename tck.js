var tck = {

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is a function
   */
  'isFunction': function (data) {
    return typeof data === 'function';
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is a array
   */
  'isArray': function (data) {
    return typeof data === "object" && data instanceof Array;
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is a object
   */
  'isObject': function (data) {
    return (typeof data === "object") && !(data instanceof Array) && data !== null;
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is a number
   */
  'isNumber': function (data) {
    return typeof data === "number" || data instanceof Number;
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is a integer
   */
  'isInteger': function (data) {
    if (tck.isNumber(data)) return data % 1 === 0;
    else return false;
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is a string
   */
  'isString': function (data) {
    return typeof data === "string" || data instanceof String;
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is boolean
   */
  'isBoolean': function (data) {
    return typeof data === "boolean";
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Returns true when data is empty
   */
  'isEmpty': function (data) {
    return tck.isUndefined(data) || tck.isNull(data) || data === "";
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is null
   */
  'isNull': function (data) {
    return data === null;
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is not a number
   */
  'isNaN': function (data) {
    return isNaN(data);
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is undefined
   */
  'isUndefined': function (data) {
    return undefined === data;
  }
};

module.exports = tck;
