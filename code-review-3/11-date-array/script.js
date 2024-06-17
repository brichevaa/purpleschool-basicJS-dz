const array = [
   '10-02-2022', // попадает
   'тест', // НЕ попадает
   '02/29/2000', // попадает
   '02/29/2001', // НЕ попадает
   '00/13/2022', // НЕ попадает
   '41/12/2023', // НЕ попадает
   '04/31/2023', // НЕ попадает
   '04/30/2022', // попадает
   '12/06/2023', // попадает
   '31-04-2022', // НЕ попадает
   '0.13.22', // НЕ попадает
   '41.12', // НЕ попадает
   '10-01-2022', // попадает
   '12.13.2022', // НЕ попадает
   '12.12.2022', // попадает
   '00.13/2022', // НЕ попадает
];
function getDate(arr) {
   const filteredArr = arr.filter((el) => el.length === 10);
   console.log(filteredArr);

   const result = [];

   // проверка на високосность года
   const getLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

   for (let i = 0; i < filteredArr.length; i++) {
      function f1(month, day, year) {
         switch (month) {
            case '02':
               if (getLeapYear(year) && day <= 29) {
                  let arr = [];
                  arr.push(day, month, year);
                  result.push(arr.join('-'));
               } else if (!getLeapYear(year) && day <= 28) {
                  let arr = [];
                  arr.push(day, month, year);
                  result.push(arr.join('-'));
               }
               break;
            case '04':
            case '06':
            case '09':
            case '11':
               if (day <= 30 && day > 0 && day.length === 2) {
                  let arr = [];
                  arr.push(day, month, year);
                  result.push(arr.join('-'));
               }
               break;
            case '01':
            case '03':
            case '05':
            case '07':
            case '08':
            case '10':
            case '12':
               if (day <= 31 && day > 0 && day.length === 2) {
                  let arr = [];
                  arr.push(day, month, year);
                  result.push(arr.join('-'));
               }
               break;
         }
      }
      if (filteredArr[i].includes('/')) {
         const innerElement = filteredArr[i].split('/');
         let [month, day, year] = innerElement;
         f1(month, day, year);
      } else if (filteredArr[i].includes('-')) {
         const innerElement = filteredArr[i].split('-');
         let [day, month, year] = innerElement;
         f1(month, day, year);
      } else if (filteredArr[i].includes('.')) {
         const innerElement = filteredArr[i].split('.');
         let [day, month, year] = innerElement;
         f1(month, day, year);
      }
   }
   return result;
}
console.log(getDate(array));
