function findMatching(array, str) {
  let res = array.filter(n => {
    return str.toLowerCase() === n.toLowerCase();
  });
  return res;
}

function fuzzyMatch(array, str) {
  let res = array.filter(n => {
    return str[0] === n[0];
  });
  return res;
}

function matchName(array, str) {
  let res = array.filter(n => {
    return n["name"] === str;
  });
  return res;
}
