const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const button = document.querySelector('button');
  const results = document.querySelector('#results');

  button.addEventListener('click', (e) => {
    if (height <= 0 || height == '' || isNaN(height)) {
      results.innerHTML = 'Not a valid Number !!';
    } else if (weight <= 0 || weight == '' || isNaN(weight)) {
      results.innerHTML = 'Not a valid Number !!';
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      results.innerHTML = `<span>${bmi}</span>`
    }
  });
});
