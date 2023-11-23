"use strict";

const input = document.getElementById("bill");
const sliders = document.querySelectorAll("input[type='range']");

sliders.forEach((slider) => {
  slider.addEventListener("input", calcTip);
});

function calcTip() {
  let bill = parseFloat(input.value);
  let tip = parseFloat(document.getElementById("tip-value").value);
  let people = parseFloat(document.getElementById("people").value);

  let totalTip = parseFloat((bill * (tip / 100)).toFixed(2));
  let total = parseFloat((bill + totalTip).toFixed(2));

  let tipPerson = (totalTip / people).toFixed(2);
  let totalPerson = (total / people).toFixed(2);

  document.querySelector(".tip-per-person").textContent = tipPerson;
  document.querySelector(".total-per-person").textContent = totalPerson;

  document.querySelector(".tip-span").textContent = tip;
  document.querySelector(".people-span").textContent = people;
}

input.addEventListener("input", calcTip);
