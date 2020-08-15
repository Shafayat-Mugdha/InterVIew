Array.prototype.getLength = function() {
  var sum = 0;
  function getMultiLength(array) {
    for (count = 0; count < array.length; count ++) {
      sum ++;
        if (array[count].length) {
		getMultiLength(array[count]);
}
 	else sum++;
      }
  }
  getMultiLength(this.valueOf());
  return sum;
};