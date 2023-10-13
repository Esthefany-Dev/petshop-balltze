const cards = document.querySelectorAll('.card-higiene');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentIndex = 0;
const cardsPerPage = 4;
const autoSlideInterval = 3500;

function showCards() {
  for (let i = 0; i < cards.length; i++) {
    if (i >= currentIndex && i < currentIndex + cardsPerPage) {
      cards[i].style.display = 'block';
      cards[i].classList.remove('card-exit');
      cards[i].classList.add('card-enter');
    } else {
      cards[i].style.display = 'none';
      cards[i].classList.remove('card-enter');
      cards[i].classList.add('card-exit');
    }
  }
}

function nextCards() {
  currentIndex += cardsPerPage;
  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }
  showCards();
}

function prevCards() {
  currentIndex -= cardsPerPage;
  if (currentIndex < 0) {
    currentIndex = cards.length - cardsPerPage;
  }
  showCards();
}

function autoSlide() {
  nextCards();
}

showCards();

nextButton.addEventListener('click', nextCards);
prevButton.addEventListener('click', prevCards);

setInterval(autoSlide, autoSlideInterval);
