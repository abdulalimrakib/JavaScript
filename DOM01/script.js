const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }

    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }

    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }

    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});