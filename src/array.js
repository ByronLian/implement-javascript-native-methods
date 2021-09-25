/* 
arr.indexOf(searchElement[, fromIndex])
MDN doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

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
    if (callbackFn.call(thisArg, _array[i], i, _array)) newArray.push(_array[i]);
  }
  return newArray;
};