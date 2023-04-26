const catalog = document.querySelector('[data-catalog]');
const cards = catalog.querySelectorAll('[data-card]');

const addDisplayStyle = () => {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains('focus-visible')) {
      let cardActive = cards[i];

      let backActive = cardActive.querySelector('[data-card-back]');
      backActive.style.opacity = '1';
      backActive.style.visibility = 'visible';
      let frontActive = cardActive.querySelector('[data-card-front]');
      frontActive.classList.add('card__front--active');

    } else if (!cards[i].classList.contains('focus-visible')) {
      let cardPassive = cards[i];

      let backPassive = cardPassive.querySelector('[data-card-back]');
      backPassive.style.opacity = '0';
      backPassive.style.visibility = 'hidden';
      let frontPassive = cardPassive.querySelector('[data-card-front]');
      frontPassive.classList.remove('card__front--active');

    } else {
      return;
    }
  }
};

const cardsActionHandler = () => {
  cards.forEach((element) => {
    element.addEventListener('touchstart', addDisplayStyle);
    element.addEventListener('keydown', addDisplayStyle);
    element.addEventListener('focus', addDisplayStyle);
  });
};

export {cardsActionHandler};
