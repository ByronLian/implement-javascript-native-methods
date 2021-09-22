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
  const _array = [...this];
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
