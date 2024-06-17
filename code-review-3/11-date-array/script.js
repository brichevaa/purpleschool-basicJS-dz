const array = [
   '10-02-2022',
   'тест',
   '02/29/2000',
   '02/28/2000',
   '02/29/2001',
   '02/28/2001',
   '00/13/2022',
   '41/12/2023',
   '10/32/2023',
   '12/06/2023',
   '0.13.22',
   '41.12',
   '10-01-2022',
   '12.13.2022',
   '00.13/2022',
];
function getDate(arr) {
   const filteredArr = arr.filter((el) => el.length == 10);
   console.log(filteredArr);

   const result = [];

   // проверка на високосность года
   const getLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

   for (let i = 0; i < filteredArr.length; i++) {
      if (filteredArr[i].includes('/')) {
         const innerElement = filteredArr[i].split('/');
         let [month, day, year] = innerElement;
         if (getLeapYear(year) && month === '02' && day <= 29) {
            let arr = [];
            arr.push(day, month, year);
            result.push(arr.join('-'));
         } else if (
            !getLeapYear(year) &&
            month === '02' &&
            day <= 28 &&
            day > 0 &&
            day.length === 2 &&
            month.length === 2 &&
            month <= 12 &&
            month > 0
         ) {
            let arr = [];
            arr.push(day, month, year);
            result.push(arr.join('-'));
         } else if (
            !getLeapYear(year) &&
            month !== '02' &&
            day <= 31 &&
            day > 0 &&
            day.length === 2 &&
            month.length === 2 &&
            month <= 12 &&
            month > 0
         ) {
            let arr = [];
            arr.push(day, month, year);
            result.push(arr.join('-'));
         }
      } else if (filteredArr[i].includes('-')) {
         const innerElement = filteredArr[i].split('-');
         const [day, month, year] = innerElement;
         if (day > 0 && day <= 31 && day.length === 2 && month <= 12 && month > 0) {
            let arr = [];
            arr.push(day, month, year);
            result.push(arr.join('-'));
         }
      }
   }
   return result;
}
console.log(getDate(array));
