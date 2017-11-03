var tck = {

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is a function
   */
  isFunction: function (data) {
    return typeof data === 'function';
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is a array
   */
  isArray: function (data) {
    return typeof data === "object" && data instanceof Array;
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is a object
   */
  isObject: function (data) {
    return (typeof data === "object") && !(data instanceof Array) && data !== null;
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is a number
   */
  isNumber: function (data) {
    return typeof data === "number" || data instanceof Number;
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is a integer
   */
  isInteger: function (data) {
    if (tck.isNumber(data)) return data % 1 === 0;
    else return false;
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is a string
   */
  isString: function (data) {
    return typeof data === "string" || data instanceof String;
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is boolean
   */
  isBoolean: function (data) {
    return typeof data === "boolean";
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Returns true when data is empty
   */
  isEmpty: function (data) {
    return tck.isUndefined(data) || tck.isNull(data) || data === "";
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is null
   */
  isNull: function (data) {
    return data === null;
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is not a number
   */
  isNaN: function (data) {
    return isNaN(data);
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Validate data is undefined
   */
  isUndefined: function (data) {
    return undefined === data;
  },

  /**
   * @param {Any} data : Data for evaluation.
   * @returns {Boolean} : Returns true when data is set
   */
  isSet: function (data) {
    return !tck.isEmpty(data);
  },

  /**
   *  @param {Any} obj : Data for evaluation
   * @param {String} route : Route from data
   *  @returns {Any} : Returns element in object
   */
  get: function (obj, route) {
    if (tck.isSet(obj) && tck.isSet(route)) {
      route = route.split(".");
      if (route.length === 1 ) return obj[route[0]];
      else {
        for (var i = 0; i < route.length; i++) {
          if (tck.isSet(obj[route[i]])) obj = obj[route[i]];
          else return undefined;
        }
        return obj;
      }
    } else return undefined;
  }
};

// Function alias
tck.f = tck.isFunction;
tck.a = tck.isArray;
tck.o = tck.isObject;
tck.n = tck.isNumber;
tck.i = tck.isInteger;
tck.s = tck.isString;
tck.b = tck.isBoolean;
tck.e = tck.isEmpty;
tck.null = tck.isNull;
tck.nan = tck.isNaN;
tck.u = tck.isUndefined;
tck.set = tck.isSet;
tck.g = tck.get;

module.exports = tck;
