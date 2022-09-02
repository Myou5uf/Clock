import "./scss/style.scss";
import Time from "./Time.js";

const requestURL = "./timezones.json";
const clocksWrapper = document.querySelector(".clocks");



const day1 = new Time(clocksWrapper, requestURL); // eslint-disable-line no-unused-vars
const day2 = new Time(clocksWrapper, requestURL); // eslint-disable-line no-unused-vars
