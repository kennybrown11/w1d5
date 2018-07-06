var numList = [];

dataSort = function(arr) {
  arr.sort(function(a, b) {
      return a - b;
  })
  return arr;
}

module.exports = {

  makelist: function(num) {
    numList.push(num);
    if (numList.length > 1) {
      return dataSort(numList);
    };
    return numList;
  }
};