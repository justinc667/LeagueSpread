function myFunction() {
  console.log('hello world')
}
function fetchCounters(row) {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  let range = sheet.getRange(row,2);
  let name = range.getValue();
        // https://developers.google.com/apps-script/reference/spreadsheet/range
        // but by row / column number
        // or learn to convert the number 2 in to the string 'B2'
// The code below logs the HTML code of the Google home page.
var response = UrlFetchApp.fetch(`https://u.gg/lol/champions/${name}/counter`);
const body = response.getContentText();
// console.log('body?', typeof body);
const data = stripfribbage(body);
const info = JSON.parse(data)
info.name = name
//Logger.log(info);
return info
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

function isBlank(row) {
  
  //get the contents of column 2 of this row
  //test whether there is anything in it
  //return the results
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  let range = sheet.getRange(row,2);
  let contents = range.getValue();
  let empty = contents.length === 0
  Logger.log(empty)
  return empty


  range.activate();
}
function doEverything() {
  let row = 2;
  while (!isBlank(row)) {    
    // 1: Fetch u.gg counters page for cell B2 champion name (Aatrox)
    const championCounters = fetchCounters(row)
    console.log(championCounters.name); // expect Aatrox

    // 2: List champions horizontally starting in cell H2 in the "best picks vs X champion" section
    // from greatest winrate to lowest. Lowest acceptable winrate is 51%.
    // Any listed counter from "best picks vs X champ" must have at least 200 games played
    listOpponentChampions(row, championCounters);

    // 3: After listing each counter within the parameters, go to the u.gg counters page of the next champ on "Champion cast" spreadsheet
    row = row + 1;
    // Repeat actions listed in 2
  }
}
