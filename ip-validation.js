function isValidIP(str) {
  let arr = str.split("."), result = true;
  let reg = /^[1-9][0-9]*$/;//校验数字

  if(arr.length !== 4) {//校验是否是4位
    return false;
  }
  arr.forEach(function (item) {
    if(item != 0) {//？
      if(!reg.test(item)) {//必须是数字，而且不能是0开头
        result = false;
      }
      if(item<0 || item>255) {//数字必须限制在这个区间
        result = false;
      }
    }
  });
  return result;
}

// console.log("20".indexOf('0'))

 console.log(isValidIP("1.1.1.0"));