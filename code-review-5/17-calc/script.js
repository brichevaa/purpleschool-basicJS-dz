'use strict';

let out = document.querySelector('.out span');
const action = ['+', '-', 'X', '/'];

function calculation(event) {
   let firstNumber = document.querySelector('.num-one');
   let secondNumber = document.querySelector('.num-two');

   if (!event.target.classList.contains('button')) return;

   const valueOfButton = event.target.textContent;

   let a = '';
   switch (valueOfButton) {
      case '+':
         a = +firstNumber.value + +secondNumber.value;
         break;
      case '-':
         a = firstNumber.value - secondNumber.value;
         break;

      case 'X':
         a = firstNumber.value * secondNumber.value;
         break;

      case '/':
         if (secondNumber.value === '0') {
            a = 'Ошибка';
         } else if (secondNumber.value > 0) {
            a = firstNumber.value / secondNumber.value;
         }
         break;
      case 'AC':
         firstNumber.value = '';
         secondNumber.value = '';
         a = 0;
         break;
   }
   out.textContent = a;
}

document.querySelector('.buttons').addEventListener('click', calculation);
