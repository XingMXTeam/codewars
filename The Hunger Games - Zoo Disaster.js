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

var getEatRelationStr = function (a, b) {
  return a + " eats " + b;
}

var removeEated = function (zoos, eated) {
  return zoos.splice(zoos.indexOf(eated), 1);
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

  let zoos = zoo.split(","), currentZoo, leftZoo, rightZoo;

  for(let i = 0, len = zoos.length; i < len; i++) {
    currentZoo = zoos[i];
    if(!currentZoo) {
      continue;
    }
    leftZoo = zoos[i-1];
    rightZoo = zoos[i+1];

    if(leftZoo && canEatWho(eatMap[currentZoo], leftZoo)) {
      result.push(getEatRelationStr(currentZoo, leftZoo));
      removeEated(zoos, leftZoo);
      i=i-3;
      len=zoos.length;
    }

    while(rightZoo && canEatWho(eatMap[currentZoo], rightZoo)) {
      result.push(getEatRelationStr(currentZoo, rightZoo));
      removeEated(zoos, rightZoo);
      len=zoos.length;
      rightZoo = zoos[i+1];
    }

  }
  result.push(zoos.join(","));

  return result;
}

console.log(whoEatsWho("leaves,bicycle,little-fish,bear,big-fish,leaves"));

// leaves,bicycle,little-fish,bear,leaves