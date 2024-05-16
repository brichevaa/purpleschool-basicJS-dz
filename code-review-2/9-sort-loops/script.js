const numbers = [1, 40, -5, 10, 0];

function orderTemplate(firstNumber, secondNumber, desc) {
   if (!desc) {
      return firstNumber > secondNumber;
   }
   return firstNumber < secondNumber;
}

function sortArray(incomingArray, desc = false) {
   const array = [...incomingArray];
   for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
         const isExchange = orderTemplate(array[i], array[j], desc);
         if (isExchange) {
            [array[i], array[j]] = [array[j], array[i]];
         }
      }
   }
   return array;
}

console.log(numbers);
console.log('Отсортированный по возрастанию массив:', sortArray(numbers));
console.log('Отсортированный по убыванию массив:', sortArray(numbers, true));
