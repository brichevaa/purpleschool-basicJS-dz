const arr = [1, 40, -5, 10, 0];
const parameterOfSort = true;

function sortArray(array, parameterOfSort) {
   if (parameterOfSort) {
      for (let i = 0; i < array.length; i++) {
         for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
               const save = array[j];
               array[j] = array[j + 1];
               array[j + 1] = save;
            }
         }
      }
      return array;
   } else {
      for (let i = array.length; i > 0; i--) {
         for (let j = 0; j < array.length - 1; j++) {
            if (array[j] < array[j + 1]) {
               const save = array[j];
               array[j] = array[j + 1];
               array[j + 1] = save;
            }
         }
      }
      return array;
   }
}

console.log(sortArray(arr, false));
