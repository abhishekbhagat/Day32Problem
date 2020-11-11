var year = process.argv[2];
console.log(year);
function checkLeapYearOrNot(year) {
  if (((year % 4 == 0) && (year % 100 != 0)) ||
    (year % 400 == 0))
    return true;
  else
    return false;
}
console.log(checkLeapYearOrNot(year));