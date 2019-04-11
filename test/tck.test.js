/*global describe it*/
var chai = require('chai')
var tck = require('../tck.js')

describe('Type', function() {
  var data = {
    func: function() {
      return true
    },
    func_no_ret: function() {
      //do nothing
    },
    num: 1.2,
    int: 1,
    string: 'hi',
    obj: { a: 'b' },
    bool: true,
    array: [1, 2, 3],
    null: null,
    undefined: undefined,
    emptarr: [],
    emptstr: ''
  }

  describe('tck.isFunction()', function() {
    it('Check is function', function() {
      for (var key in data) {
        if (key === 'func') chai.assert.isTrue(tck.isFunction(data[key]))
        else if (key === 'func_no_ret') chai.assert.isTrue(tck.isFunction(data[key]))
        else chai.assert.isNotTrue(tck.isFunction(data[key]))
      }
    })
  })

  describe('tck.isArray()', function() {
    it('Check is Array', function() {
      for (var key in data) {
        if (key === 'array') chai.assert.isTrue(tck.isArray(data[key]))
        else if (key === 'emptarr') chai.assert.isTrue(tck.isArray(data[key]))
        else chai.assert.isNotTrue(tck.isArray(data[key]))
      }
    })
  })

  describe('tck.isObject()', function() {
    it('Check is Object', function() {
      for (var key in data) {
        if (key === 'obj') chai.assert.isTrue(tck.isObject(data[key]))
        else chai.assert.isNotTrue(tck.isObject(data[key]))
      }
    })
  })

  describe('tck.isNumber()', function() {
    it('Check float is number', function() {
      for (var key in data) {
        if (key === 'num') chai.assert.isTrue(tck.isNumber(data[key]))
        else if (key === 'int') chai.assert.isTrue(tck.isNumber(data[key]))
        else chai.assert.isNotTrue(tck.isNumber(data[key]))
      }
    })
  })

  describe('tck.isInteger()', function() {
    it('Check is integer', function() {
      for (var key in data) {
        if (key === 'int') chai.assert.isTrue(tck.isInteger(data[key]))
        else chai.assert.isNotTrue(tck.isInteger(data[key]))
      }
    })
  })

  describe('tck.isString()', function() {
    it('Check is string', function() {
      for (var key in data) {
        if (key === 'string') chai.assert.isTrue(tck.isString(data[key]))
        else if (key === 'emptstr') chai.assert.isTrue(tck.isString(data[key]))
        else chai.assert.isNotTrue(tck.isString(data[key]))
      }
    })
  })

  describe('tck.isBoolean()', function() {
    it('Check is boolean', function() {
      for (var key in data) {
        if (key === 'bool') chai.assert.isTrue(tck.isBoolean(data[key]))
        else chai.assert.isNotTrue(tck.isBoolean(data[key]))
      }
    })
  })

  describe('tck.isEmpty()', function() {
    it('Check is empty', function() {
      for (var key in data) {
        if (key === 'null') chai.assert.isTrue(tck.isEmpty(data[key]), 'null is empty')
        else if (key === 'undefined') chai.assert.isTrue(tck.isEmpty(data[key]), 'undefined is empty')
        else if (key === 'emptstr') chai.assert.isTrue(tck.isEmpty(data[key]), 'empty string is empty')
        else chai.assert.isNotTrue(tck.isEmpty(data[key]), 'This is empty: ' + key)
      }
    })
  })

  describe('tck.isNull', function() {
    it('Check value is null', function() {
      for (var key in data) {
        if (key === 'null') chai.assert.isTrue(tck.isNull(data[key]))
        else chai.assert.isNotTrue(tck.isNull(data[key]))
      }
    })
  })

  describe('tck.isNaN', function() {
    it('Check value is not a number', function() {
      for (var key in data) {
        if (
          key === 'num' ||
          key === 'int' ||
          key === 'bool' ||
          key === 'null' ||
          key === 'emptarr' ||
          key === 'emptstr'
        )
          chai.assert.isFalse(tck.isNaN(data[key]), 'want false -> ' + key)
        else chai.assert.isTrue(tck.isNaN(data[key]), 'want true -> ' + key)
      }
    })
  })

  describe('tck.isUndefined()', function() {
    it('Check is undefined', function() {
      for (var key in data) {
        if (key === 'undefined') chai.assert.isTrue(tck.isUndefined(data[key]))
        else chai.assert.isNotTrue(tck.isUndefined(data[key]), 'assert fails in ' + key)
      }
    })
  })

  describe('tck.isSet()', function() {
    it('Check is set', function() {
      for (var key in data) {
        if (key === 'null') chai.assert.isNotTrue(tck.isSet(data[key]), 'null is not set value')
        else if (key === 'undefined') chai.assert.isNotTrue(tck.isSet(data[key]), 'undefined is not set value')
        else if (key === 'emptstr') chai.assert.isNotTrue(tck.isSet(data[key]), 'empty string is not set value')
        else chai.assert.isTrue(tck.isSet(data[key]), 'This is empty: ' + key)
      }
    })
  })

  describe('tck.get()', function() {
    var a = { a: { b: ['c', 'd'] } }
    it('Check get a string', function() {
      chai.assert.isString(tck.get(a, 'a.b.0'))
    })

    it('Check get "c" string', function() {
      chai.assert.equal(tck.get(a, 'a.b.0'), 'c')
    })

    it('Check get a array', function() {
      chai.assert.isArray(tck.get(a, 'a.b'))
    })

    it('Check get a object', function() {
      chai.assert.isObject(tck.get(a, 'a'))
    })
  })
})
