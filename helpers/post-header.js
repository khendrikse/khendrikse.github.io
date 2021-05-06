const colors = ['#FFd2E1', '#DAFBF8', '#DADDFB', '#FFFCDD', '#DAEDFB'];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default colors[getRandomInt(5)];
