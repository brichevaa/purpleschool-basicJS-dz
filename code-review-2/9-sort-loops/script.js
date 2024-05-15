const arr = [1, 40, -5, 10, 0];

function sortArray(array, desc = false) {
   for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
         const isExchange = desc ? array[i] > array[j] : array[i] < array[j];
         if (isExchange) {
            [array[i], array[j]] = [array[j], array[i]];
         }
      }
   }
   return array;
}

console.log(arr);
console.log(sortArray(arr));
console.log(arr);
console.log(sortArray(arr, true));
console.log(arr);
