import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('.feedback-form textarea');
const inputRef = document.querySelector('.feedback-form input');
const formData = {};

const STORAGE_KEY = 'feedback-form-state';

const onFormSubmit = event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

const onInput = event => {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onInput, 500));

const populateTextarea = () => {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    const state = JSON.parse(savedMessage);
    inputRef.value = state.email;
    textareaRef.value = state.message;
  }
};
populateTextarea();
