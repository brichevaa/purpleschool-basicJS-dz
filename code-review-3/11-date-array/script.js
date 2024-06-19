const array = [
   '10-02-2022',
   'тест',
   '02/29/2000',
   '02/29/2001',
   '04/30/2022',
   '12/06/2023',
   '31-04-2022',
   '12.13.2022',
   '00.13/2022',
   '41.12',
   '0.13.22',
   '06-06-1992',
   'test-ttt-true',
];

const getLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

function getDates(array) {
   const result = array
      .map((el) => {
         if (el.length < 10) {
            return el;
         }
         if (el.includes('-')) {
            const test = el.split('-');
            return test;
         }
         if (el.includes('/')) {
            const test = el.split('/');
            let [month, day, year] = test;
            let res = [];
            res.push(day, month, year);
            return res;
         }
         if (el.includes('.')) {
            return el.split('.');
         }
      })
      .filter((el) => {
         let [day, month, year] = el;
         switch (month) {
            case '02':
               if (getLeapYear(year) && day <= 29) {
                  return true;
               } else if (!getLeapYear(year) && day <= 28) {
                  return true;
               } else {
                  return false;
               }
            case '04':
            case '06':
            case '09':
            case '11':
               if (day <= 30 && day > 0 && day.length === 2) {
                  return true;
               } else {
                  return false;
               }
            case '01':
            case '03':
            case '05':
            case '07':
            case '08':
            case '10':
            case '12':
               if (day <= 31 && day > 0 && day.length === 2) {
                  return true;
               } else {
                  return false;
               }
         }
      })
      .map((el) => {
         return el.join('-');
      });
   return result;
}

console.log(getDates(array));

// Вариант решения наставника

// const inputDates = [
//     '10-02-2022',
//     'тест',
//     '02/29/2000',
//     '02/29/2001',
//     '04/30/2022',
//     '12/06/2023',
//     '31-04-2022',
//     '12.13.2022',
//     '00.13/2022',
//     '41.12',
//     '0.13.22',
//     '06-06-1992',
//     'test-ttt-true',
// ];

// function getDates(array, fn) {
//     return array.map(stringToArray).filter(fn).sort(sortDatePattern).map(formatDate);
// }

// function formatDate(array) {
//     return array.map((x, i) => (i === 2 ? x.padStart('0', 4) : x.padStart('0', 2))).join('-');
// }

// function sortDatePattern(a, b) {
//     let day, month, year;

//     [day, month, year] = a;
//     const dt1 = new Date(year, month - 1, day).getTime();

//     [day, month, year] = b;
//     const dt2 = new Date(year, month - 1, day).getTime();

//     return dt1 - dt2;
// }

// function stringToArray(str) {
//     let day, month, year;
//     if (str.includes('/')) {
//         [month, day, year] = str.split('/');
//     } else if (str.includes('-')) {
//         [day, month, year] = str.split('-');
//     }
//     if (!year || isNaN(day) || isNaN(month) || isNaN(year)) {
//         return null;
//     }
//     return [day, month, year];
// }

// function checkCorrectDate(array) {
//     if (array === null) {
//         return false;
//     }

//     [day, month, year] = array.map(Number);

//     const LONG_MONTH_ARRAY = [1, 3, 5, 7, 8, 10, 12];

//     const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

//     // check month
//     if (month < 1 || month > 12 || year <= 0) {
//         return false;
//     }

//     // check day
//     if (day < 1 || day > 31) {
//         return false;
//     }

//     if (day === 31 && !LONG_MONTH_ARRAY.includes(month)) {
//         return false;
//     }

//     // check February for correct day and leap year
//    if (month === 2 && ((day === 29 && !isLeapYear) || day > 29)) {
//         return false;
//     }
//     return true;
// }

// const res = getDates(inputDates, checkCorrectDate);
// console.log(inputDates);
// console.log(res);
