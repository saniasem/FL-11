function getNumbers(numString) {
  let arr = numString.split('');
  return arr.map(num => parseInt(num)).filter(item => parseInt(item));
}

function findTypes(...args) {
  let obj = {};
  args.forEach(item => {
    let type = typeof item;
    obj[type] = !obj.hasOwnProperty(type) ? 1 : obj[type] + 1;
  });
  return obj;
}

function executeforEach(arr, f) {
  return arr.forEach(el => f(el));
}

function mapArray(arr, f) {
  return arr.map(item => f(item));
}

function filterArray(arr, f) {
  return arr.filter(el => f(el));
}

function showFormattedDate(date) {
  let formatDate = date.toLocaleDateString('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).split(' ').join(' ').replace(',', '');
  return `Date: ${formatDate}`;
}

function canConvertToDate(date) {
  return !!Date.parse(date);
}

function daysBetween(dayFirst, daySecond) {
  let a = 1000;
  let b = 60;
  let c = 24;
  return Math.round((daySecond - dayFirst) / (a * b * b * c));
}

function getAmountOfAdultPeople(data) {
  const ageOfAdult = 18;
  const year = 365;
  let age = data.map(item => {
    let days = daysBetween(new Date(item['birthday']), new Date());
    return Math.floor(days / year);
  });
  let result = filterArray(age, (el) => el > ageOfAdult);

  return result.length;
}

function keys(obj) {
  return Object.keys(obj);
}

function values(obj) {
  return Object.values(obj)
}
