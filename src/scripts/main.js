'use strict';

// write your code here
const populationElements = document.querySelectorAll('.population');

const populations = [...populationElements].map((el) => {
  const text = el.textContent.replace(/,/g, '');

  return Number(text);
});

const totalPopulation = populations.reduce((pre, current) => pre + current, 0);

const avgPopulation = Math.round(totalPopulation / populations.length);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString();

document.querySelector('.average-population').textContent =
  avgPopulation.toLocaleString();
