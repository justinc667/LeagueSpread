function myFunction() {
  console.log('hello world')
}
function fetchfun() {
// The code below logs the HTML code of the Google home page.
var response = UrlFetchApp.fetch("https://u.gg/lol/champions/aatrox/counter");
const body = response.getContentText();
// console.log('body?', typeof body);
const data = stripfribbage(body);
const info = JSON.parse(data)
Logger.log(info);
}

function stripfribbage (str) {
//  const str = 'fribbage SSR_DATA good stuff APOLLO_STATE fribbage';

const parts = str.split('SSR_DATA__ = ');
// console.log(parts[1]);
// expected output: "fox"
const parts2 = parts[1].split('window.__APOLLO_STATE')
// console.log(parts2[0]);
return parts2[0]
}
