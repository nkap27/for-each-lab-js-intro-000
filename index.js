function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(array, forEach){
  array.forEach(forEach);
  return array;
}
