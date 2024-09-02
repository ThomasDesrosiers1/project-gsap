export default class Textsplit {
  constructor(element) {
    this.element = element;
    this.textElements = document.querySelectorAll('.split-text');

    this.init();
  }

  init() {
    this.splitTextIntoSpans();
    this.animateLetters();
  }

  splitTextIntoSpans() {
    for (let i = 0; i < this.textElements.length; i++) {
      const element = this.textElements[i];

      const text = element.textContent;
      element.innerHTML = '';

      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.position = 'relative';
        span.style.animationDelay = `${0.1 + index / 10}s`;
        element.appendChild(span);
      });
    }
  }

  animateLetters() {
    for (let i = 0; i < this.textElements.length; i++) {
      const element = this.textElements[i];

      if (element.classList.contains('is-active')) {
        element.classList.add('animated');
      }
    }
  }
}
