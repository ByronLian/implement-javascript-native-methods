/* 
indexOf
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

@param {number | string} searchElement - Element to locate in the array.
@param {number} [fromIndex = 0] - The index to start the search at.
@return {number} index in array of searchElement.
*/

Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
  const _array = this;
  const _len = _array.length;

  if (fromIndex >= _len) return -1;

  let start = fromIndex;
  if (fromIndex < 0) {
    const _fromIndexOffset = _len - (0 - fromIndex);
    start = _fromIndexOffset > 0 ? _fromIndexOffset : 0;
  }

  for (let i = start; i < _len; i++) {
    if (_array[i] === searchElement) return i;
  }

  return -1;
};

/*
map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

callbackFn
Function that is called for every element of arr. 
Each time callbackFn executes, the returned value is added to newArray.

The callbackFn function accepts the following arguments:
  element
  The current element being processed in the array.

  index (Optional)
  The index of the current element being processed in the array.

  array (Optional)
  The array map was called upon.

thisArg (Optional)
Value to use as this when executing callbackFn.
*/

Array.prototype.myMap = function (callbackFn, thisArg = window) {
  const _array = this;
  const _len = _array.length;
  const newArray = [];

  for (let i = 0; i < _len; i++) {
    newArray.push(callbackFn.call(thisArg, _array[i], i, _array));
  }

  return newArray;
};

/*
filter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

callbackFn
Function is a predicate, to test each element of the array.
Return a value that coerces to true to keep the element, or to false otherwise.

It accepts three arguments:
  element
  The current element being processed in the array.

  index (Optional)
  The index of the current element being processed in the array.

  array (Optional)
  The array filter was called upon.

thisArg (Optional)
Value to use as this when executing callbackFn.
*/

Array.prototype.myFilter = function (callbackFn, thisArg = window) {
  const _array = this;
  const _len = _array.length;
  const newArray = [];

  for (let i = 0; i < _len; i++) {
    if (callbackFn.call(thisArg, _array[i], i, _array))
      newArray.push(_array[i]);
  }

  return newArray;
};

/*
slice
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

@param {number} [begin = 0] - Index of start.
@param {number} [end = array.length] - Index of stop copy but not include.
@return {array} Return a shallow copy of array.
*/

Array.prototype.mySlice = function (begin = 0, end = this.length) {
  const _array = this;
  const _len = _array.length;
  const newArray = [];

  // Out off array range
  if (begin > _len || 0 - end > _len) return [];

  let beginOffset = begin;
  if (begin < 0) {
    const offset = _len - (0 - begin);
    offset < 0 ? (beginOffset = 0) : (beginOffset = offset);
  }

  let endOffset = _len;
  if (end < 0) {
    endOffset = _len - (0 - end);
  } else {
    endOffset = end > _len ? _len : end;
  }

  // Not include the end index element
  for (let i = beginOffset; i < endOffset; i++) {
    newArray.push(_array[i]);
  }

  return newArray;
};

/*
every
*/

Array.prototype.myEvery = function (callbackFn, thisArg = window) {
  const _array = this;
  const _len = _array.length;

  for (let i = 0; i < _len; i++) {
    if (callbackFn.call(thisArg, _array[i], i, _array) === false) return false;
  }

  return true;
};

/*
fill

If start is negative, it is treated as array.length + start.
If end is negative, it is treated as array.length + end.
fill is intentionally generic: it does not require that its this value be an Array object.
fill is a mutator method: it will change the array itself and return it, not a copy of it.
If the first parameter is an object, each slot in the array will reference that object.
*/

Array.prototype.myFill = function (value, start = 0, end = this.length) {
  const _array = this;
  const _len = _array.length;

  if (start > _len) return _array;

  const startOffset = start < 0 ? start + _len : start;
  let endOffset = end < 0 ? end + _len : end;
  if (end > _len) endOffset = _len;

  for (let i = startOffset; i < endOffset; i++) {
    _array[i] = value;
  }

  return _array;
};
