const colors = [
  "#FFd2E1",
  "#DAFBF8",
  "#DADDFB",
  "#FFFCDD",
  "#DAEDFB"
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const postHeader = document.getElementById("post-header-image")
const headerStyles = postHeader.getAttribute("style");
postHeader.setAttribute("style", `background-color: ${colors[getRandomInt(5)]}; ${headerStyles}`)
