const arr = [1, 40, -5, 10, 0];

function sortArray(array, desc = false) {
   const array2 = [...array]; // копируем массив
   console.log(array2);
   for (let i = 0; i < array2.length; i++) {
      for (let j = i + 1; j < array2.length; j++) {
         const isExchange = desc ? array2[i] > array2[j] : array2[i] < array2[j];
         if (isExchange) {
            [array2[i], array2[j]] = [array2[j], array2[i]];
         }
      }
   }
   return array2;
}

console.log(arr);
console.log(sortArray(arr));
console.log(arr);
console.log(sortArray(arr, true));
console.log(arr);
