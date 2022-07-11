// Instructions
// - Given the following 6 empty functions, add the right return statement to each of them to complete the activity
// Please do not change any of the function names

//This is your starting array
const arr = [10, 10, 16, 12];

function returnFirst(arr) {
  // return the first item from the array
  //console.log(arr[0]);
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  //console.log(arr[3]);
  return arr[3];
}

function getArrayLength(arr) {
  let largo = arr.length;
  //console.log(largo);
  return largo;
  // return the length of the array
}

function incrementByOne(arr) {
  // arr is an array of integers(numbers), Increment all items in the array by
   for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]+1;
      //  console.log(arr[i]);
    }
    //console.log(arr);
    return arr;
  // return the array
}

function addItemToArray(arr, item) {
  // add the parameter item to the end of the array arr
   let itempush = item;
   arr.push(itempush);
   //console.log(arr);
   return arr;
  // return the array
}

function addItemToFront(arr, item) {
  // add the parameter item to the front of the array arr
  // return the 
   arr.unshift(item);
   //console.log(arr);
   return arr;
  // hint: use the array method .unshift
}

//uncomment these lines to check results in browser console
console.log("returnFirst result:" + returnFirst(arr))
console.log("returnLast result:" + returnLast(arr))
console.log("getArrayLength result:" + getArrayLength(arr))
console.log("incrementByOne result:" + incrementByOne(arr))
console.log("addItemToArray result:" + addItemToArray(arr, 10))
console.log("addItemToFront result:" + addItemToFront(arr, 10))

//////////////////////////////////
//don't change this line
if (typeof module !== 'undefined') {
  module.exports = {
    returnFirst,
    returnLast,
    getArrayLength,
    incrementByOne,
    addItemToArray,
    addItemToFront,
  };
}
