//可以吃吗
var canEatWho = function (eatListOrObj, who) {
  if(Object.prototype.toString.call(eatListOrObj) === '[object Array]') {
    for(let i = 0, len = eatListOrObj.length; i < len; i++) {
      if(eatListOrObj[i] === who) {
        return true;
      }
    }
  }
  return eatListOrObj === who;
}

//获取关系
var getEatRelationStr = function (a, b) {
  return a + " eats " + b;
}

var whoEatsWho = function(zoo) {
  console.log(zoo);
  let result = [zoo];

  let eatMap = {
    "antelope": "grass",
    "big-fish": "little-fish",
    "bug": "leaves",
    "bear": ["big-fish", "bug", "chicken", "cow", "leaves", "sheep"],
    "chicken": "bug",
    "cow": "grass",
    "fox": ["chicken", "sheep"],
    "giraffe": "leaves",
    "antelope": "grass",
    "lion": ["antelope", "cow"],
    "panda": "leaves",
    "sheep": "grass",
  };

  let zoos = zoo.split(","), currentZoo, leftZoo, rightZoo, leftZooIndex, rightZooIndex, moveLeft;

  for(let i = 0, len = zoos.length; i < len; i++) {
    currentZoo = zoos[i];
    if(!currentZoo) {
      continue;
    }
    leftZooIndex = i - 1;
    leftZoo = zoos[leftZooIndex];
    while(leftZoo && canEatWho(eatMap[currentZoo], leftZoo)) {
      result.push(getEatRelationStr(currentZoo, leftZoo));
      zoos.splice(leftZooIndex, 1)
      len=zoos.length;
      leftZooIndex = i - 2;
      leftZoo = zoos[leftZooIndex];
      i = i - 1;
      moveLeft = true;
    }

    //往上一个
    if(moveLeft) {
      i = i - 1;
      currentZoo = zoos[i];
      moveLeft = false;
    }
    rightZooIndex = i + 1;
    rightZoo = zoos[rightZooIndex];


    while(rightZoo && canEatWho(eatMap[currentZoo], rightZoo)) {
      result.push(getEatRelationStr(currentZoo, rightZoo));
      zoos.splice(rightZooIndex, 1)
      len=zoos.length;

      rightZooIndex = i + 1;
      rightZoo = zoos[rightZooIndex];
    }
  }
  result.push(zoos.join(","));

  return result;
}

console.log(whoEatsWho("bear,grass,grass,grass,grass,sheep,bug,chicken,little-fish,little-fish,little-fish,little-fish,big-fish,big-fish,big-fish"));
