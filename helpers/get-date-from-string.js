const getDateFromString = stringWithDate =>
  stringWithDate.match(/(\d{1,4}([.\--])\d{1,2}([.\--])\d{1,4})/g);

module.exports = getDateFromString;
