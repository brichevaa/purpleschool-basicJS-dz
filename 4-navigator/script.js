const addressLat = 10;
const addressLong = 13;
const positionLat = 4;
const positionLong = 3;

const result = (addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2;
console.log(Math.sqrt(result));
