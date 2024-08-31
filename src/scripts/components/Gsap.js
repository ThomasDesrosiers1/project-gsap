import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default class Gsap {
  constructor(element) {
    element = this.element;

    this.init();
    this.boxAnimation();
    this.animateTitle();
  }

  init() {
    console.log('gsap');
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }

  boxAnimation() {
    gsap.to('.green', {
      scaleX: 30,
      duration: 3,
      rotate: 360,
      x: 600,
      duration: 2,
      scaleY: 0.1,
      duration: 2,
    });
    gsap.to('.blue', { rotateY: 360, x: -200, duration: 1 });
    gsap.to('.purple', { rotateX: 520, x: 800, duration: 3 });
  }

  animateTitle() {
    const titles = document.querySelectorAll('#title');

    for (let i = 0; i < titles.length; i++) {
      const currentTitle = titles[i];

      if ('splitText' in currentTitle.dataset) {
        console.log('split');
      }
    }
  }
}
