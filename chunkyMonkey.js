function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)