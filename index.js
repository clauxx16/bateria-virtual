import "./platillodorado.js";
import "./hithatopen.js";
import "./tamborbase.js";
import "./tamborbombo.js";
import "./hithatclose.js";

const INSTRUMENTS = {
    A: document.querySelector("[type='crash']"),
    W: document.querySelector("[type='tom-low']"),
    S: document.querySelector("[type='tom-mid']"),
    D: document.querySelector("[type='kick']"),
    J: document.querySelector("[type='tom-high']"),
    I: document.querySelector("[type='snare']"),
    K: document.querySelector("[type='ride']"),
    L: document.querySelector("[type='hithatop']"),
    P: document.querySelector("[type='hithatcl']"),
};
const keys = Object.keys(INSTRUMENTS);

document.addEventListener("keydown", (ev) => {
  const key = ev.key.toUpperCase();
  keys.includes(key) && INSTRUMENTS[key].hit(); }
);