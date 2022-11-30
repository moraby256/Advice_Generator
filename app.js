let button = document.querySelector(`.btn`);
let ourData = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      let id = document.querySelector(`.id`);
      let quote = document.querySelector(`.quote`);
      id.innerHTML = `#${data.slip.id}`;
      quote.innerHTML = data.slip.advice;
    });
};
ourData();
button.onclick = () => ourData();
