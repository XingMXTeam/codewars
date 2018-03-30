function sumOfDivided(lst) {
  console.log(lst);
  let cache = {};//用来保存和质因子有关系的数

  //是否是质子
  let isPrimer = function (num) {
    if(num === 2) {
      return true;
    }
    let result = true;
    for(var i = 2; i < num; i++) {
      if(num % i === 0) {
        result = false;
      }
    }
    return result;
  }

  //找到所有的质因子
  var allPrimer = [];
  lst.forEach(function (t) {
      var originT = t;
      if(t<0) {
        t = -t;
      }
      for(var i = 2; i <= t; i++) {
        if(t % i === 0) {//是因子
          if(isPrimer(i)) {//是质子
            if(allPrimer.indexOf(i) === -1) {
              allPrimer.push(i);
            }

            if(!cache[i]) {
              cache[i] = [];
            }
            cache[i].push(originT);
          }
        }
      }
  });

  //计算数组和
  var sum = function (arr) {
    let result  = 0;
    for(var i = 0; i<arr.length;  i++) {
      result += arr[i];
    }
    return result;
  }

  //从小到大排序
  allPrimer.sort(function (a, b) {
    return a - b;
  });

  //计算所有和质因子有关的数的和
  var result = [];
  for(var j = 0; j < allPrimer.length; j++) {
    result.push([allPrimer[j], sum(cache[allPrimer[j]])]);
  }

  return result;
}

console.log(sumOfDivided([15, 21, 24, 30, -45]))