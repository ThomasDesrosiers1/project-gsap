export default class Animate {
  constructor(element) {
    element = this.element;

    this.init();
  }

  init() {
    this.wrapLetters.bind(this);
    this.animateLetters.bind(this);
  }

  wrapLetters() {
    const text = this.element.textContent;
    this.element.innerHTML = ''; // Vide l'élément

    // Ajoute un span autour de chaque lettre
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.animationDelay = `${index * 0.1}s`; // Délai d'animation
      this.element.appendChild(span);
    });
  }

  animateLetters() {
    // Ajoute la classe qui déclenche l'animation
    this.element.classList.add('animated');
  }
}
