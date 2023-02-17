const addButton = document.querySelector('.btn');
const emailInput = document.querySelector('#add');
const errorDiv = document.querySelector('.error');
const emailPara = document.querySelector('.email-para');

addButton.addEventListener('click', () => {
  const email = emailInput.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    errorDiv.style.display = 'block';
    emailPara.style.display = 'block';
  } else {
    emailInput.style.borderColor = '';
    errorDiv.style.display = 'none';
    emailPara.style.display = 'none';
  }
});

emailInput.addEventListener('input', () => {
  errorDiv.style.display = 'none';
  emailPara.style.display = 'none';
});
