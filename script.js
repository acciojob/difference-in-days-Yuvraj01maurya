var dateDiffInDays = function (date1, date2) {
  //   write your code here
  function dateDiffInDays(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

  const utc1 = Date.UTC(
    parseInt(date1.substring(0, 4)), // Year
    parseInt(date1.substring(5, 7)) - 1, // Month (zero-based)
    parseInt(date1.substring(8, 10)) // Day
  );

  const utc2 = Date.UTC(
    parseInt(date2.substring(0, 4)), // Year
    parseInt(date2.substring(5, 7)) - 1, // Month (zero-based)
    parseInt(date2.substring(8, 10)) // Day
  );

  const diffDays = Math.floor((utc2 - utc1) / oneDay);
  return diffDays;
}

// Examples
console.log(dateDiffInDays("2022-03-01", "2022-03-15")); // Output: 14
console.log(dateDiffInDays("2022-03-01", "2022-03-01")); // Output: 0
console.log(dateDiffInDays("2022-03-15", "2022-03-01")); // Output: -14

};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));






