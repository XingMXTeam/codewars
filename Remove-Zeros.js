function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc

  // the correctly sorted array should be returned.
  console.log(array);

  var moveArray = function(array, index, moveElem) {
    for(var i = index; i < array.length - 1; i++) {
      array[i] = array[i+1];
    }
    array[array.length - 1] = moveElem;
  };

  var moveCount = 0;
  for(var i = 0; i < array.length;) {
    if(array[i] == 0 && i + moveCount < array.length - 1) {//必须检查是否是到移动的元素了
      moveArray(array, i, array[i]);
      moveCount++;
    }else {//如果移动了数组，不需要移动当前索引
      i++;
    }
  }

  return array;
}

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));
