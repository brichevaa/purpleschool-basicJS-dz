function arrayClean(arr, deleteArg) {
   const arrayFilter = [];
   for (let i = 0; i < arr.length; i++) {
      if (!deleteArg(arr[i])) {
         arrayFilter.push(arr[i]);
      }
   }
   return arrayFilter;
}

function deleteArg(num) {
   if (num > 5) {
      return true;
   } else {
      return false;
   }
}
const test = [-7, 4, 9, 2, 3, 6];
const test2 = [3, 6, 9, 2];
const result = arrayClean(test2, deleteArg);
console.log(result);
