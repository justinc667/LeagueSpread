function fetchfun() {
// The code below logs the HTML code of the Google home page.
var response = UrlFetchApp.fetch("https://u.gg/lol/champions/aatrox/counter");
Logger.log(response.getContentText());
}
