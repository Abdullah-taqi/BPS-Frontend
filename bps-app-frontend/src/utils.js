import { csvParse } from "d3-dsv";
import { timeParse } from "d3-time-format";


function parseData(parse) {

  setTimeout(() => {  console.log(""); }, 5000);
  return function(d) {
    d.date = parse(d.date);
    d.open = +d.open;
    d.high = +d.high;
    d.low = +d.low;
    d.close = +d.close;
    d.volume = +d.volume;
    return d;
  };
}

// const parseDate = timeParse("%H:%M:%S");

const parseDate = timeParse("%Y-%m-%d");

export function getData() {
  const promiseMSFT = fetch("./MSFT.csv")
  // const promiseMSFT = fetch("./one_min_data.csv")
    .then(response => response.text())
    .then(data => csvParse(data, parseData(parseDate)));
  return promiseMSFT;
}

