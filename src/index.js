const survey = document.querySelector('#survey');
const form = survey.querySelector('form');
const confirmation = document.querySelector('#confirmation');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const score = formData.get('score');
  const response = document.querySelector('.response');

  survey.classList.add('is-hidden');
  confirmation.classList.remove('is-hidden');
  response.innerText = `You selected ${score} out of 5`;
});
