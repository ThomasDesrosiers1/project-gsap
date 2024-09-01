export default class Textsplit {
  constructor() {
    this.element = document.querySelector('.split-text'); // Récupère l'élément, pas le texte

    this.init();
  }

  init() {
    this.splitTextIntoSpans();
    this.animateLetters();
  }

  splitTextIntoSpans() {
    const text = this.element.textContent;
    this.element.innerHTML = '';

    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.position = 'relative';
      span.style.animationDelay = `${0.1 + index / 10}s`; // Ajout du délai d'animation
      this.element.appendChild(span);
    });
  }

  animateLetters() {
    this.element.classList.add('animated');
  }
}
