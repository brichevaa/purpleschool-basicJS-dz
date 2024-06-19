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
