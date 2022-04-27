const learnMoreBtn = document.querySelector(
  '.legal-representation__anchor-learn'
);
const text = document.querySelector('.legal-representation__description-learn');

learnMoreBtn.addEventListener('click', (e) => {
  text.classList.toggle('legal-representation__show-more');
  if (learnMoreBtn.innerText === 'Learn More') {
    learnMoreBtn.innerText = 'Learn Less';
  } else {
    learnMoreBtn.innerText = 'Learn More';
  }
});

const readMoreBtn = document.querySelector('.process-page__anchor-read');
const textRead = document.querySelector('.process-page__read-paragraph');

readMoreBtn.addEventListener('click', (e) => {
  textRead.classList.toggle('process-page__show-more');
  if (readMoreBtn.innerText === 'Read More') {
    readMoreBtn.innerText = 'Read Less';
  } else {
    readMoreBtn.innerText = 'Read More';
  }
});
