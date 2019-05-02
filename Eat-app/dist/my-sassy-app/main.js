(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<base href=\"/\">\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\"\n        content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n<body>\n<div class=\"body__img\"></div>\n<div class=\"wrapper\">\n\n  <app-topmenu> </app-topmenu>\n\n  <main class=\"content\">\n    <router-outlet></router-outlet>\n  </main>\n\n\n</div>\n\n</body>\n</html>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _catalog_cat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./catalog/cat.component */ "./src/app/catalog/cat.component.ts");
/* harmony import */ var _catalog_catfilter_catfilter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catalog/catfilter/catfilter.component */ "./src/app/catalog/catfilter/catfilter.component.ts");
/* harmony import */ var _header_topmenu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/topmenu.component */ "./src/app/header/topmenu.component.ts");
/* harmony import */ var _one_cart_one_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./one-cart/one-cart.component */ "./src/app/one-cart/one-cart.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _header_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/add-recipe/add-recipe.component */ "./src/app/header/add-recipe/add-recipe.component.ts");
/* harmony import */ var _header_add_recipe_product_product_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./header/add-recipe/product/product.component */ "./src/app/header/add-recipe/product/product.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























firebase__WEBPACK_IMPORTED_MODULE_19__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase);
var appRoutes = [
    { path: 'cart/:id', component: _one_cart_one_cart_component__WEBPACK_IMPORTED_MODULE_12__["OneCartComponent"] },
    { path: 'test', component: _test_test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"] },
    { path: 'menu/:day', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"] },
    { path: 'add_recipe', component: _header_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_20__["AddRecipeComponent"] },
    { path: '', pathMatch: 'full', component: _catalog_cat_component__WEBPACK_IMPORTED_MODULE_9__["CatComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _catalog_cat_component__WEBPACK_IMPORTED_MODULE_9__["CatComponent"],
                _catalog_catfilter_catfilter_component__WEBPACK_IMPORTED_MODULE_10__["CatfilterComponent"],
                _header_topmenu_component__WEBPACK_IMPORTED_MODULE_11__["TopmenuComponent"],
                _one_cart_one_cart_component__WEBPACK_IMPORTED_MODULE_12__["OneCartComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"],
                _header_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_20__["AddRecipeComponent"],
                _header_add_recipe_product_product_component__WEBPACK_IMPORTED_MODULE_21__["ProductComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
                    scrollPositionRestoration: 'top'
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase, 'eatCatalog'),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_22__["InfiniteScrollModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/catalog/cat.component.html":
/*!********************************************!*\
  !*** ./src/app/catalog/cat.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-catfilter (searchEvent)=\"FilteredData()\" (resetSearch)=\"resetSearch()\"  [listCartId]=\"CatListId\"></app-catfilter>\n\n<div class=\"preloader\" *ngIf=\"preloader\">\n  <div class=\"preloader__status\"></div>\n</div>\n\n\n\n\n<div class=\"cat\" infiniteScroll [infiniteScrollDistance]=\"0\" [infiniteScrollThrottle]=\"50\" [infiniteScrollDisabled]=\"stopinterscroll\" (scrolled)=\"onScroll()\" *ngIf=\"viewCartList.length > 0\">\n  <div class=\"cat__item\" id=\"{{item.Id}}\" [class.active]=\"item.Id == activeItem\" [class.big]=\"item.Id == bigcart\" *ngFor=\"let item of viewCartList; trackBy: trackByFn\">\n    <div class=\"cat__category\">{{item.Category}} {{item.Id}}</div>\n    <div class=\"cat__img\" [ngStyle]=\"{'background-image': item.Img}\">\n      <div class=\"cat__img-bg\" (click)=\"resizecart(item.Id)\"></div>\n      <div class=\"cat__btn\">\n        <div [routerLink]=\"['/cart', item.Id]\" class=\"cat__btn-size\"><i class=\"mdi mdi-link\"></i></div>\n        <div class=\"cat__btn-add\" (click)=\"openmodal(item.Name, item.Id)\"><i class=\"mdi mdi-plus\"></i></div>\n        <div class=\"cat__btn-tabs\" (click)=\"switchtabs(item.Id)\">\n          <i class=\"mdi mdi-silverware\"></i>\n          <i class=\"mdi mdi-playlist-check\"></i>\n        </div>\n      </div>\n    </div>\n    <div class=\"cat__tabs\">\n      <div class=\"cat__tab cat__tab_one\">\n        <div class=\"cat__title\" (click)=\"resizecart(item.Id)\">{{item.Name}}</div>\n        <div class=\"cat__title-mini\">Ингредиенты</div>\n        <div class=\"cat__list\">\n          <div class=\"cat__list-item\" *ngFor=\"let product of item.Ingredients\">\n\n            <div class=\"cat__list-title\">{{product[0]}} </div>\n            <div class=\"cat__list-value\">{{product[1]}} </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"cat__tab cat__tab_two\">\n        <div class=\"cat__title\" (click)=\"resizecart(item.Id)\">{{item.Name}}</div>\n        <div class=\"cat__title-mini\">Приготовление: <span>{{item.Time}} мин</span></div>\n        <div class=\"cat__text cat__text_big\">\n          {{item.Comment}}\n        </div>\n        <div class=\"cat__text\" *ngIf=\"item.Comment.length < 300\">\n          {{item.Comment}}\n        </div>\n        <div class=\"cat__text\" *ngIf=\"item.Comment.length >= 300\">\n          {{item.Comment.substring(0, 300) + ' ...'}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"cart__modal-wrap\" *ngIf=\"modal && CatList.length > 0\">\n  <div class=\"cart__modal\">\n    <div class=\"cart__modal-close\" (click)=\"closemodal()\"><i class=\"mdi mdi-close\"></i></div>\n    <div class=\"cart__modal-title\">{{modalName}}</div>\n    <div class=\"cart__modal-text\">В какой день добавить блюдо?</div>\n\n    <div class=\"cart__modal-week\">\n      <div class=\"cart__modal-day\" *ngFor=\"let day of modaldays\" (click)=\"addMineMenu(day.value)\">\n        {{day.name}}\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/catalog/cat.component.ts":
/*!******************************************!*\
  !*** ./src/app/catalog/cat.component.ts ***!
  \******************************************/
/*! exports provided: CatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatComponent", function() { return CatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _catfilter_catfilter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catfilter/catfilter.component */ "./src/app/catalog/catfilter/catfilter.component.ts");
/* harmony import */ var _userinfo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userinfo.service */ "./src/app/userinfo.service.ts");
/* harmony import */ var _catservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catservice.service */ "./src/app/catalog/catservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {CatItem} from './cartlist.model';
var CatComponent = /** @class */ (function () {
    function CatComponent(userinfo, catservice) {
        this.userinfo = userinfo;
        this.catservice = catservice;
        this.modaldays = [
            { name: 'Пн', value: 'day1' },
            { name: 'Вт', value: 'day2' },
            { name: 'Ср', value: 'day3' },
            { name: 'Чт', value: 'day4' },
            { name: 'Пт', value: 'day5' },
            { name: 'Сб', value: 'day6' },
            { name: 'Вс', value: 'day7' }
        ];
        this.modal = false;
        this.localtimeArr = [];
        this.bigcartMarkerOn = false;
        this.bigcartMarkerOff = true;
        this.stopinterscroll = false;
        this.result = [];
        this.resultIng = [];
        //refactoring
        this.CatList = [];
        this.CatListId = [];
        this.viewCartList = [];
        this.countVievCart = 0;
        this.alMasNew = [];
    }
    //получаем все карточки и преобразуем их
    CatComponent.prototype.parseCatList = function () {
        var _this = this;
        this.CatList = [];
        this.preloader = true;
        this.catservice.getCartList().subscribe(function (catlist) {
            for (var i = 0; i < catlist.length; i++) {
                var oneCart = _this.upgradeListCatalog(catlist[i]);
                _this.CatListId.push(catlist[i].Id);
                _this.CatList.push(oneCart);
            }
            _this.nextCart();
        });
    };
    // получение следующих 6 карточек
    CatComponent.prototype.nextCart = function () {
        var nextCart = this.CatList.slice(this.countVievCart, this.countVievCart + 6);
        for (var i = 0; i < nextCart.length; i++) {
            this.viewCartList.push(nextCart[i]);
        }
        this.preloader = false;
        this.countVievCart = this.countVievCart + 6;
    };
    //изменяем все карточки
    CatComponent.prototype.upgradeListCatalog = function (cart) {
        cart.Ingredients = cart.Ingredients.split('\\n');
        for (var d = 0; d < cart.Ingredients.length; d++) {
            cart.Ingredients[d] = cart.Ingredients[d].split('--');
        }
        cart.Img = 'url(../../assets/eatimg/' + cart.Id + '.jpg)';
        return cart;
    };
    CatComponent.prototype.onScroll = function () {
        this.nextCart();
    };
    CatComponent.prototype.FilteredData = function () {
        var _this = this;
        //поиск по названию и ингредиентам
        if (this.catFilterComponent.titleFilterValue || this.catFilterComponent.selectedCategory) {
            this.viewCartList = [];
            this.result = [];
            this.resultIng = [];
            this.alMasNew = this.CatList; //массив всех элементов
            //поиск
            if (this.catFilterComponent.titleFilterValue && this.catFilterComponent.titleFilterValue.length > 2) {
                this.result = this.alMasNew.filter(function (x) { return x.Name.toLowerCase()
                    .indexOf(_this.catFilterComponent.titleFilterValue.toLocaleLowerCase()) != -1; });
                if (this.result.length != 0) {
                    for (var i = 0; i < this.result.length; i++) {
                        this.viewCartList.push(this.result[i]);
                    }
                }
                for (var f = 0; f < this.alMasNew.length; f++) {
                    for (var d = 0; d < this.alMasNew[f].Ingredients.length; d++) {
                        var targetIlem = this.alMasNew[f].Ingredients[d][0];
                        var searchItem = targetIlem.toLowerCase().indexOf(this.catFilterComponent.titleFilterValue.toLocaleLowerCase());
                        if (searchItem != -1) {
                            this.result.push(this.alMasNew[f]);
                            this.viewCartList.push(this.alMasNew[f]);
                        }
                    }
                }
            }
            if (this.catFilterComponent.selectedCategory && this.result.length > 0) {
                this.viewCartList = [];
                this.result = this.result.filter(function (x) { return x.Category == _this.catFilterComponent.selectedCategory; });
                for (var i = 0; i < this.result.length; i++) {
                    this.viewCartList.push(this.result[i]);
                }
            }
            if (this.catFilterComponent.selectedCategory && this.result.length == 0) {
                this.viewCartList = [];
                this.result = this.alMasNew.filter(function (x) { return x.Category == _this.catFilterComponent.selectedCategory; });
                for (var i = 0; i < this.result.length; i++) {
                    this.viewCartList.push(this.result[i]);
                }
            }
            this.viewCartList = this.getUnique(this.viewCartList, 'Id');
            this.stopinterscroll = true;
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
        else {
            this.resetSearchAll();
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
        this.result = [];
        this.resultIng = [];
    };
    CatComponent.prototype.getUnique = function (arr, comp) {
        var unique = arr.map(function (e) { return e[comp]; }).map(function (e, i, final) { return final.indexOf(e) === i && i; })
            .filter(function (e) { return arr[e]; }).map(function (e) { return arr[e]; });
        return unique;
    };
    CatComponent.prototype.resetSearch = function () {
        // console.log('очистка поиска');
        this.viewCartList = [];
        this.result = [];
        this.resultIng = [];
        this.catFilterComponent.titleFilterValue = null;
        this.countVievCart = 0;
        this.FilteredData();
    };
    CatComponent.prototype.resetSearchAll = function () {
        this.viewCartList = [];
        this.nextCart();
        this.result = [];
        this.resultIng = [];
        this.countVievCart = 0;
        this.catFilterComponent.titleFilterValue = null;
        this.catFilterComponent.selectedCategory = null;
        this.stopinterscroll = false;
    };
    CatComponent.prototype.resizecart = function (id) {
        if (this.bigcart == id) {
            this.bigcart = null;
            this.bigcartMarkerOn = false;
            this.bigcartMarkerOff = true;
            if (window.innerWidth > 747) {
                this.enebleItem();
            }
        }
        else {
            this.bigcart = id;
            this.bigcartMarkerOn = true;
            this.bigcartMarkerOff = false;
            if (window.innerWidth > 747) {
                this.disabledItev(id);
            }
        }
    };
    CatComponent.prototype.disabledItev = function (id) {
        this.enebleItem();
        var ArrallDom = document.getElementsByClassName('cat__item');
        var countEl = 1;
        for (var i = 0; i < ArrallDom.length; i++) {
            if (ArrallDom[i].id == id) {
                //для планшетов
                if (countEl == 1 && window.innerWidth <= 1199) {
                    ArrallDom[i + 1].classList.add('disabled');
                }
                if (countEl == 2 && window.innerWidth <= 1199) {
                    ArrallDom[i - 1].classList.add('disabled');
                }
                //для широких экранов
                if (countEl == 1 && window.innerWidth > 1199) {
                    ArrallDom[i + 1].classList.add('disabled');
                    ArrallDom[i + 2].classList.add('disabled');
                }
                if (countEl == 2 && window.innerWidth > 1199) {
                    ArrallDom[i - 1].classList.add('disabled');
                    ArrallDom[i + 1].classList.add('disabled');
                }
                if (countEl == 3 && window.innerWidth > 1199) {
                    ArrallDom[i - 1].classList.add('disabled');
                    ArrallDom[i - 2].classList.add('disabled');
                }
            }
            countEl++;
            if (countEl == 3 && window.innerWidth <= 1199) {
                countEl = 1;
            }
            if (countEl == 4 && window.innerWidth > 1199) {
                countEl = 1;
            }
        }
    };
    CatComponent.prototype.enebleItem = function () {
        var ArrallDom = document.getElementsByClassName('cat__item');
        for (var i = 0; i < ArrallDom.length; i++) {
            ArrallDom[i].classList.remove('disabled');
        }
    };
    CatComponent.prototype.switchtabs = function (id) {
        if (this.activeItem == id) {
            this.activeItem = null;
        }
        else {
            this.activeItem = id;
        }
    };
    CatComponent.prototype.openmodal = function (name, id) {
        this.modal = true;
        this.modalName = name;
        this.modalId = id;
    };
    CatComponent.prototype.closemodal = function () {
        this.modal = false;
    };
    CatComponent.prototype.addMineMenu = function (dayNum) {
        this.userinfo.addItem(dayNum, this.modalId);
        this.modal = false;
        var localtime = localStorage.getItem(dayNum);
        if (localtime) {
            this.localtimeArr = localtime.split(',');
            var finedid = this.localtimeArr.indexOf(this.modalId);
            if (finedid === -1) {
                this.localtimeArr.push(this.modalId);
                localtime = this.localtimeArr.join();
                localStorage.setItem(dayNum, localtime);
            }
        }
        else {
            localStorage.setItem(dayNum, this.modalId);
        }
    };
    CatComponent.prototype.ngOnInit = function () {
        this.parseCatList();
        this.preloader = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_catfilter_catfilter_component__WEBPACK_IMPORTED_MODULE_1__["CatfilterComponent"]),
        __metadata("design:type", _catfilter_catfilter_component__WEBPACK_IMPORTED_MODULE_1__["CatfilterComponent"])
    ], CatComponent.prototype, "catFilterComponent", void 0);
    CatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cat',
            template: __webpack_require__(/*! ./cat.component.html */ "./src/app/catalog/cat.component.html")
        }),
        __metadata("design:paramtypes", [_userinfo_service__WEBPACK_IMPORTED_MODULE_2__["UserinfoService"],
            _catservice_service__WEBPACK_IMPORTED_MODULE_3__["CatserviceService"]])
    ], CatComponent);
    return CatComponent;
}());



/***/ }),

/***/ "./src/app/catalog/catfilter/catfilter.component.html":
/*!************************************************************!*\
  !*** ./src/app/catalog/catfilter/catfilter.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cat-filter\" [ngClass]=\"{active: filterblock}\">\n  <div class=\"cat-filter__item-wrap\">\n    <div class=\"cat-filter__item\">\n      <div class=\"cat-filter__item_search\">\n        <input type=\"text\" placeholder=\"Поиск\" [(ngModel)]=\"titleFilterValue\" (keyup.enter)=\"hasAnyFilterValue()\">\n        <button class=\"cat-filter__item_search-btn\" (click)=\"hasAnyFilterValue()\"><i class=\"mdi mdi-magnify\"></i></button>\n        <button class=\"cat-filter__item_search-btn cat-filter__item_search-btn_close\" (click)=\"resetSearchforMenu()\"><i class=\"mdi mdi-close\"></i></button>\n      </div>\n    </div>\n    <div class=\"cat-filter__item\">\n      <mat-form-field>\n        <mat-select [(value)]=\"selected\" placeholder=\"Все блюда\" (valueChange)=\"categoryChanged($event)\" >\n          <mat-option>Все блюда</mat-option>\n          <mat-option value=\"Завтраки\">Завтраки</mat-option>\n          <mat-option value=\"Супы\">Супы</mat-option>\n          <mat-option value=\"Салаты\">Салаты</mat-option>\n          <mat-option value=\"Второе\">Второе</mat-option>\n          <mat-option value=\"Целые блюда\">Целые блюда</mat-option>\n          <mat-option value=\"Гарниры\">Гарниры</mat-option>\n          <mat-option value=\"Выпечка сладкая\">Выпечка сладкая</mat-option>\n          <mat-option value=\"Выпечка несладкая\">Выпечка несладкая</mat-option>\n          <mat-option value=\"Закуски\">Закуски</mat-option>\n          <mat-option value=\"Напитки\">Напитки</mat-option>\n          <mat-option value=\"Заготовки\">Заготовки</mat-option>\n          <mat-option value=\"Консервация\">Консервация</mat-option>\n          <mat-option value=\"Соусы\">Соусы</mat-option>\n          <mat-option value=\"Новые\">Новые</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"btn btn_dark\" (click)=\"lackyBtn()\" ><i class=\"mdi mdi-auto-fix\"></i>Мне повезет</div>\n  <div class=\"cat-filter__settings\">\n    <i class=\"mdi mdi-tune\"></i>\n  </div>\n</div>\n<div class=\"cat-filter__invert\" *ngIf=\"filterblock\"></div>\n"

/***/ }),

/***/ "./src/app/catalog/catfilter/catfilter.component.scss":
/*!************************************************************!*\
  !*** ./src/app/catalog/catfilter/catfilter.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Eric Meyer's CSS Reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n/* End of Eric Meyer's CSS Reset */\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {\n  display: block; }\nbody {\n  font: 16px Arial, sans-serif;\n  width: 100%;\n  padding: 0 !important;\n  margin: 0 !important; }\n.body__img {\n  background: url(\"/assets/bg.jpg\") no-repeat top center;\n  width: 100%;\n  top: 0;\n  left: 0;\n  padding-top: 100vh;\n  box-sizing: border-box;\n  background-size: cover !important;\n  position: fixed;\n  z-index: 1; }\n.mob {\n  display: none; }\n@media (max-width: 767px) {\n  .mob {\n    display: flex; } }\n.cat-filter {\n  max-width: 1200px;\n  box-sizing: border-box;\n  margin: 0 auto;\n  background: white;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  padding: 20px 100px 20px 20px;\n  display: flex;\n  position: relative;\n  z-index: 700;\n  transition: all 0.2s; }\n.cat-filter.active {\n    position: fixed;\n    top: 80px;\n    right: 0;\n    left: 0;\n    box-shadow: 0px 0px 10px #0000006b;\n    max-width: 1220px; }\n.cat-filter__invert {\n    height: 100px;\n    margin-bottom: 20px; }\n.cat-filter__item {\n    min-width: calc((100% - (3 - 1) * 20px) / 3);\n    min-width: calc((100% - (3 - 1) * 20px) / 3);\n    margin-right: 20px; }\n.cat-filter__item:nth-child(1) {\n      min-width: calc(calc((100% - (3 - 1) * 20px) / 3) + 77px);\n      max-width: calc(calc((100% - (3 - 1) * 20px) / 3) + 77px); }\n.cat-filter__item:nth-child(2) {\n      min-width: calc(calc((100% - (3 - 1) * 20px) / 3) + 92px);\n      max-width: calc(calc((100% - (3 - 1) * 20px) / 3) + 92px); }\n.cat-filter__item-wrap {\n      display: flex;\n      flex: 1; }\n.cat-filter__item_search {\n      position: relative; }\n.cat-filter__item_search input {\n        padding-right: 100px; }\n.cat-filter__item_search-btn {\n        position: absolute;\n        top: 0;\n        right: 0;\n        background: none;\n        width: 60px;\n        outline: none;\n        border: none;\n        border-left: 1px solid #dddddd;\n        bottom: 0;\n        cursor: pointer;\n        transition: color 0.2s; }\n.cat-filter__item_search-btn_close {\n          right: 60px;\n          border: 0; }\n.cat-filter__item_search-btn i {\n          font-size: 22px; }\n.cat-filter__item_search-btn:hover {\n          color: #87BF49; }\n.cat-filter__settings {\n    position: absolute;\n    top: 15px;\n    right: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 70px;\n    height: 70px;\n    border-left: 1px solid #dddddd; }\n.cat-filter__settings i {\n      font-size: 30px; }\n@media (max-width: 767px) {\n  .cat-filter {\n    padding: 0;\n    background: none;\n    max-width: inherit;\n    margin: 0 16px 10px;\n    flex-direction: column;\n    transition: none; }\n    .cat-filter.active {\n      padding: 20px 20px 10px 20px;\n      background: white;\n      left: 74px; }\n    .cat-filter__invert {\n      height: 138px; }\n    .cat-filter__settings {\n      display: none; }\n    .cat-filter__item {\n      min-width: 100% !important;\n      max-width: 100% !important;\n      margin-bottom: 10px; }\n      .cat-filter__item-wrap {\n        flex: 1;\n        flex-direction: column; }\n    .cat-filter .btn_dark {\n      height: 60px !important;\n      display: none; } }\n"

/***/ }),

/***/ "./src/app/catalog/catfilter/catfilter.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/catalog/catfilter/catfilter.component.ts ***!
  \**********************************************************/
/*! exports provided: CatfilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatfilterComponent", function() { return CatfilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _get_json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../get-json.service */ "./src/app/get-json.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CatfilterComponent = /** @class */ (function () {
    function CatfilterComponent(select, getJsonService, router) {
        var _this = this;
        this.select = select;
        this.getJsonService = getJsonService;
        this.router = router;
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resetSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollEvent = function (event) {
            if (event.srcElement.scrollingElement.scrollTop <= 170 && _this.filterblock) {
                _this.getJsonService.filterDeactivate();
                _this.filterblock = false;
            }
        };
        this.getJsonService.LackybtnPush.subscribe(function (x) { return _this.lackyBtn(); });
        this._filterSubscrpt = this.getJsonService.filterOn.subscribe(function (y) {
            console.log(y);
            _this.filterblock = y;
        });
    }
    CatfilterComponent.prototype.resetSearchforMenu = function () {
        this.resetSearch.emit(null);
        this.titleFilterValue = null;
    };
    CatfilterComponent.prototype.categoryChanged = function (selectedItem) {
        this.selectedCategory = selectedItem;
        this.searchEvent.emit(null);
    };
    CatfilterComponent.prototype.randomInteger = function (min, max) {
        var rand = min + Math.random() * (max - min);
        rand = Math.round(rand);
        return rand;
    };
    CatfilterComponent.prototype.lackyBtn = function () {
        this.conunter = this.listCartId.length;
        this.rndNum = this.randomInteger(0, this.conunter);
        var linkNum = this.listCartId[this.rndNum];
        this.router.navigate(['cart/', linkNum]);
    };
    CatfilterComponent.prototype.hasAnyFilterValue = function () {
        this.searchEvent.emit(null);
    };
    CatfilterComponent.prototype.ngOnInit = function () {
        window.addEventListener('scroll', this.scrollEvent, true);
    };
    CatfilterComponent.prototype.ngOnDestroy = function () {
        if (this._filterSubscrpt)
            this._filterSubscrpt.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CatfilterComponent.prototype, "searchEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CatfilterComponent.prototype, "resetSearch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CatfilterComponent.prototype, "listCartId", void 0);
    CatfilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-catfilter',
            template: __webpack_require__(/*! ./catfilter.component.html */ "./src/app/catalog/catfilter/catfilter.component.html"),
            styles: [__webpack_require__(/*! ./catfilter.component.scss */ "./src/app/catalog/catfilter/catfilter.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
            _get_json_service__WEBPACK_IMPORTED_MODULE_2__["GetJsonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CatfilterComponent);
    return CatfilterComponent;
}());



/***/ }),

/***/ "./src/app/catalog/catservice.service.ts":
/*!***********************************************!*\
  !*** ./src/app/catalog/catservice.service.ts ***!
  \***********************************************/
/*! exports provided: CatserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatserviceService", function() { return CatserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CatserviceService = /** @class */ (function () {
    function CatserviceService(http, db) {
        this.http = http;
        this.db = db;
        this.AlllistLength = null;
    }
    CatserviceService.prototype.getCartList = function () {
        var _this = this;
        return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (obs) {
            _this.db.list('/catalog2').valueChanges().subscribe(function (catlist) {
                obs.next(catlist);
                _this.AlllistLength = catlist.length;
            });
        });
    };
    CatserviceService.prototype.AddReceptiforBase = function (recepi) {
        var postData = recepi;
        this.db.database.ref().child('/catalog2').push(postData).key;
    };
    CatserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], CatserviceService);
    return CatserviceService;
}());



/***/ }),

/***/ "./src/app/get-json.service.ts":
/*!*************************************!*\
  !*** ./src/app/get-json.service.ts ***!
  \*************************************/
/*! exports provided: GetJsonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetJsonService", function() { return GetJsonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetJsonService = /** @class */ (function () {
    function GetJsonService(http, db) {
        this.http = http;
        this.db = db;
        this.count = 0;
        this.allList = [];
        this.idList = [];
        this.ItemALLArr = null;
        this.resuslt = null;
        this.LackybtnPush = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterOn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterOff = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.statefilter = false;
    }
    GetJsonService.prototype.resetCounterService = function () {
        this.count = 0;
    };
    // id для стр карты меню
    GetJsonService.prototype.getCatItem = function (id) {
        var _this = this;
        id = parseInt(id);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (obs) {
            _this.db.database.ref('catalog2').orderByChild('Id').equalTo(id).on('child_added', function (snapshot) {
                obs.next(snapshot.val());
            });
            _this.db.database.ref('catalog2').orderByChild('Id').equalTo(id).once('child_added');
        });
    };
    GetJsonService.prototype.lackyBtn = function () {
        this.LackybtnPush.emit(null);
    };
    GetJsonService.prototype.filterVisibleActivate = function () {
        this.statefilter = !this.statefilter;
        this.filterOn.emit(this.statefilter);
    };
    GetJsonService.prototype.filterDeactivate = function () {
        this.statefilter = false;
        this.filterOff.emit(this.statefilter);
    };
    GetJsonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], GetJsonService);
    return GetJsonService;
}());



/***/ }),

/***/ "./src/app/header/add-recipe/add-recipe.component.html":
/*!*************************************************************!*\
  !*** ./src/app/header/add-recipe/add-recipe.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cart__modal-wrap\">\n  <div class=\"recipe\">\n    <div class=\"cart__modal-close\" (click)=\"closeModal()\"><i class=\"mdi mdi-close\"></i></div>\n    <div class=\"recipe__title\">Добавить рецепт</div>\n    <div class=\"recipe__scroll\">\n\n\n      <div class=\"recipe__content\">\n\n        <div class=\"recipe__line\">\n          <div class=\"recipe__line-info\">\n            <input type=\"text\" placeholder=\"Название блюда\" [(ngModel)]=\"recepiName\">\n          </div>\n        </div>\n        <div class=\"recipe__line recipe__line_textarea\">\n          <div class=\"recipe__line-info\">\n            <textarea name=\"\" id=\"\" cols=\"30\" rows=\"5\" placeholder=\"Рецепт\"[(ngModel)]=\"recepiComment\"></textarea>\n          </div>\n        </div>\n\n        <div class=\"recipe__line\">\n          <div class=\"recipe__line-mini\">\n            <div class=\"recipe__line-mini-left\">\n              <div class=\"recipe__line-info\">\n                <input type=\"text\" placeholder=\"Категория\" [(ngModel)]=\"recepiCategory\">\n              </div>\n            </div>\n            <div class=\"recipe__line-mini-right\">\n              <div class=\"recipe__line-info\">\n                <input type=\"number\" placeholder=\"Время\"  [(ngModel)]=\"recepiTime\">\n              </div>\n            </div>\n            <div class=\"recipe__line-mini-right\">\n              <div class=\"recipe__line-info\">\n                <input type=\"number\" placeholder=\"Id\" [(ngModel)]=\"recepiId\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n        <div class=\"recipe__products\">\n          <div class=\"recipe__line-add\" (click)=\"addItemRecepient()\"><i class=\"mdi mdi-plus\"></i></div>\n          <div class=\"recipe__line\">\n            <div class=\"recipe__line-label\">\n              <div class=\"recipe__line-box\">\n                <span>Продукты</span>\n\n              </div>\n            </div>\n            <div *ngFor=\"let item of prodictList\">\n\n              <app-product [dataItem]=\"item\" (remooveLine)=\"remooveItemRecepient($event)\" (addLine)=\"addEmptyItem()\" >\n              </app-product>\n            </div>\n\n          </div>\n        </div>\n\n        \n      </div>\n    </div>\n            <div class=\"recipe__line recipe__line_btn\">\n              <button class=\"btn\" (click)=\"getNewRectpi()\">Добавить рецепт</button>\n            </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header/add-recipe/add-recipe.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/header/add-recipe/add-recipe.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Eric Meyer's CSS Reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n/* End of Eric Meyer's CSS Reset */\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {\n  display: block; }\nbody {\n  font: 16px Arial, sans-serif;\n  width: 100%;\n  padding: 0 !important;\n  margin: 0 !important; }\n.body__img {\n  background: url(\"/assets/bg.jpg\") no-repeat top center;\n  width: 100%;\n  top: 0;\n  left: 0;\n  padding-top: 100vh;\n  box-sizing: border-box;\n  background-size: cover !important;\n  position: fixed;\n  z-index: 1; }\n.mob {\n  display: none; }\n@media (max-width: 767px) {\n  .mob {\n    display: flex; } }\n* {\n  box-sizing: border-box; }\n.recipe {\n  width: 800px;\n  box-sizing: border-box;\n  background: white;\n  border-radius: 10px;\n  padding: 0;\n  position: relative;\n  -webkit-animation: visiblemodal  .7s;\n          animation: visiblemodal  .7s; }\n.recipe__scroll {\n    overflow: auto;\n    max-height: calc(100vh - 350px);\n    padding: 45px;\n    padding-top: 0;\n    padding-bottom: 0; }\n.recipe__title {\n    font-size: 33px;\n    font-weight: bold;\n    margin-bottom: 40px;\n    padding: 45px 45px 0 45px; }\n.recipe__line {\n    margin-bottom: 20px; }\n.recipe__line-box {\n      display: flex;\n      align-items: center; }\n.recipe__line-add {\n      background: #87BF49;\n      color: white;\n      width: 60px;\n      height: 60px;\n      margin-left: 10px;\n      border-radius: 10px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      position: absolute;\n      top: 48px;\n      right: 1px;\n      z-index: 10;\n      transition: all 0.2s;\n      cursor: pointer; }\n.recipe__line-add:hover {\n        background: black; }\n.recipe__line-mini {\n      display: flex; }\n.recipe__line-mini-left {\n        min-width: 65%;\n        margin-right: 10px; }\n.recipe__line-mini-right {\n        flex: 1; }\n.recipe__line-mini-right:last-child {\n          margin-left: 10px; }\n.recipe__line-label {\n      margin-bottom: 10px;\n      font-weight: bold; }\n.recipe__line_btn {\n      padding-bottom: 45px;\n      padding-left: 45px;\n      padding-right: 45px;\n      margin-bottom: 0; }\n@-webkit-keyframes visiblemodal {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n@keyframes visiblemodal {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n@media (max-width: 767px) {\n  .recipe {\n    margin-left: 16px;\n    margin-right: 16px; }\n    .recipe__title {\n      padding: 30px;\n      font-size: 24px;\n      margin-bottom: 0; }\n    .recipe__scroll {\n      padding: 30px;\n      padding-top: 0;\n      max-height: calc(100vh - 255px); }\n    .recipe__line {\n      flex-wrap: wrap; }\n      .recipe__line-add {\n        left: calc(50% - 30px);\n        top: -20px;\n        border-radius: 50%;\n        width: 40px;\n        height: 40px; }\n      .recipe__line-mini {\n        max-width: 100%;\n        min-width: 100%;\n        flex-wrap: wrap; }\n        .recipe__line-mini-left {\n          flex: 1;\n          max-width: 100%;\n          min-width: 100%;\n          flex-wrap: wrap;\n          margin: 0;\n          margin-bottom: 10px; } }\n"

/***/ }),

/***/ "./src/app/header/add-recipe/add-recipe.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/header/add-recipe/add-recipe.component.ts ***!
  \***********************************************************/
/*! exports provided: AddRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipeComponent", function() { return AddRecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _catalog_catservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../catalog/catservice.service */ "./src/app/catalog/catservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddRecipeComponent = /** @class */ (function () {
    function AddRecipeComponent(catserviceService) {
        this.catserviceService = catserviceService;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.prodictList = [];
        this.convertProduct = [];
    }
    AddRecipeComponent.prototype.addItemRecepient = function () {
        console.log('добавляем элемент');
        var id = this.prodictList.length + 1;
        this.addEmptyItem(id);
    };
    AddRecipeComponent.prototype.remooveItemRecepient = function (id) {
        var targetEl = this.prodictList.findIndex(function (x) { return x.id == id; });
        if (targetEl != -1) {
            this.prodictList.splice(targetEl, 1);
        }
    };
    AddRecipeComponent.prototype.closeModal = function () {
        if (this.onClose) {
            this.onClose.emit(null);
        }
    };
    AddRecipeComponent.prototype.addEmptyItem = function (id) {
        this.prodictList.push({
            id: id,
            name: '',
            value: ''
        });
    };
    AddRecipeComponent.prototype.getNewRectpi = function () {
        var stringProd = null;
        var prondAll = '';
        for (var i = 0; i < this.prodictList.length; i++) {
            if (this.prodictList.length - 1 !== i) {
                stringProd = this.prodictList[i].name + ' --' + this.prodictList[i].value + '\\n';
            }
            else {
                stringProd = this.prodictList[i].name + ' --' + this.prodictList[i].value;
            }
            prondAll = prondAll + stringProd;
        }
        var recepiNew = {};
        recepiNew.Category = this.recepiCategory;
        recepiNew.Comment = this.recepiComment;
        recepiNew.Id = this.recepiId;
        recepiNew.Ingredients = prondAll;
        recepiNew.Name = this.recepiName;
        recepiNew.Time = String(this.recepiTime);
        this.catserviceService.AddReceptiforBase(recepiNew);
        this.closeModal();
    };
    AddRecipeComponent.prototype.ngOnInit = function () {
        this.addEmptyItem(1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddRecipeComponent.prototype, "onClose", void 0);
    AddRecipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-recipe',
            template: __webpack_require__(/*! ./add-recipe.component.html */ "./src/app/header/add-recipe/add-recipe.component.html"),
            styles: [__webpack_require__(/*! ./add-recipe.component.scss */ "./src/app/header/add-recipe/add-recipe.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_catalog_catservice_service__WEBPACK_IMPORTED_MODULE_1__["CatserviceService"]])
    ], AddRecipeComponent);
    return AddRecipeComponent;
}());



/***/ }),

/***/ "./src/app/header/add-recipe/product/product.component.html":
/*!******************************************************************!*\
  !*** ./src/app/header/add-recipe/product/product.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"recipe__line-product\" id = \"{{idElement}}\">\n  <div class=\"recipe__line-product-name\">\n    <input type=\"text\" placeholder=\"Название\" [(ngModel)]=\"dataItem.name\">\n  </div>\n  <div class=\"recipe__line-product-value\">\n    <input type=\"text\" placeholder=\"Количество\" [(ngModel)]=\"dataItem.value\" (keyup.enter)='addInem()'>\n  </div>\n  <div class=\"recipe__line-product-btns\">\n    <div class=\"btn\" (click)=\"remooveitem(dataItem.id)\"><i class=\"mdi mdi-minus\"></i></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/add-recipe/product/product.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/header/add-recipe/product/product.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Eric Meyer's CSS Reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n/* End of Eric Meyer's CSS Reset */\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {\n  display: block; }\nbody {\n  font: 16px Arial, sans-serif;\n  width: 100%;\n  padding: 0 !important;\n  margin: 0 !important; }\n.body__img {\n  background: url(\"/assets/bg.jpg\") no-repeat top center;\n  width: 100%;\n  top: 0;\n  left: 0;\n  padding-top: 100vh;\n  box-sizing: border-box;\n  background-size: cover !important;\n  position: fixed;\n  z-index: 1; }\n.mob {\n  display: none; }\n@media (max-width: 767px) {\n  .mob {\n    display: flex; } }\n.recipe__products {\n  border-top: 1px solid #dddddd;\n  margin-top: 40px;\n  padding-top: 20px;\n  position: relative; }\n.recipe__line .btn {\n  height: 60px;\n  cursor: pointer; }\n.recipe__line_btn {\n  margin-top: 40px; }\n.recipe__line-product {\n  display: flex;\n  margin-bottom: 10px; }\n.recipe__line-product-btns {\n    display: flex; }\n.recipe__line-product-btns .btn {\n      margin-left: 10px; }\n.recipe__line-product-btns .btn i {\n        margin: 0;\n        padding: 0; }\n.recipe__line-product-name {\n    width: 55%;\n    margin-right: 10px; }\n.recipe__line-product-value {\n    flex: 1; }\n@media (max-width: 767px) {\n  .recipe__products {\n    margin-top: 30px; }\n  .recipe__line-product {\n    flex-wrap: wrap;\n    margin-bottom: 20px; }\n    .recipe__line-product-name {\n      min-width: 100%;\n      max-width: 100%;\n      margin-right: 0;\n      margin-bottom: 10px; }\n  .recipe__line_btn {\n    padding: 30px;\n    margin-top: 0; }\n    .recipe__line_btn .btn {\n      margin: 0;\n      min-width: 100%;\n      max-width: 100%; } }\n"

/***/ }),

/***/ "./src/app/header/add-recipe/product/product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/header/add-recipe/product/product.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.remooveLine = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addLine = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProductComponent.prototype.remooveitem = function (id) {
        if (this.remooveLine) {
            this.remooveLine.emit(id);
        }
    };
    ProductComponent.prototype.addInem = function () {
        this.addLine.emit(null);
    };
    ProductComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "dataItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductComponent.prototype, "remooveLine", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProductComponent.prototype, "addLine", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/header/add-recipe/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/header/add-recipe/product/product.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/header/topmenu.component.html":
/*!***********************************************!*\
  !*** ./src/app/header/topmenu.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <div class=\"header__menu-munubtn\" (click)=\"openCloseTopMenu()\" [ngClass]=\"{'active': menuOpen}\">\n      <i class=\"mdi mdi-menu\" *ngIf=\"!menuOpen\"></i>\n      <i class=\"mdi mdi-close\" *ngIf=\"menuOpen\" ></i>\n    </div>\n    <div class=\"header__filter\" *ngIf=\"filterOn && menuactive && home\" (click)=\"filterVisible()\"  [ngClass]=\"{active: finterActive}\">\n      <i class=\"mdi mdi-filter-variant\"></i>\n    </div>\n    <div class=\"header__mobil-user\" *ngIf=\"emailuser\">{{emailuser}}</div>\n  <div class=\"header__menu\" [ngClass]=\"{'stick': menuactive, 'active': menuOpen}\">\n    <div class=\"header__left\">\n      <a routerLink=\"/\" routerLinkActive=\"active\" (click)=\"closeTopMenu()\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"header__menu-item\">Каталог блюд</a>\n      <a routerLink=\"/menu/days\" routerLinkActive=\"active\" (click)=\"closeTopMenu()\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"header__menu-item\">Мое меню</a>\n      <div class=\"header__menu-item header__menu-item_filter\" *ngIf=\"filterOn && menuactive && home\" (click)=\"filterVisible()\"  [ngClass]=\"{active: finterActive}\" >Фильтр</div>\n    </div>\n    <div class=\"header__center\">\n        <a [routerLink]=\"['/']\"  class=\"header__center-logo\"></a>\n      </div>\n\n    <div class=\"header__right\">\n        <div class=\"mob\" (click)=\"setlackyBtn(); closeTopMenu()\" *ngIf=\"home\">Мне повезет</div>\n      <div class=\"\" (click)=\"openModalRecepient(); closeTopMenu()\" *ngIf=\"redactor && authUser\">Добавить рецепт</div>\n      <div (click)=\"modalAuth(); closeTopMenu()\" *ngIf=\"!authUser\">Вход</div>\n      <div class=\"header__right-user\" *ngIf=\"authUser \">{{emailuser}}</div>\n      <div (click)=\"exitLogin(); closeTopMenu()\" *ngIf=\"authUser\">\n        <i class=\"mdi mdi-exit-to-app\"></i><span class=\"header__right-exit\">Выход</span>\n      </div>\n    </div>\n\n\n  </div>\n  <div class=\"header__logo\"></div>\n</header>\n\n<div class=\"cart__modal-wrap\" *ngIf=\"modal\">\n  <div class=\"cart__modal\">\n    <div class=\"cart__modal-close\" (click)=\"modalAuthClose()\"><i class=\"mdi mdi-close\"></i></div>\n    <div class=\"auth\" *ngIf=\"auth\">\n      <div class=\"auth__title\">Авторизация</div>\n      <form [formGroup]=\"authform\">\n        <div class=\"auth__line\">\n          <input type=\"text\" placeholder=\"E-mail\" formControlName=\"email\" required>\n        </div>\n        <div class=\"auth__line\">\n          <input type=\"text\" placeholder=\"Пароль\" formControlName=\"password\" required>\n          <div class=\"auth__error\">\n            <label class=\"error\">{{errorMessage}}</label>\n            <label class=\"success\">{{successMessage}}</label>\n          </div>\n        </div>\n        <div class=\"auth__line auth__line_btns\">\n          <button class=\"btn\" (click)=\"trylogin(authform.value)\">Войти</button>\n          <div class=\"auth__link\" (click)=\"modalChenge()\">Вы новый пользователь</div>\n        </div>\n      </form>\n    </div>\n    <div class=\"auth\" *ngIf=\"reg\">\n      <div class=\"auth__title\">Регистрация</div>\n      <form [formGroup]=\"regisration\">\n        <div class=\"auth__line\">\n          <input type=\"text\" placeholder=\"E-mail\" formControlName=\"email\" required>\n        </div>\n        <div class=\"auth__line\">\n          <input type=\"text\" placeholder=\"Пароль\" formControlName=\"password\" required>\n          <div class=\"auth__error\">\n            <label class=\"error\">{{errorMessage}}</label>\n            <label class=\"success\">{{successMessage}}</label>\n          </div>\n        </div>\n        <div class=\"auth__line auth__line_btns\">\n          <button class=\"btn\" (click)=\"tryRegister(regisration.value)\">Зарегистрироваться</button>\n          <div class=\"auth__link\" (click)=\"modalChenge()\">Уже есть аккаунт</div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<app-add-recipe *ngIf=\"addrecepi\" (onClose)=\"closeModalRecepient(id)\"></app-add-recipe>\n"

/***/ }),

/***/ "./src/app/header/topmenu.component.scss":
/*!***********************************************!*\
  !*** ./src/app/header/topmenu.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Eric Meyer's CSS Reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n/* End of Eric Meyer's CSS Reset */\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {\n  display: block; }\nbody {\n  font: 16px Arial, sans-serif;\n  width: 100%;\n  padding: 0 !important;\n  margin: 0 !important; }\n.body__img {\n  background: url(\"/assets/bg.jpg\") no-repeat top center;\n  width: 100%;\n  top: 0;\n  left: 0;\n  padding-top: 100vh;\n  box-sizing: border-box;\n  background-size: cover !important;\n  position: fixed;\n  z-index: 1; }\n.mob {\n  display: none; }\n@media (max-width: 767px) {\n  .mob {\n    display: flex; } }\n.header {\n  height: 230px;\n  width: 100%;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.header__filter {\n    display: none; }\n.header__mobil-user {\n    display: none; }\n.header__left {\n    flex: 1;\n    display: flex;\n    align-items: center; }\n.header__center {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 130px;\n    max-width: 130px; }\n.header__center-logo {\n      background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%22132px%22 height%3D%2261px%22 viewBox%3D%220 0 132 61%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 53.2 (72643) - https%3A%2F%2Fsketchapp.com --%3E    %3Ctitle%3EGroup%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22Apple-TV%22 transform%3D%22translate(-844.000000%2C -92.000000)%22 fill%3D%22%23FFFFFF%22%3E            %3Cg id%3D%22Group%22 transform%3D%22translate(845.000000%2C 92.000000)%22%3E                %3Cpath d%3D%22M24.8495139%2C36.4838851 C24.8676317%2C33.7330268 25.4240777%2C30.8453446 26.5188679%2C27.8207547 C27.632081%2C24.7452676 29.2924418%2C22.1415201 31.5%2C20.009434 C33.7075582%2C17.8773478 36.3396074%2C16.8113208 39.3962264%2C16.8113208 C40.943404%2C16.8113208 42.0943358%2C17.0754691 42.8490566%2C17.6037736 C43.6037774%2C18.1320781 43.9811321%2C18.8301843 43.9811321%2C19.6981132 L43.9811321%2C20.0377358 L44.6037736%2C17.0943396 L52.754717%2C17.0943396 L47.1509434%2C43.3584906 C48.9622732%2C42.754714 50.4150889%2C41.8490626 51.509434%2C40.6415094 C52.275102%2C39.7966344 52.9576363%2C38.6654468 53.5570466%2C37.2479282 C53.5504621%2C37.0433116 53.5471698%2C36.8348827 53.5471698%2C36.6226415 C53.5471698%2C33.8301747 54.103768%2C30.8962418 55.2169811%2C27.8207547 C56.3301942%2C24.7452676 57.990555%2C22.1415201 60.1981132%2C20.009434 C62.4056714%2C17.8773478 65.0377206%2C16.8113208 68.0943396%2C16.8113208 C69.6415172%2C16.8113208 70.7924491%2C17.0754691 71.5471698%2C17.6037736 C72.3018906%2C18.1320781 72.6792453%2C18.8301843 72.6792453%2C19.6981132 L72.6792453%2C20.0943396 L73.3018868%2C17.0943396 L81.4528302%2C17.0943396 L77.3773585%2C36.3396226 C77.2264143%2C36.9056632 77.1509434%2C37.5094308 77.1509434%2C38.1509434 C77.1509434%2C38.9056642 77.3301869%2C39.4433946 77.6886792%2C39.7641509 C78.0471716%2C40.0849073 78.6415053%2C40.245283 79.4716981%2C40.245283 C80.0000026%2C40.245283 80.4150928%2C40.1698121 80.7169811%2C40.0188679 C79.8867883%2C42.132086 79.0943434%2C43.6132033 78.3396226%2C44.4622642 C77.5849019%2C45.311325 76.4905732%2C45.7358491 75.0566038%2C45.7358491 C73.5094262%2C45.7358491 72.2547218%2C45.2735895 71.2924528%2C44.3490566 C70.3301839%2C43.4245237 69.7358502%2C42.1320838 69.509434%2C40.4716981 C67.2075357%2C43.9811496 64.396243%2C45.7358491 61.0754717%2C45.7358491 C58.9245175%2C45.7358491 57.1320826%2C45.0000074 55.6981132%2C43.5283019 C55.0060617%2C42.8180385 54.481009%2C41.9144189 54.1229528%2C40.8174354 C53.6300908%2C41.5253201 53.098541%2C42.1364886 52.5283019%2C42.6509434 C50.7924442%2C44.216989 48.8301996%2C45.283016 46.6415094%2C45.8490566 L45.7924528%2C49.9245283 C45.0377321%2C53.584924 43.7358583%2C56.1037667 41.8867925%2C57.4811321 C40.0377266%2C58.8584975 37.9434079%2C59.5471698 35.6037736%2C59.5471698 C33.7924438%2C59.5471698 32.2830249%2C59.0754764 31.0754717%2C58.1320755 C29.8679185%2C57.1886745 29.2641509%2C55.8301975 29.2641509%2C54.0566038 C29.2641509%2C51.9056496 30.1320668%2C50.1792518 31.8679245%2C48.8773585 C33.6037823%2C47.5754652 35.8113074%2C46.4905704 38.490566%2C45.6226415 L39.1698113%2C42.6226415 C37.2452734%2C44.6981236 34.9811451%2C45.7358491 32.3773585%2C45.7358491 C30.2264043%2C45.7358491 28.4339694%2C45.0000074 27%2C43.5283019 C25.9790884%2C42.4805242 25.3216002%2C41.0119643 25.0275277%2C39.1225973 C23.7332299%2C40.8514631 22.1265753%2C42.3200249 20.2075472%2C43.5283019 C17.1509281%2C45.4528398 13.8868098%2C46.4150943 10.4150943%2C46.4150943 C6.98111491%2C46.4150943 4.38680123%2C45.4717075 2.63207547%2C43.5849057 C0.877349717%2C41.6981038 -2.84217094e-13%2C39.3207691 -2.84217094e-13%2C36.4528302 C-2.84217094e-13%2C34.4150842 0.424524057%2C32.3679348 1.27358491%2C30.3113208 C2.12264575%2C28.2547067 3.33961472%2C26.4528379 4.9245283%2C24.9056604 C6.50944189%2C23.3584828 8.35848%2C22.3207574 10.4716981%2C21.7924528 C9.30188094%2C20.96226 8.43396509%2C19.9528361 7.86792453%2C18.7641509 C7.30188396%2C17.5754658 7.01886792%2C16.3207613 7.01886792%2C15 C7.01886792%2C13.037726 7.5565984%2C11.113217 8.63207547%2C9.22641509 C9.70755255%2C7.33961321 11.1981037%2C5.80189274 13.1037736%2C4.61320755 C15.0094435%2C3.42452236 17.113196%2C2.83018868 19.4150943%2C2.83018868 C21.7924647%2C2.83018868 23.7358415%2C3.45282396 25.245283%2C4.69811321 C26.7547245%2C5.94340245 27.509434%2C7.67923415 27.509434%2C9.90566038 C27.509434%2C11.566046 27.0943438%2C12.9622585 26.2641509%2C14.0943396 C25.4339581%2C15.2264208 24.4528358%2C15.7924528 23.3207547%2C15.7924528 C22.3018817%2C15.7924528 21.4150981%2C15.283024 20.6603774%2C14.2641509 C21.339626%2C14.0377347 21.9245258%2C13.4150994 22.4150943%2C12.3962264 C22.9056628%2C11.3773534 23.1509434%2C10.3584957 23.1509434%2C9.33962264 C23.1509434%2C8.24527755 22.8490596%2C7.44339877 22.245283%2C6.93396226 C21.6415064%2C6.42452575 20.9056647%2C6.16981132 20.0377358%2C6.16981132 C18.9433908%2C6.16981132 17.9528346%2C6.55659991 17.0660377%2C7.33018868 C16.1792408%2C8.10377745 15.4905685%2C9.10376745 15%2C10.3301887 C14.5094315%2C11.5566099 14.2641509%2C12.8301821 14.2641509%2C14.1509434 C14.2641509%2C15.9622732 14.7358443%2C17.5565969 15.6792453%2C18.9339623 C16.6226462%2C20.3113276 18.0565942%2C21.2452806 19.9811321%2C21.7358491 C18.0565942%2C22.1509455 16.3207625%2C23.0943323 14.7735849%2C24.5660377 C13.2264074%2C26.0377432 12.0188723%2C27.7452733 11.1509434%2C29.6886792 C10.2830145%2C31.6320852 9.8490566%2C33.4905572 9.8490566%2C35.2641509 C9.8490566%2C36.9622726 10.2924484%2C38.3396174 11.1792453%2C39.3962264 C12.0660422%2C40.4528355 13.4150853%2C40.9811321 15.2264151%2C40.9811321 C17.113217%2C40.9811321 19.0848954%2C40.4622693 21.1415094%2C39.4245283 C22.6774393%2C38.6495178 23.9134345%2C37.6693093 24.8495139%2C36.4838851 Z M36.0566038%2C40.245283 C36.9245326%2C40.245283 37.8113162%2C39.8490606 38.7169811%2C39.0566038 C39.622646%2C38.264147 40.2452813%2C37.188686 40.5849057%2C35.8301887 L43.4716981%2C22.4150943 C43.4716981%2C21.9622619 43.2830208%2C21.5000024 42.9056604%2C21.0283019 C42.5283%2C20.5566014 41.9434002%2C20.3207547 41.1509434%2C20.3207547 C39.6415019%2C20.3207547 38.2830249%2C21.1981044 37.0754717%2C22.9528302 C35.8679185%2C24.7075559 34.9245317%2C26.8207424 34.245283%2C29.2924528 C33.5660343%2C31.7641633 33.2264151%2C33.9433868 33.2264151%2C35.8301887 C33.2264151%2C37.7169906 33.4999973%2C38.9245257 34.0471698%2C39.4528302 C34.5943424%2C39.9811347 35.264147%2C40.245283 36.0566038%2C40.245283 Z M34.3018868%2C55.1320755 C34.9433994%2C55.1320755 35.5660347%2C54.6981175 36.1698113%2C53.8301887 C36.7735879%2C52.9622598 37.2452813%2C51.7169892 37.5849057%2C50.0943396 L37.9245283%2C48.4528302 C34.2263966%2C49.8113275 32.3773585%2C51.4150851 32.3773585%2C53.2641509 C32.3773585%2C53.7547194 32.5471681%2C54.1886774 32.8867925%2C54.5660377 C33.2264168%2C54.9433981 33.6981102%2C55.1320755 34.3018868%2C55.1320755 Z M64.754717%2C40.245283 C65.6981179%2C40.245283 66.6320708%2C39.8018912 67.5566038%2C38.9150943 C68.4811367%2C38.0282975 69.1132058%2C36.8113285 69.4528302%2C35.2641509 L72.1698113%2C22.4716981 C72.1698113%2C21.9811296 71.981134%2C21.5000024 71.6037736%2C21.0283019 C71.2264132%2C20.5566014 70.6415134%2C20.3207547 69.8490566%2C20.3207547 C68.3396151%2C20.3207547 66.9811381%2C21.1981044 65.7735849%2C22.9528302 C64.5660317%2C24.7075559 63.6226449%2C26.8207424 62.9433962%2C29.2924528 C62.2641475%2C31.7641633 61.9245283%2C33.9433868 61.9245283%2C35.8301887 C61.9245283%2C37.7169906 62.1981105%2C38.9245257 62.745283%2C39.4528302 C63.2924556%2C39.9811347 63.9622602%2C40.245283 64.754717%2C40.245283 Z%22 id%3D%22%D0%95%D0%B4%D0%B0-Copy%22 stroke%3D%22%23FFFFFF%22 fill-rule%3D%22nonzero%22%3E%3C%2Fpath%3E                %3Cg id%3D%22maphin-copy%22 transform%3D%22translate(94.528302%2C 0.000000)%22%3E                    %3Cpath d%3D%22M0%2C29.1612436 C1.79344588%2C30.165181 3.75372393%2C30.165181 5.88083416%2C29.1612436 C8.00794439%2C28.1573062 10.0724926%2C28.1573062 12.0744786%2C29.1612436 C13.9513406%2C30.457996 15.8490566%2C30.457996 17.7676266%2C29.1612436 C19.6861966%2C27.8644911 21.7715988%2C27.8644911 24.0238332%2C29.1612436 C25.9424032%2C30.3325039 27.9026812%2C30.3325039 29.9046673%2C29.1612436 C31.9066534%2C27.9899833 33.8252234%2C27.9899833 35.6603774%2C29.1612436 L30.1155981%2C44.7324387 C29.6354008%2C46.0809587 28.3618005%2C46.9811321 26.9340594%2C46.9811321 L8.71198234%2C46.9811321 C7.28322597%2C46.9811321 6.00895028%2C46.0796976 5.52951395%2C44.7298243 L0%2C29.1612436 Z M4.16973632%2C25.3168717 C2.97589315%2C25.0819444 2.37897157%2C24.4853791 2.37897157%2C23.5271758 C2.37897157%2C22.0898709 2.25547055%2C20.4414933 4.16973632%2C19.7009295 C6.0840021%2C18.9603656 6.0840021%2C18.713511 10.3447872%2C18.1580882 C13.1853106%2C17.7878063 16.2934196%2C16.6975318 19.6691141%2C14.8872647 L26.5851711%2C11.1844456 C28.7258554%2C9.90903014 30.2284511%2C9.84731649 31.0929582%2C10.9993046 C31.9574653%2C12.1512928 31.8957148%2C13.2827097 30.9077067%2C14.3935555 C30.1667006%2C15.4221163 29.2610265%2C16.3478211 28.1906843%2C17.1706698 C27.1203421%2C17.9935184 25.2884104%2C19.1660778 22.694889%2C20.6883479 C21.6245468%2C21.4289117 20.5336212%2C22.1283331 19.422112%2C22.786612 C17.7548483%2C23.7740304 14.7908239%2C25.440299 11.1475438%2C25.7488673 C8.71869048%2C25.9545794 6.39275465%2C25.8105809 4.16973632%2C25.3168717 Z M17.4339623%2C25.8396226 C21.8834582%2C23.8468336 25.2307854%2C21.9898096 27.4759438%2C20.2685506 C30.8436816%2C17.6866622 31.0273763%2C16.121197 33.5991033%2C18.1639234 C35.1009551%2C20.3999146 33.0329585%2C23.6179144 27.6596386%2C25.096813 C25.8867053%2C25.5847774 22.4781465%2C25.8323806 17.4339623%2C25.8396226 Z M20.3328129%2C0 C20.2086291%2C2.59588643 20.9744296%2C4.09571878 22.6302147%2C4.49949703 C24.2859998%2C4.90327528 25.4450493%2C5.75120961 26.1073633%2C7.04330002 C26.2979711%2C8.22589123 25.8633276%2C8.99306991 24.8034326%2C9.34483605 C23.7435376%2C9.69660219 22.0877526%2C10.6051033 19.8360774%2C12.0703392 C16.7728751%2C13.9277192 14.6617491%2C15.0784872 13.5026996%2C15.5226433 C11.7641253%2C16.1888774 8.47325247%2C18.0664463 6.85886204%2C16.7945448 C5.78260175%2C15.9466105 5.36865548%2C14.8765981 5.61702324%2C13.5845077 C6.19654801%2C10.7580599 7.21071636%2C8.96124671 8.65952828%2C8.19406803 C10.8327462%2C7.04330002 13.5385182%2C5.58969831 15.8490566%2C5.04459767 C17.3894156%2C4.68119724 18.884001%2C2.99966469 20.3328129%2C0 Z%22 id%3D%22Combined-Shape%22%3E%3C%2Fpath%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat;\n      background-size: auto 100%;\n      position: relative;\n      width: 130px;\n      height: 50px;\n      display: none;\n      transition: 0.2s; }\n.header__right {\n    flex: 1;\n    text-align: right;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end; }\n.header__right div {\n      margin-left: 20px;\n      cursor: pointer; }\n.header__right div:hover {\n        color: #87BF49; }\n.header__right div i {\n        font-size: 24px; }\n.header__right-exit {\n      display: none; }\n.header__menu {\n    position: fixed;\n    top: 0;\n    left: 0;\n    left: 0;\n    top: 0;\n    right: 0;\n    padding: 30px 20px;\n    transition: all 0.2s;\n    display: flex;\n    justify-content: space-between;\n    z-index: 1000; }\n.header__menu-munubtn {\n      display: none;\n      position: fixed;\n      top: 20px;\n      left: 20px;\n      z-index: 800;\n      cursor: pointer;\n      outline: none !important; }\n.header__menu.stick {\n      background: rgba(0, 0, 0, 0.6);\n      padding: 20px 20px;\n      height: 80px; }\n.header__menu.stick .header__center-logo {\n        display: block;\n        -webkit-animation: logo 0.3s;\n                animation: logo 0.3s; }\n.header__menu-item {\n      margin-right: 30px;\n      padding-bottom: 5px;\n      height: 25px;\n      cursor: pointer;\n      border-bottom: 2px transparent;\n      text-decoration: none;\n      color: white;\n      display: block;\n      box-sizing: border-box; }\n.header__menu-item i {\n        font-size: 24px;\n        position: relative;\n        top: -5px; }\n.header__menu-item.active {\n        border-bottom: 2px solid white; }\n.header__logo {\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%22766px%22 height%3D%22114px%22 viewBox%3D%220 0 766 114%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 53.2 (72643) - https%3A%2F%2Fsketchapp.com --%3E    %3Ctitle%3Elogo%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E        %3Cpath d%3D%22M312.900808%2C64.4548637 C312.932816%2C59.5950141 313.915871%2C54.4934422 315.85%2C49.15 C317.816677%2C43.7166395 320.74998%2C39.1166855 324.65%2C35.35 C328.55002%2C31.5833145 333.199973%2C29.7 338.6%2C29.7 C341.333347%2C29.7 343.36666%2C30.166662 344.7%2C31.1 C346.03334%2C32.033338 346.7%2C33.266659 346.7%2C34.8 L346.7%2C35.4 L347.8%2C30.2 L362.2%2C30.2 L352.3%2C76.6 C355.500016%2C75.533328 358.066657%2C73.933344 360%2C71.8 C361.35268%2C70.3073875 362.558491%2C68.308956 363.617449%2C65.8046732 C363.605816%2C65.4431838 363.6%2C65.0749594 363.6%2C64.7 C363.6%2C59.766642 364.583323%2C54.5833605 366.55%2C49.15 C368.516676%2C43.7166395 371.44998%2C39.1166855 375.35%2C35.35 C379.250019%2C31.5833145 383.899973%2C29.7 389.3%2C29.7 C392.033347%2C29.7 394.06666%2C30.166662 395.4%2C31.1 C396.73334%2C32.033338 397.4%2C33.266659 397.4%2C34.8 L397.4%2C35.5 L398.5%2C30.2 L412.9%2C30.2 L405.7%2C64.2 C405.433332%2C65.200005 405.3%2C66.266661 405.3%2C67.4 C405.3%2C68.73334 405.616664%2C69.6833305 406.25%2C70.25 C406.883336%2C70.8166695 407.933326%2C71.1 409.4%2C71.1 C410.333338%2C71.1 411.066664%2C70.966668 411.6%2C70.7 C410.133326%2C74.433352 408.73334%2C77.0499925 407.4%2C78.55 C406.06666%2C80.0500075 404.133346%2C80.8 401.6%2C80.8 C398.866653%2C80.8 396.650008%2C79.9833415 394.95%2C78.35 C393.249992%2C76.7166585 392.200002%2C74.433348 391.8%2C71.5 C387.733313%2C77.700031 382.766696%2C80.8 376.9%2C80.8 C373.099981%2C80.8 369.933346%2C79.500013 367.4%2C76.9 C366.177376%2C75.6452013 365.249783%2C74.0488067 364.617217%2C72.1108026 C363.746494%2C73.3613989 362.807422%2C74.4411298 361.8%2C75.35 C358.733318%2C78.1166805 355.266686%2C79.999995 351.4%2C81 L349.9%2C88.2 C348.56666%2C94.666699 346.266683%2C99.1166545 343%2C101.55 C339.733317%2C103.983345 336.033354%2C105.2 331.9%2C105.2 C328.699984%2C105.2 326.033344%2C104.366675 323.9%2C102.7 C321.766656%2C101.033325 320.7%2C98.633349 320.7%2C95.5 C320.7%2C91.699981 322.233318%2C88.6500115 325.3%2C86.35 C328.366682%2C84.0499885 332.266643%2C82.133341 337%2C80.6 L338.2%2C75.3 C334.799983%2C78.966685 330.800023%2C80.8 326.2%2C80.8 C322.399981%2C80.8 319.233346%2C79.500013 316.7%2C76.9 C314.89639%2C75.0489261 313.734827%2C72.4544703 313.215299%2C69.1165885 C310.928706%2C72.1709182 308.090283%2C74.7653774 304.7%2C76.9 C299.299973%2C80.300017 293.533364%2C82 287.4%2C82 C281.333303%2C82 276.750015%2C80.33335 273.65%2C77 C270.549984%2C73.66665 269%2C69.466692 269%2C64.4 C269%2C60.799982 269.749993%2C57.1833515 271.25%2C53.55 C272.750007%2C49.9166485 274.899986%2C46.733347 277.7%2C44 C280.500014%2C41.266653 283.766648%2C39.433338 287.5%2C38.5 C285.433323%2C37.033326 283.900005%2C35.2500105 282.9%2C33.15 C281.899995%2C31.0499895 281.4%2C28.833345 281.4%2C26.5 C281.4%2C23.033316 282.34999%2C19.63335 284.25%2C16.3 C286.150009%2C12.96665 288.783317%2C10.2500105 292.15%2C8.15 C295.516683%2C6.0499895 299.233313%2C5 303.3%2C5 C307.500021%2C5 310.93332%2C6.099989 313.6%2C8.3 C316.26668%2C10.500011 317.6%2C13.566647 317.6%2C17.5 C317.6%2C20.433348 316.866674%2C22.89999 315.4%2C24.9 C313.933326%2C26.90001 312.20001%2C27.9 310.2%2C27.9 C308.399991%2C27.9 306.83334%2C27.000009 305.5%2C25.2 C306.700006%2C24.799998 307.733329%2C23.700009 308.6%2C21.9 C309.466671%2C20.099991 309.9%2C18.300009 309.9%2C16.5 C309.9%2C14.566657 309.366672%2C13.1500045 308.3%2C12.25 C307.233328%2C11.3499955 305.933341%2C10.9 304.4%2C10.9 C302.466657%2C10.9 300.716675%2C11.5833265 299.15%2C12.95 C297.583325%2C14.3166735 296.366671%2C16.0833225 295.5%2C18.25 C294.633329%2C20.4166775 294.2%2C22.666655 294.2%2C25 C294.2%2C28.200016 295.033325%2C31.0166545 296.7%2C33.45 C298.366675%2C35.8833455 300.899983%2C37.533329 304.3%2C38.4 C300.899983%2C39.133337 297.833347%2C40.799987 295.1%2C43.4 C292.366653%2C46.000013 290.233341%2C49.0166495 288.7%2C52.45 C287.166659%2C55.8833505 286.4%2C59.166651 286.4%2C62.3 C286.4%2C65.300015 287.183325%2C67.733324 288.75%2C69.6 C290.316675%2C71.466676 292.699984%2C72.4 295.9%2C72.4 C299.23335%2C72.4 302.716648%2C71.4833425 306.35%2C69.65 C309.063476%2C68.2808148 311.247068%2C66.549113 312.900808%2C64.4548637 Z M332.7%2C71.1 C334.233341%2C71.1 335.799992%2C70.400007 337.4%2C69 C339.000008%2C67.599993 340.099997%2C65.700012 340.7%2C63.3 L345.8%2C39.6 C345.8%2C38.799996 345.46667%2C37.9833375 344.8%2C37.15 C344.13333%2C36.3166625 343.100007%2C35.9 341.7%2C35.9 C339.03332%2C35.9 336.633344%2C37.4499845 334.5%2C40.55 C332.366656%2C43.6500155 330.700006%2C47.3833115 329.5%2C51.75 C328.299994%2C56.1166885 327.7%2C59.96665 327.7%2C63.3 C327.7%2C66.63335 328.183329%2C68.766662 329.15%2C69.7 C330.116672%2C70.633338 331.299993%2C71.1 332.7%2C71.1 Z M329.6%2C97.4 C330.733339%2C97.4 331.833328%2C96.633341 332.9%2C95.1 C333.966672%2C93.566659 334.799997%2C91.366681 335.4%2C88.5 L336%2C85.6 C329.466634%2C88.000012 326.2%2C90.833317 326.2%2C94.1 C326.2%2C94.966671 326.499997%2C95.73333 327.1%2C96.4 C327.700003%2C97.06667 328.533328%2C97.4 329.6%2C97.4 Z M383.4%2C71.1 C385.066675%2C71.1 386.716658%2C70.3166745 388.35%2C68.75 C389.983342%2C67.1833255 391.099997%2C65.033347 391.7%2C62.3 L396.5%2C39.7 C396.5%2C38.833329 396.16667%2C37.9833375 395.5%2C37.15 C394.83333%2C36.3166625 393.800007%2C35.9 392.4%2C35.9 C389.73332%2C35.9 387.333344%2C37.4499845 385.2%2C40.55 C383.066656%2C43.6500155 381.400006%2C47.3833115 380.2%2C51.75 C378.999994%2C56.1166885 378.4%2C59.96665 378.4%2C63.3 C378.4%2C66.63335 378.883329%2C68.766662 379.85%2C69.7 C380.816672%2C70.633338 381.999993%2C71.1 383.4%2C71.1 Z%22 id%3D%22path-1%22%3E%3C%2Fpath%3E        %3Cfilter x%3D%22-4.5%25%22 y%3D%22-4.5%25%22 width%3D%22111.9%25%22 height%3D%22117.0%25%22 filterUnits%3D%22objectBoundingBox%22 id%3D%22filter-2%22%3E            %3CfeMorphology radius%3D%220.5%22 operator%3D%22dilate%22 in%3D%22SourceAlpha%22 result%3D%22shadowSpreadOuter1%22%3E%3C%2FfeMorphology%3E            %3CfeOffset dx%3D%222%22 dy%3D%224%22 in%3D%22shadowSpreadOuter1%22 result%3D%22shadowOffsetOuter1%22%3E%3C%2FfeOffset%3E            %3CfeGaussianBlur stdDeviation%3D%222%22 in%3D%22shadowOffsetOuter1%22 result%3D%22shadowBlurOuter1%22%3E%3C%2FfeGaussianBlur%3E            %3CfeComposite in%3D%22shadowBlurOuter1%22 in2%3D%22SourceAlpha%22 operator%3D%22out%22 result%3D%22shadowBlurOuter1%22%3E%3C%2FfeComposite%3E            %3CfeColorMatrix values%3D%220 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.536604021 0%22 type%3D%22matrix%22 in%3D%22shadowBlurOuter1%22%3E%3C%2FfeColorMatrix%3E        %3C%2Ffilter%3E        %3Cfilter x%3D%22-25.4%25%22 y%3D%22-19.3%25%22 width%3D%22150.8%25%22 height%3D%22138.6%25%22 filterUnits%3D%22objectBoundingBox%22 id%3D%22filter-3%22%3E            %3CfeOffset dx%3D%222%22 dy%3D%224%22 in%3D%22SourceAlpha%22 result%3D%22shadowOffsetOuter1%22%3E%3C%2FfeOffset%3E            %3CfeGaussianBlur stdDeviation%3D%222%22 in%3D%22shadowOffsetOuter1%22 result%3D%22shadowBlurOuter1%22%3E%3C%2FfeGaussianBlur%3E            %3CfeColorMatrix values%3D%220 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0%22 type%3D%22matrix%22 in%3D%22shadowBlurOuter1%22 result%3D%22shadowMatrixOuter1%22%3E%3C%2FfeColorMatrix%3E            %3CfeMerge%3E                %3CfeMergeNode in%3D%22shadowMatrixOuter1%22%3E%3C%2FfeMergeNode%3E                %3CfeMergeNode in%3D%22SourceGraphic%22%3E%3C%2FfeMergeNode%3E            %3C%2FfeMerge%3E        %3C%2Ffilter%3E    %3C%2Fdefs%3E    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22My-meny%22 transform%3D%22translate(-577.000000%2C -81.000000)%22%3E            %3Cg id%3D%22logo%22 transform%3D%22translate(578.000000%2C 81.000000)%22%3E                %3Cg id%3D%22%D0%95%D0%B4%D0%B0%22 fill-rule%3D%22nonzero%22%3E                    %3Cuse fill%3D%22black%22 fill-opacity%3D%221%22 filter%3D%22url(%23filter-2)%22 xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E                    %3Cuse stroke%3D%22%23FFFFFF%22 stroke-width%3D%221%22 fill%3D%22%23FFFFFF%22 xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E                %3C%2Fg%3E                %3Cpath d%3D%22M763.5%2C45.5 L526.564352%2C45.5%22 id%3D%22Line-Copy%22 stroke%3D%22%23FFFFFF%22 stroke-width%3D%222%22 stroke-linecap%3D%22square%22%3E%3C%2Fpath%3E                %3Cpath d%3D%22M237.5%2C45.5 L0.564351876%2C45.5%22 id%3D%22Line-Copy-2%22 stroke%3D%22%23FFFFFF%22 stroke-width%3D%222%22 stroke-linecap%3D%22square%22%3E%3C%2Fpath%3E                %3Cg id%3D%22maphin%22 filter%3D%22url(%23filter-3)%22 transform%3D%22translate(436.000000%2C 0.000000)%22 fill%3D%22%23FFFFFF%22%3E                    %3Cpath d%3D%22M0%2C51.518197 C3.16842105%2C53.2918197 6.63157895%2C53.2918197 10.3894737%2C51.518197 C14.1473684%2C49.7445743 17.7947368%2C49.7445743 21.3315789%2C51.518197 C24.6473684%2C53.8091263 28%2C53.8091263 31.3894737%2C51.518197 C34.7789474%2C49.2272677 38.4631579%2C49.2272677 42.4421053%2C51.518197 C45.8315789%2C53.5874235 49.2947368%2C53.5874235 52.8315789%2C51.518197 C56.3684211%2C49.4489705 59.7578947%2C49.4489705 63%2C51.518197 L53.2042232%2C79.0273084 C52.3558747%2C81.4096937 50.1058476%2C83 47.583505%2C83 L15.3911688%2C83 C12.8670326%2C83 10.6158122%2C81.4074657 9.76880798%2C79.0226896 L0%2C51.518197 Z M7.36653417%2C44.7264734 C5.25741123%2C44.3114351 4.20284976%2C43.2575031 4.20284976%2C41.5646773 C4.20284976%2C39.0254386 3.98466463%2C36.1133048 7.36653417%2C34.8049754 C10.7484037%2C33.496646 10.7484037%2C33.0605362 18.2757908%2C32.0792891 C23.2940488%2C31.4251244 28.7850413%2C29.4989728 34.7487682%2C26.3008343 L46.9671356%2C19.7591872 C50.7490112%2C17.5059533 53.4035969%2C17.3969258 54.9308929%2C19.4321049 C56.4581888%2C21.467284 56.3490962%2C23.4661205 54.6036152%2C25.4286146 C53.2945044%2C27.2457388 51.6944801%2C28.8811506 49.8035423%2C30.3348499 C47.9126045%2C31.7885493 44.6761917%2C33.8600708 40.0943039%2C36.5494146 C38.2033661%2C37.857744 36.2760641%2C39.0933884 34.3123979%2C40.2563479 C31.3668986%2C42.0007871 26.1304555%2C44.9445283 19.6939941%2C45.4896655 C15.4030199%2C45.8530903 11.2938665%2C45.598693 7.36653417%2C44.7264734 Z M30.8%2C45.65 C38.6607761%2C42.129406 44.5743875%2C38.8486636 48.5408341%2C35.8077727 C54.4905041%2C31.2464365 54.8150315%2C28.4807813 59.3584159%2C32.089598 C62.0116874%2C36.0398492 58.3582266%2C41.7249821 48.8653616%2C44.337703 C45.7331793%2C45.1997734 39.7113921%2C45.6372058 30.8%2C45.65 Z M35.9213028%2C0 C35.7019113%2C4.58606603 37.0548257%2C7.23576984 39.980046%2C7.94911142 C42.9052662%2C8.662453 44.9529204%2C10.1604703 46.1230085%2C12.4431634 C46.459749%2C14.5324078 45.6918787%2C15.8877568 43.8193976%2C16.5092104 C41.9469165%2C17.1306639 39.0216962%2C18.7356824 35.0437368%2C21.324266 C29.6320793%2C24.6056373 25.9024234%2C26.6386608 23.8547692%2C27.4233365 C20.783288%2C28.6003501 14.9694127%2C31.9173884 12.1173229%2C29.6703625 C10.2159298%2C28.1723452 9.48462469%2C26.28199 9.92340773%2C23.9992969 C10.9472348%2C19.0059059 12.7389322%2C15.8315359 15.2985%2C14.4761869 C19.1378516%2C12.4431634 23.9180488%2C9.87513368 28%2C8.91212255 C30.7213008%2C8.27011513 33.3617351%2C5.29940761 35.9213028%2C0 Z%22 id%3D%22Combined-Shape%22%3E%3C%2Fpath%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat;\n    width: 578px;\n    height: 81px;\n    background-size: 100% auto;\n    margin: 0 auto 0; }\n.auth {\n  padding: 40px;\n  box-sizing: border-box;\n  width: 400px; }\n.auth__title {\n    font-size: 24px;\n    font-weight: bold;\n    margin-bottom: 20px; }\n.auth__line {\n    margin-bottom: 10px; }\n.auth__line .btn {\n      padding: 0 40px !important;\n      height: 60px;\n      width: 100% !important; }\n.auth__line_btns {\n      margin-top: 20px;\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n.auth__link {\n    margin-top: 20px;\n    color: gray;\n    cursor: pointer; }\n.auth__link:hover {\n      text-decoration: underline; }\n.auth__error {\n    padding: 20px; }\n@-webkit-keyframes logo {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes logo {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@media (max-width: 1199px) {\n  .header {\n    max-width: inherit; }\n    .header__center {\n      display: none; } }\n@media (max-width: 767px) {\n  .auth {\n    width: auto;\n    padding: 40px 30px; }\n  .header {\n    height: 140px;\n    margin-bottom: 30px;\n    align-items: flex-end; }\n    .header__filter {\n      position: fixed;\n      top: 85px;\n      left: 20px;\n      color: #87BF49;\n      font-size: 24px;\n      width: 55px;\n      height: 55px;\n      z-index: 800;\n      background: white;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 50%;\n      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.18); }\n      .header__filter.active {\n        box-shadow: 0 0 16px 0px #00000091; }\n    .header__center {\n      display: none; }\n    .header__mobil-user {\n      display: block;\n      position: absolute;\n      right: 20px;\n      top: 20px;\n      font-size: 14px;\n      opacity: 0.4; }\n    .header__logo {\n      background-position: center bottom;\n      width: 90%; }\n    .header__menu {\n      display: none;\n      background: white !important;\n      color: black;\n      position: fixed;\n      top: 20px;\n      left: 90px;\n      right: 20px;\n      border-radius: 10px;\n      flex-direction: column; }\n      .header__menu-munubtn {\n        display: block;\n        color: #87BF49;\n        font-size: 24px;\n        width: 55px;\n        height: 55px;\n        background: white;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 50%;\n        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.18); }\n        .header__menu-munubtn.active {\n          box-shadow: 0 0 16px 0px #00000091; }\n      .header__menu-item {\n        color: black; }\n        .header__menu-item_filter {\n          display: none; }\n      .header__menu.active {\n        display: flex;\n        height: auto;\n        box-shadow: 0 0 16px 0px #00000091;\n        z-index: 800;\n        max-width: 250px;\n        padding: 20px; }\n        .header__menu.active .header__left, .header__menu.active .header__right {\n          color: black;\n          flex-direction: column;\n          align-items: flex-start;\n          justify-content: flex-start;\n          text-align: left; }\n          .header__menu.active .header__left-exit, .header__menu.active .header__right-exit {\n            display: block; }\n          .header__menu.active .header__left-user,\n          .header__menu.active .header__left i, .header__menu.active .header__right-user,\n          .header__menu.active .header__right i {\n            display: none; }\n          .header__menu.active .header__left div, .header__menu.active .header__right div {\n            padding: 0;\n            margin: 0;\n            color: white;\n            color: black;\n            margin-bottom: 10px;\n            padding-bottom: 10px;\n            width: 100%;\n            border-bottom: 1px solid #dcdcdc; }\n            .header__menu.active .header__left div:last-child, .header__menu.active .header__right div:last-child {\n              border-bottom: none;\n              padding: 0;\n              margin: 0; }\n        .header__menu.active .header__menu-item {\n          margin: 0;\n          padding: 0;\n          height: auto;\n          border: none;\n          margin-bottom: 10px;\n          padding-bottom: 10px;\n          width: 100%;\n          border-bottom: 1px solid #dcdcdc; }\n          .header__menu.active .header__menu-item.active {\n            color: #87BF49; } }\n"

/***/ }),

/***/ "./src/app/header/topmenu.component.ts":
/*!*********************************************!*\
  !*** ./src/app/header/topmenu.component.ts ***!
  \*********************************************/
/*! exports provided: TopmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopmenuComponent", function() { return TopmenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _userinfo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../userinfo.service */ "./src/app/userinfo.service.ts");
/* harmony import */ var _get_json_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../get-json.service */ "./src/app/get-json.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TopmenuComponent = /** @class */ (function () {
    function TopmenuComponent(afAuth, db, userinfo, getJsonService, router, route) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.userinfo = userinfo;
        this.getJsonService = getJsonService;
        this.router = router;
        this.route = route;
        this.authform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.regisration = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.menuactive = false;
        this.modal = false;
        this.reg = false;
        this.auth = true;
        this.errorMessage = '';
        this.successMessage = '';
        this.redactor = false;
        this.addrecepi = false;
        this.exact = false;
        this.menuOpen = false;
        this.filterOn = true;
        this.home = false;
        this.scrollEvent = function (event) {
            if (event.srcElement.scrollingElement.scrollTop > 169) {
                _this.menuactive = true;
            }
            else {
                _this.menuactive = false;
            }
        };
        this.authUser = userinfo.loadCurrentUserLight();
        if (this.authUser) {
            var at = localStorage.getItem('at');
            var ml = localStorage.getItem('ml');
            this.authUser = true;
            this.emailuser = ml;
            if (ml == 'robindranat@gmail.com' || ml == '2@2.ru') {
                this.redactor = true;
            }
            else {
                this.redactor = false;
            }
        }
        else {
            localStorage.removeItem('at');
            localStorage.removeItem('ml');
            this.authUser, this.redactor = false;
            this.emailuser = null;
        }
        this.getJsonService.filterOn.subscribe(function (y) {
            _this.finterActive = y;
        });
        this.getJsonService.filterOff.subscribe(function (d) {
            _this.finterActive = d;
        });
        var xx1;
        var yy1;
        router.events.subscribe(function (x) {
            var url = x;
            xx1 = yy1;
            yy1 = url.url;
            if (xx1 == '/') {
                _this.home = true;
            }
            else {
                _this.home = false;
            }
        });
    }
    TopmenuComponent.prototype.filterVisible = function () {
        this.getJsonService.filterVisibleActivate();
    };
    TopmenuComponent.prototype.setlackyBtn = function () {
        this.getJsonService.lackyBtn();
    };
    TopmenuComponent.prototype.clearMenuUser = function () {
        this.userinfo.notifyAboutLogout();
    };
    TopmenuComponent.prototype.reseCounterCat = function () {
        this.getJsonService.resetCounterService();
    };
    TopmenuComponent.prototype.modalAuth = function () {
        this.modal = true;
    };
    TopmenuComponent.prototype.modalAuthClose = function () {
        this.modal = false;
    };
    TopmenuComponent.prototype.modalChenge = function () {
        this.reg = !this.reg;
        this.auth = !this.auth;
    };
    TopmenuComponent.prototype.tryRegister = function (value) {
        var _this = this;
        this.doRegister(value)
            .then(function (res) {
            _this.errorMessage = '';
            _this.successMessage = 'Your account has been created';
            _this.userinfo.setNewUser(res.user.uid, res.user.email);
            _this.modal = false;
        }, function (err) {
            _this.errorMessage = err.message;
            _this.successMessage = '';
        });
    };
    TopmenuComponent.prototype.doRegister = function (value) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    TopmenuComponent.prototype.trylogin = function (value) {
        var _this = this;
        this.login(value)
            .then(function (res) {
            _this.emailuser = res.user.email;
            _this.errorMessage = '';
            _this.authUser = true;
            _this.modal = false;
            if (res.user.email == 'bis@mail.ru') {
                _this.redactor = true;
            }
            else {
                _this.redactor = false;
            }
            localStorage.setItem('at', res.user.uid);
            localStorage.setItem('ml', res.user.email);
            _this.userinfo.notifyAboutLoin();
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
        });
    };
    TopmenuComponent.prototype.login = function (value) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    TopmenuComponent.prototype.exitLogin = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signOut().then(function () {
            localStorage.removeItem('at');
            localStorage.removeItem('ml');
            _this.emailuser = '';
            _this.authUser = false;
            _this.redactor = false;
            _this.userinfo.notifyAboutLogout();
        }).catch(function (error) {
            console.log(error);
        });
    };
    TopmenuComponent.prototype.openModalRecepient = function () {
        this.addrecepi = true;
        window.removeEventListener('scroll', this.scrollEvent, true);
    };
    TopmenuComponent.prototype.closeModalRecepient = function () {
        this.addrecepi = false;
        window.addEventListener('scroll', this.scrollEvent, true);
    };
    TopmenuComponent.prototype.openCloseTopMenu = function () {
        this.menuOpen = !this.menuOpen;
    };
    TopmenuComponent.prototype.closeTopMenu = function () {
        this.menuOpen = false;
    };
    TopmenuComponent.prototype.ngOnInit = function () {
        window.addEventListener('scroll', this.scrollEvent, true);
    };
    TopmenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topmenu',
            template: __webpack_require__(/*! ./topmenu.component.html */ "./src/app/header/topmenu.component.html"),
            styles: [__webpack_require__(/*! ./topmenu.component.scss */ "./src/app/header/topmenu.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
            _userinfo_service__WEBPACK_IMPORTED_MODULE_5__["UserinfoService"],
            _get_json_service__WEBPACK_IMPORTED_MODULE_6__["GetJsonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], TopmenuComponent);
    return TopmenuComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"weekfilter\">\n  <div class=\"weekfilter__header\">\n    <div class=\"weekfilter__header-item weekfilter__header-item_itemo\" (click)=\"tabsweek('day0')\"\n         [class.active]=\"activeweekday=='day0'\">Неделя\n    </div>\n    <div class=\"weekfilter__header-item weekfilter__header-item_item1\" (click)=\"tabsweek('day1')\"\n         [class.active]=\"activeweekday=='day1'\">Пн\n    </div>\n    <div class=\"weekfilter__header-item weekfilter__header-item_item2\" (click)=\"tabsweek('day2')\"\n         [class.active]=\"activeweekday=='day2'\">Вт\n    </div>\n    <div class=\"weekfilter__header-item weekfilter__header-item_item3\" (click)=\"tabsweek('day3')\"\n         [class.active]=\"activeweekday=='day3'\">Ср\n    </div>\n    <div class=\"weekfilter__header-item weekfilter__header-item_item4\" (click)=\"tabsweek('day4')\"\n         [class.active]=\"activeweekday=='day4'\">Чт\n    </div>\n    <div class=\"weekfilter__header-item weekfilter__header-item_item5\" (click)=\"tabsweek('day5')\"\n         [class.active]=\"activeweekday=='day5'\">Пт\n    </div>\n    <div class=\"weekfilter__header-item weekfilter__header-item_item6\" (click)=\"tabsweek('day6')\"\n         [class.active]=\"activeweekday=='day6'\">Сб\n    </div>\n    <div class=\"weekfilter__header-item weekfilter__header-item_item7\" (click)=\"tabsweek('day7')\"\n         [class.active]=\"activeweekday=='day7'\">Вс\n    </div>\n  </div>\n</div>\n\n\n<!-- <div *ngIf=\"activeweekday == 'day0' && weekOn\"> -->\n\n<div class=\"menu__forweek\" [ngClass]=\"{'menu__forweek-print': printver}\">\n\n  <div class=\"menu__forweek-btn\" *ngIf=\"activeweekday == 'day0' && auth\">\n    <div class=\"btn desktop\" (click)=\"openListProd()\" [ngClass]=\"{'active': listProd}\">Cписок продуктов<i class=\"mdi mdi-shopping\"></i></div>\n    <div class=\"btn desktop\" (click)=\"openModalYes()\">Очистить меню<i class=\"mdi mdi-close\"></i></div>\n    <div class=\"btn\" (click)=\"ptintversion()\" [ngClass]=\"{'active': printver}\">Версия для печати<i\n      class=\"mdi mdi-printer\"></i></div>\n  </div>\n\n  <div class=\"menu menu_list\" *ngIf=\"listProd && activeweekday == 'day0'\">\n    <div class=\"menu__cart productlist\">\n      <div class=\"productlist__title\">Список продуктов на неделю</div>\n      <div class=\"productlist__list\">\n        <div class=\"productlist__item\" *ngFor=\"let product of listProdSort\">\n          <div class=\"productlist__name\">{{product.name}}</div>\n          <div class=\"productlist__value\">{{product.value}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"menu__message\" *ngIf=\"!auth\">\n    <div>\n      <h2>Для выбора блюда необходимо зарегистрироваться.</h2>\n      <p>Пока вы можете просмотреть предлагаемые блюда в разделе \"Каталог блюд\".</p>\n      <div class=\"menu__message_btn-wrap\">\n        <div routerLink=\"/\" class=\"btn menu__message_btn\">Перейти в раздел Каталог блюд</div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngFor=\"let onedayweek of massForWeek\">\n\n    <div class=\"menu__message\" *ngIf=\"onedayweek.dayvalue == activeweekday && onedayweek.idcart.length == 0\">\n      <div>\n        <h2>Вы еще не выбрали ни одного блюда.</h2>\n        <p>Перейдите в раздел \"Каталог блюд\" и сделайте свой выбор.</p>\n        <div class=\"menu__message_btn-wrap\">\n          <div routerLink=\"/\" class=\"btn menu__message_btn\">Перейти в раздел Каталог блюд</div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"menu menu_list\" *ngIf=\"activeweekday == onedayweek.dayvalue || activeweekday == 'day0'\">\n\n      <div class=\"menu__cart\" *ngFor=\"let idcart of onedayweek.idcart\">\n        <div class=\"menu__cart-left\" [ngStyle]=\"{'background-image': idcart.Img}\"></div>\n        <div class=\"menu__cart-right\">\n          <div class=\"menu__cart-btn menu__cart-btn_minus\" (click)=\"removeCart(idcart.Id, onedayweek.dayvalue)\"><i\n            class=\"mdi mdi-minus\"></i>\n          </div>\n          <div class=\"menu__cart-btn menu__cart-btn_plus\" (click)=\"openmodal(idcart.Id)\"><i class=\"mdi mdi-plus\"></i>\n          </div>\n          <div class=\"menu__cart-btn menu__cart-btn_week\">{{onedayweek.dayshort}}</div>\n          <div class=\"menu__cart-title\">{{idcart.Name}}</div>\n          <div class=\"menu__cart-category-wrap\">\n            <div class=\"menu__cart-category\">{{idcart.Category}} {{idcart.Id}}</div>\n            <div class=\"menu__cart-category menu__cart-category_time\">Время приготовления: {{idcart.Time}} мин.</div>\n          </div>\n          <div class=\"menu__cart-textwrap\">\n            <div class=\"menu__cart-textleft\">\n              <div class=\"menu__cart-textleft-title\">Приготовление</div>\n              <div *ngFor=\"let comment of idcart.Comment\" class=\"menu__cart-textleft-text\">\n                {{comment}}\n              </div>\n            </div>\n            <div class=\"menu__cart-textright\">\n              <div class=\"menu__cart-textleft-title\">Продукты</div>\n              <div *ngFor=\"let product of idcart.Ingredients\" class=\"menu__cart-string\">\n\n                <div class=\"menu__cart-textright-title\">{{product[0]}}</div>\n                <div class=\"menu__cart-textright-value\">{{product[1]}}</div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"cart__modal-wrap\" *ngIf=\"modal && eatMassAll && eatMassAll.length > 0\">\n  <div class=\"cart__modal\">\n    <div class=\"cart__modal-close\" (click)=\"closemodal()\"><i class=\"mdi mdi-close\"></i></div>\n    <!-- <div class=\"cart__modal-title\">{{sortresult[0].Name}}</div> -->\n    <div class=\"cart__modal-text\">В какой день добавить блюдо?</div>\n\n    <div class=\"cart__modal-week\">\n      <div class=\"cart__modal-day\" *ngFor=\"let day of modaldays\" (click)=\"addItemForDifferentrDay(day.value)\"\n           [routerLink]=\"['/menu', day.value]\">\n        {{day.name}}\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"cart__modal-wrap\" *ngIf=\"modalYes\">\n  <div class=\"cart__modal\">\n    <div class=\"cart__modal-close\" (click)=\"closemodalYes()\"><i class=\"mdi mdi-close\"></i></div>\n    <div class=\"cart__modal-title\">Подтверждение</div>\n    <div class=\"cart__modal-text\">Очстить меню</div>\n    <div class=\"cart__modal-yes-btn\">\n      <button class=\"btn\" (click)=\"clearALLMenu()\">Очистить</button>\n      <button class=\"btn btn_dark\" (click)=\"closemodalYes()\">Закрыть окно</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Eric Meyer's CSS Reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n/* End of Eric Meyer's CSS Reset */\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {\n  display: block; }\nbody {\n  font: 16px Arial, sans-serif;\n  width: 100%;\n  padding: 0 !important;\n  margin: 0 !important; }\n.body__img {\n  background: url(\"/assets/bg.jpg\") no-repeat top center;\n  width: 100%;\n  top: 0;\n  left: 0;\n  padding-top: 100vh;\n  box-sizing: border-box;\n  background-size: cover !important;\n  position: fixed;\n  z-index: 1; }\n.mob {\n  display: none; }\n@media (max-width: 767px) {\n  .mob {\n    display: flex; } }\n* {\n  box-sizing: border-box; }\n.menu {\n  max-width: 1200px;\n  margin: 0 auto;\n  margin-bottom: 100px; }\n.menu_list {\n    margin-bottom: 60px; }\n.menu__cart {\n    display: flex;\n    background: white;\n    border-radius: 10px;\n    margin-bottom: 20px;\n    position: relative;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23); }\n.menu__cart-btn {\n      display: flex;\n      background: #87BF49;\n      justify-content: center;\n      align-items: center;\n      color: white;\n      font-size: 16px;\n      border-radius: 9px;\n      width: 34px;\n      height: 34px;\n      transition: all 0.2s;\n      cursor: pointer;\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      transition: all 0.2s; }\n.menu__cart-btn i {\n        color: white; }\n.menu__cart-btn_week {\n        font-size: 12px;\n        right: 90px;\n        background: #ae9671; }\n.menu__cart-btn_plus {\n        right: 50px; }\n.menu__cart-btn_minus {\n        right: 10px; }\n.menu__cart-btn:hover {\n        background: black; }\n.menu__cart-left {\n      min-width: 410px;\n      max-width: 410px;\n      background: url('test.jpg') no-repeat;\n      background-size: cover !important;\n      background-position: center center;\n      border-radius: 10px 0 0 10px;\n      margin-right: 60px; }\n.menu__cart-right {\n      padding: 40px 40px 40px 0; }\n.menu__cart-title {\n      font-size: 30px;\n      font-weight: bold;\n      margin-bottom: 15px; }\n.menu__cart-category {\n      background: #87BF49;\n      top: 15px;\n      right: 15px;\n      color: white;\n      font-size: 12px;\n      padding: 3px 10px;\n      border-radius: 9px;\n      z-index: 100; }\n.menu__cart-category_time {\n        background: #AE9671;\n        margin-left: 6.66666667px; }\n.menu__cart-category-wrap {\n        display: flex;\n        margin-bottom: 20px; }\n.menu__cart-textwrap {\n      display: flex;\n      font-size: 14px; }\n.menu__cart-textleft-title {\n      font-weight: bold;\n      margin-bottom: 10px; }\n.menu__cart-textleft-text {\n      margin-bottom: 10px; }\n.menu__cart-textright {\n      min-width: 320px;\n      max-width: 320px;\n      padding-left: 60px; }\n.menu__cart-textright-title, .menu__cart-textright-value {\n        background: white;\n        padding: 5px;\n        position: relative;\n        margin-bottom: -8px; }\n.menu__cart-textright-title {\n        padding-left: 0;\n        font-size: 13px; }\n.menu__cart-textright-value {\n        padding-right: 0;\n        font-size: 13px; }\n.menu__cart-string {\n      display: flex;\n      border-bottom: 1px dotted gray;\n      justify-content: space-between;\n      margin-bottom: 5px; }\n.menu__message {\n    display: flex;\n    max-width: 1200px;\n    margin: 100px auto 0;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    min-height: 200px;\n    -webkit-animation: vizible 0.7s;\n            animation: vizible 0.7s; }\n.menu__message div {\n      color: white; }\n.menu__message div h2 {\n        font-weight: bold;\n        font-size: 40px;\n        margin-bottom: 20px; }\n.menu__message_btn {\n      margin-top: 100px;\n      padding: 30px 50px !important;\n      font-size: 18px;\n      transition: all 0.2s;\n      cursor: pointer;\n      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);\n      border-radius: 100px; }\n.menu__message_btn:hover {\n        background: black; }\n.menu__message_btn-wrap {\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n.menu__forweek {\n    margin-bottom: 100px; }\n.menu__forweek-title {\n      color: white;\n      text-align: center;\n      margin-bottom: 35px; }\n.menu__forweek-btn {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 60px 0; }\n.menu__forweek-btn .btn {\n        height: 50px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0 10px;\n        background: none;\n        border: 1px solid white; }\n.menu__forweek-btn .btn i {\n          padding: 0;\n          margin: 0;\n          margin-left: 10px; }\n.menu__forweek-btn .btn:hover {\n          border: 1px solid #87BF49; }\n.menu__forweek-btn .btn.active {\n          border: 1px solid #87BF49;\n          color: white; }\n.menu__forweek-btn .btn.active:hover {\n            color: white; }\n.menu__forweek-print .menu__cart-left {\n      display: none; }\n.menu__forweek-print .menu__cart-right {\n      padding: 40px;\n      flex: 1; }\n.menu__forweek-print .menu__cart-textleft {\n      flex: 1; }\n.menu__forweek-print .menu__cart-textwrap {\n      flex: 1; }\n.menu__forweek-print .menu__cart-textright {\n      min-width: 40%;\n      min-width: 40%; }\n.weekfilter__header {\n  display: flex;\n  margin: 0 auto;\n  max-width: 800px;\n  color: white;\n  margin-bottom: 40px;\n  justify-content: space-between; }\n.weekfilter__header-item {\n    flex: 1;\n    text-align: center;\n    padding: 20px;\n    font-weight: bold;\n    cursor: pointer;\n    border-bottom: 2px solid rgba(135, 191, 73, 0);\n    transition: all 0.7s; }\n.weekfilter__header-item.active {\n      border-bottom: 2px solid #87bf49; }\n.weekfilter__content {\n  margin: 0 auto;\n  max-width: 1200px; }\n.productlist {\n  padding: 50px;\n  display: block; }\n.productlist__list {\n    -webkit-column-count: 3;\n            column-count: 3; }\n.productlist__title {\n    font-size: 30px;\n    font-weight: bold;\n    margin-bottom: 30px;\n    text-align: center; }\n.productlist__item {\n    display: flex;\n    border-bottom: 1px dotted gray;\n    justify-content: space-between;\n    margin-bottom: 5px; }\n.productlist__name {\n    background: white;\n    padding: 5px;\n    position: relative;\n    margin-bottom: -8px;\n    font-size: 13px; }\n.productlist__value {\n    background: white;\n    padding: 5px;\n    position: relative;\n    margin-bottom: -8px;\n    font-size: 13px; }\n@-webkit-keyframes vizible {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes vizible {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@-webkit-keyframes viziblecart {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes viziblecart {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@media (max-width: 767px) {\n  .weekfilter {\n    overflow: hidden;\n    height: 62px;\n    margin-bottom: 20px; }\n    .weekfilter__header {\n      margin-left: 16px;\n      margin-right: 16px;\n      overflow: auto;\n      height: 80px; }\n      .weekfilter__header-item {\n        height: 60px; }\n  .menu {\n    max-width: inherit; }\n    .menu__forweek {\n      padding-left: 16px;\n      padding-right: 16px; }\n      .menu__forweek-btn {\n        display: none; }\n    .menu__cart {\n      flex-direction: column;\n      align-items: flex-start; }\n      .menu__cart-left {\n        height: 200px;\n        border-radius: 10px 10px 0 0;\n        min-width: 100%;\n        max-width: 100%;\n        margin-right: 0; }\n      .menu__cart-textwrap {\n        flex-direction: column; }\n      .menu__cart-right {\n        padding: 30px; }\n      .menu__cart-textright {\n        padding: 0;\n        margin-top: 20px;\n        max-width: 100%;\n        min-width: 100%; }\n      .menu__cart-category {\n        margin-bottom: 6.66666667px; }\n        .menu__cart-category-wrap {\n          flex-direction: column;\n          justify-content: flex-start;\n          align-items: flex-start; }\n        .menu__cart-category_time {\n          margin-left: 0; }\n    .menu__message {\n      margin-top: 20%; }\n      .menu__message div h2 {\n        font-size: 28px; }\n      .menu__message_btn {\n        margin-top: 20%;\n        font-size: 16px; } }\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-json.service */ "./src/app/get-json.service.ts");
/* harmony import */ var _userinfo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userinfo.service */ "./src/app/userinfo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { Pipe, PipeTransform } from '@angular/core';
var MenuComponent = /** @class */ (function () {
    function MenuComponent(route, router, userinfoservice, afAuth, db, getJsonService) {
        this.route = route;
        this.router = router;
        this.userinfoservice = userinfoservice;
        this.afAuth = afAuth;
        this.db = db;
        this.getJsonService = getJsonService;
        this.dayMass = [
            { name: 'Понедельник', nameshort: 'Пн', value: 'day1' },
            { name: 'Вторник', nameshort: 'Вт', value: 'day2' },
            { name: 'Среда', nameshort: 'Ср', value: 'day3' },
            { name: 'Четверг', nameshort: 'Чт', value: 'day4' },
            { name: 'Пятница', nameshort: 'Пт', value: 'day5' },
            { name: 'Суббота', nameshort: 'Сб', value: 'day6' },
            { name: 'Воскресенье', nameshort: 'Вс', value: 'day7' }
        ];
        this.eatMassAll = [];
        this.massForWeek = [];
        this.printver = false;
        this.modal = false;
        this.modalYes = false;
        this.listProdSort = [];
        this.auth = false;
        this.modaldays = [
            { name: 'Пн', value: 'day1' },
            { name: 'Вт', value: 'day2' },
            { name: 'Ср', value: 'day3' },
            { name: 'Чт', value: 'day4' },
            { name: 'Пт', value: 'day5' },
            { name: 'Сб', value: 'day6' },
            { name: 'Вс', value: 'day7' }
        ];
    }
    MenuComponent.prototype.getcarentday = function () {
        var carentday = (new Date().toLocaleString('ru-ru', { weekday: 'long' }));
        for (var i = 0; i < this.dayMass.length; i++) {
            if (this.dayMass[i].name.toLowerCase() === carentday) {
                this.activeweekday = this.dayMass[i].value;
            }
        }
    };
    MenuComponent.prototype.showConfigResponse = function () {
        var _this = this;
        this.userinfoservice.getWeekday(this.userId).subscribe(function (week) {
            _this.massForWeek = [];
            _this.eatMassAll = week;
            var _loop_1 = function (b) {
                var deyObj = {
                    day: _this.dayMass[b].name,
                    dayshort: _this.dayMass[b].nameshort,
                    dayvalue: _this.dayMass[b].value,
                    idcart: []
                };
                var _loop_2 = function (f) {
                    if (_this.eatMassAll[b] != -1) {
                        var id_1 = _this.eatMassAll[b][f];
                        _this.getJsonService.getCatItem(id_1).subscribe(function (cart) {
                            cart.Img = 'url(../../assets/eatimg/' + id_1 + '.jpg)';
                            cart.Comment = cart.Comment.split('\\n');
                            cart.Ingredients = cart.Ingredients.split('\\n');
                            for (var d = 0; d < cart.Ingredients.length; d++) {
                                cart.Ingredients[d] = cart.Ingredients[d].split('--');
                            }
                            // @ts-ignore
                            deyObj.idcart.push(cart);
                            // this.ref.detectChanges();
                        });
                    }
                };
                for (var f = 0; f < _this.eatMassAll[b].length; f++) {
                    _loop_2(f);
                }
                _this.massForWeek.push(deyObj);
            };
            for (var b = 0; b < _this.dayMass.length; b++) {
                _loop_1(b);
            }
        });
    };
    MenuComponent.prototype.logindetected = function () {
        this.userId = localStorage.getItem('at');
        if (this.userId) {
            this.showConfigResponse();
            this.auth = true;
        }
        else {
            this.auth = false;
            this.eatMassAll = [];
            this.massForWeek = [];
        }
    };
    MenuComponent.prototype.clearUserMenu = function () {
        this.eatMassAll = [];
        this.massForWeek = [];
        this.auth = false;
    };
    MenuComponent.prototype.removeCart = function (id, dayNum) {
        var _this = this;
        this.userinfoservice.loadCurrentUser().subscribe(function (user) {
            if (user) {
                _this.userId = user.uid;
                var dataToSave = {};
                _this.db.database.ref('/Users/' + _this.userId + '/mymenu/' + dayNum).once('value').then(function (day) {
                    var daylist = day.val();
                    var targetday = daylist.indexOf(id);
                    if (daylist.length == 1) {
                        daylist[0] = -1;
                        dataToSave[dayNum] = daylist;
                        _this.db.database.ref('Users/' + _this.userId + '/mymenu/').update(dataToSave);
                    }
                    else {
                        daylist.splice(targetday, 1);
                        dataToSave[dayNum] = daylist;
                        _this.db.database.ref('Users/' + _this.userId + '/mymenu/').update(dataToSave);
                    }
                });
            }
        });
    };
    MenuComponent.prototype.tabsweek = function (daynum) {
        if (daynum === 'day0') {
            var d = 'days';
            this.activeweekday = daynum;
            this.router.navigate(['menu/', d]);
        }
        else {
            this.activeweekday = daynum;
            this.weekOn = false;
            this.router.navigate(['menu/', daynum]);
        }
    };
    MenuComponent.prototype.ptintversion = function () {
        this.printver = !this.printver;
    };
    //модалка
    MenuComponent.prototype.addItemForDifferentrDay = function (dayNum) {
        this.userinfoservice.addItem(dayNum, this.addId);
        this.closemodal();
        this.activeweekday = dayNum;
    };
    MenuComponent.prototype.openmodal = function (id) {
        this.addId = id;
        this.modal = true;
    };
    MenuComponent.prototype.closemodal = function () {
        this.addId = null;
        this.modal = false;
    };
    MenuComponent.prototype.closemodalYes = function () {
        this.modalYes = false;
    };
    MenuComponent.prototype.openModalYes = function () {
        this.modalYes = true;
    };
    MenuComponent.prototype.clearALLMenu = function () {
        var _this = this;
        this.userinfoservice.loadCurrentUser().subscribe(function (user) {
            if (user) {
                _this.userId = user.uid;
                var dataToSave = {
                    day1: [-1],
                    day2: [-1],
                    day3: [-1],
                    day4: [-1],
                    day5: [-1],
                    day6: [-1],
                    day7: [-1]
                };
                _this.db.database.ref('Users/' + _this.userId + '/mymenu/').update(dataToSave);
                _this.closemodalYes();
            }
        });
    };
    MenuComponent.prototype.openListProd = function () {
        this.listProd = !this.listProd;
        this.weekProdList();
    };
    MenuComponent.prototype.weekProdList = function () {
        var timeProdlist = [];
        for (var i = 0; i < this.massForWeek.length; i++) {
            for (var j = 0; j < this.massForWeek[i].idcart.length; j++) {
                for (var k = 0; k < this.massForWeek[i].idcart[j].Ingredients.length; k++) {
                    var prod = { name: '', value: '' };
                    prod.name = this.massForWeek[i].idcart[j].Ingredients[k][0];
                    prod.value = this.massForWeek[i].idcart[j].Ingredients[k][1];
                    timeProdlist.push(prod);
                }
            }
        }
        this.listProdSort = this.sortAB(timeProdlist);
        console.log(this.listProdSort);
    };
    MenuComponent.prototype.sortAB = function (arr) {
        return arr.sort(function (a, b) {
            return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
        });
    };
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartparams = this.route.params;
        this.roureday = this.cartparams.value.day;
        if (this.roureday === 'days') {
            this.getcarentday();
            // this.showConfigResponse();
        }
        else {
            this.activeweekday = this.roureday;
        }
        this.logindetected();
        this.userinfoservice.$logoutNotifier.subscribe(function () {
            _this.clearUserMenu();
            _this.auth = false;
        });
        this.userinfoservice.$logintNotifier.subscribe(function () {
            _this.showConfigResponse();
            _this.auth = true;
        });
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        // this.ref.detach();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _userinfo_service__WEBPACK_IMPORTED_MODULE_2__["UserinfoService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"],
            _get_json_service__WEBPACK_IMPORTED_MODULE_1__["GetJsonService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/one-cart/one-cart.component.html":
/*!**************************************************!*\
  !*** ./src/app/one-cart/one-cart.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cart\" *ngIf=\"sortresult\">\n\n  <div class=\"cart__btns\">\n    <div class=\"cart__btn cart__btn_back\" (click)=\"backClicked()\"><i class=\"mdi mdi-arrow-left\"></i></div>\n    <a class=\"cart__btn cart__btn_add\" (click)=\"openmodal()\"><i class=\"mdi mdi-plus\"></i></a>\n  </div>\n\n  <div class=\"cart__left\">\n    <div class=\"cart__img\" [ngStyle]=\"{'background-image': sortresult.Img}\"></div>\n    <div class=\"cart__time\">{{sortresult.Time}} мин.</div>\n  </div>\n  <div class=\"cart__right\">\n    <div class=\"cart__title\">{{sortresult.Name}} </div>\n    <div class=\"cart__category\">\n      <div class=\"cart__category-value\">\n        {{sortresult.Category}}\n        {{sortresult.Id}}\n      </div>\n    </div>\n    <div class=\"cart__text\">\n      <div class=\"cart__text-title\">Приготовление: <span>{{sortresult.Time}} мин.</span></div>\n      <div class=\"cart__text-text\" *ngFor=\"let comm of sortresult.Comment\">\n        {{comm}}\n      </div>\n    </div>\n    <div class=\"cart__list\">\n      <div class=\"cart__text-title\">Ингредиенты</div>\n      <div class=\"cart__text-ing\" *ngFor=\"let product of sortresult.Ingredients\">\n        <div class=\"cart__text-ing-title\">{{product[0]}} </div>\n        <div class=\"cart__text-ing-value\">{{product[1]}} </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n\n\n<div class=\"cart__modal-wrap\" *ngIf=\"modal\">\n  <div class=\"cart__modal\">\n    <div class=\"cart__modal-close\" (click)=\"closemodal()\"><i class=\"mdi mdi-close\"></i></div>\n    <div class=\"cart__modal-title\">{{sortresult.Name}}</div>\n    <div class=\"cart__modal-text\">В какой день добавить блюдо?</div>\n\n    <div class=\"cart__modal-week\">\n      <div class=\"cart__modal-day\" *ngFor=\"let day of modaldays\" (click)=\"addMineMenu(day.value)\"\n        [routerLink]=\"['/menu', day.value]\">\n        {{day.name}}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/one-cart/one-cart.component.scss":
/*!**************************************************!*\
  !*** ./src/app/one-cart/one-cart.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/one-cart/one-cart.component.ts":
/*!************************************************!*\
  !*** ./src/app/one-cart/one-cart.component.ts ***!
  \************************************************/
/*! exports provided: OneCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneCartComponent", function() { return OneCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _get_json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-json.service */ "./src/app/get-json.service.ts");
/* harmony import */ var _userinfo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../userinfo.service */ "./src/app/userinfo.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {AngularFireDatabase} from 'angularfire2/database';
var OneCartComponent = /** @class */ (function () {
    function OneCartComponent(router, route, getJsonService, userinfoservice, location) {
        this.router = router;
        this.route = route;
        this.getJsonService = getJsonService;
        this.userinfoservice = userinfoservice;
        this.location = location;
        this.localtimeArr = [];
        this.modal = false;
        this.modaldays = [
            { name: 'Пн', value: 'day1' },
            { name: 'Вт', value: 'day2' },
            { name: 'Ср', value: 'day3' },
            { name: 'Чт', value: 'day4' },
            { name: 'Пт', value: 'day5' },
            { name: 'Сб', value: 'day6' },
            { name: 'Вс', value: 'day7' }
        ];
        this.idCartparams = this.route.params;
        this.idCart = this.idCartparams.value.id;
        this.showConfigResponse();
    }
    OneCartComponent.prototype.showConfigResponse = function () {
        var _this = this;
        this.getJsonService.getCatItem(this.idCart)
            .subscribe(function (resp1) {
            _this.eatMassAll = resp1;
            var image = 'url(../../assets/eatimg/' + _this.eatMassAll.Id + '.jpg)';
            _this.eatMassAll.Img = image;
            _this.eatMassAll.Comment = _this.eatMassAll.Comment.split('\\n');
            _this.eatMassAll.Ingredients = _this.eatMassAll.Ingredients.split('\\n');
            for (var d = 0; d < _this.eatMassAll.Ingredients.length; d++) {
                _this.eatMassAll.Ingredients[d] = _this.eatMassAll.Ingredients[d].split('--');
            }
            _this.sortresult = _this.eatMassAll;
        });
    };
    OneCartComponent.prototype.backClicked = function () {
        this.location.back();
    };
    OneCartComponent.prototype.addMineMenu = function (dayNum) {
        this.userinfoservice.addItem(dayNum, this.idCart);
    };
    OneCartComponent.prototype.openmodal = function () {
        this.modal = true;
    };
    OneCartComponent.prototype.closemodal = function () {
        this.modal = false;
    };
    OneCartComponent.prototype.ngOnInit = function () {
    };
    OneCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-one-cart',
            template: __webpack_require__(/*! ./one-cart.component.html */ "./src/app/one-cart/one-cart.component.html"),
            styles: [__webpack_require__(/*! ./one-cart.component.scss */ "./src/app/one-cart/one-cart.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _get_json_service__WEBPACK_IMPORTED_MODULE_2__["GetJsonService"],
            _userinfo_service__WEBPACK_IMPORTED_MODULE_3__["UserinfoService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], OneCartComponent);
    return OneCartComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: white; max-width: 1200px; margin: 0 auto; padding: 20px; border-radius: 20px;\">\n\n <div *ngFor=\"let item of testCat | async\">\n   <div>{{item}}</div>\n </div>\n\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/test/test.component.scss":
/*!******************************************!*\
  !*** ./src/app/test/test.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _testsercvice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testsercvice.service */ "./src/app/test/testsercvice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import functions from 'firebase';
var TestComponent = /** @class */ (function () {
    // public testCat = new Observable<any>;
    function TestComponent(db, testService) {
        this.testService = testService;
        this.week = [];
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/test/test.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _testsercvice_service__WEBPACK_IMPORTED_MODULE_2__["TestsercviceService"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/test/testsercvice.service.ts":
/*!**********************************************!*\
  !*** ./src/app/test/testsercvice.service.ts ***!
  \**********************************************/
/*! exports provided: TestsercviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsercviceService", function() { return TestsercviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestsercviceService = /** @class */ (function () {
    function TestsercviceService(db) {
        this.db = db;
        this.testCat = [];
    }
    TestsercviceService.prototype.getCart = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (obs) {
            var cautn = 1;
            _this.db.database.ref('catalog2').limitToFirst(6).on('child_added', function (snap) {
                // console.log(snap.val().Id);
                // console.log(cautn);
                // cautn = cautn + 1;
                _this.testCat.push(snap.val().Id);
                // console.log(this.testCat);
                obs.next(_this.testCat);
            });
        });
    };
    TestsercviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], TestsercviceService);
    return TestsercviceService;
}());



/***/ }),

/***/ "./src/app/userinfo.service.ts":
/*!*************************************!*\
  !*** ./src/app/userinfo.service.ts ***!
  \*************************************/
/*! exports provided: UserinfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserinfoService", function() { return UserinfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserinfoService = /** @class */ (function () {
    function UserinfoService(afAuth, db) {
        this.afAuth = afAuth;
        this.db = db;
        this.userId = '';
        this.authUser = false;
        this.logoutSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.logoinSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.$logoutNotifier = this.logoutSubject.asObservable();
        this.$logintNotifier = this.logoinSubject.asObservable();
    }
    UserinfoService.prototype.notifyAboutLogout = function () {
        this.logoutSubject.next();
    };
    UserinfoService.prototype.notifyAboutLoin = function () {
        this.logoinSubject.next();
    };
    UserinfoService.prototype.loadCurrentUserLight = function () {
        var _this = this;
        var at = localStorage.getItem('at');
        var ml = localStorage.getItem('ml');
        if (at) {
            this.authUser = true;
            this.userEmail = ml;
            this.userId = at;
            return this.authUser;
        }
        else {
            this.authUser = false;
            this.loadCurrentUser().subscribe(function (user) {
                if (user) {
                    _this.authUser = true;
                    _this.userEmail = user.email;
                }
                else {
                    console.log('не залогинен');
                    _this.authUser = false;
                }
            });
            return this.authUser;
        }
    };
    //проверка залогиненного user
    UserinfoService.prototype.loadCurrentUser = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (obs) {
            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(function (currentUser) {
                obs.next(currentUser);
            });
        });
    };
    UserinfoService.prototype.setNewUser = function (id, email) {
        this.db.database.ref('Users/' + id).set({
            useremail: email,
            mymenu: {
                day1: [-1],
                day2: [-1],
                day3: [-1],
                day4: [-1],
                day5: [-1],
                day6: [-1],
                day7: [-1]
            }
        });
    };
    //добавление рецепта в firebase
    UserinfoService.prototype.addItem = function (dayNum, id) {
        var _this = this;
        id = parseInt(id);
        this.loadCurrentUser().subscribe(function (user) {
            if (user) {
                _this.userId = user.uid;
                var dataToSave = {};
                _this.db.database.ref('/Users/' + _this.userId + '/mymenu/' + dayNum).once('value').then(function (day) {
                    var daylist = day.val();
                    var searcId = daylist.indexOf(id);
                    if (daylist[0] === -1) {
                        dataToSave[dayNum] = [id];
                        _this.db.database.ref('Users/' + _this.userId + '/mymenu/').update(dataToSave);
                        return;
                    }
                    if (searcId === -1) {
                        daylist.push(id);
                        dataToSave[dayNum] = daylist;
                        _this.db.database.ref('Users/' + _this.userId + '/mymenu/').update(dataToSave);
                    }
                });
            }
            else {
                return;
            }
        });
    };
    UserinfoService.prototype.getWeekday = function (user) {
        return this.db.list('/Users/' + user + /mymenu/).valueChanges();
    };
    UserinfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], UserinfoService);
    return UserinfoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD_dyB4Idnaj4A6gteyZBIxrr0X-YRvado",
        authDomain: "eatcatalog.firebaseapp.com",
        databaseURL: "https://eatcatalog.firebaseio.com",
        projectId: "eatcatalog",
        storageBucket: "eatcatalog.appspot.com",
        messagingSenderId: "1052703199186"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/romanarsenev/work/Eat/git/Eat-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map