/* 
arr.indexOf(searchElement[, fromIndex])
MDN doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

searchElement
Element to locate in the array.

fromIndex (Optional)
The index to start the search at.
If the index is greater than or equal to the array's length, -1 is returned,
which means the array will not be searched.
If the provided index value is a negative number, it is taken as the offset from the end of the array.
Note: if the provided index is negative, the array is still searched from front to back.
If the provided index is 0, then the whole array will be searched.
 Default: 0 (entire array is searched).
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