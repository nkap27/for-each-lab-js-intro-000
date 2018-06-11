function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(array, forEach){
  array.forEach(element, index, array) => {
    forEach();
  };
  return array;
}
