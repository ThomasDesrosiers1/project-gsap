import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default class Gsap {
  constructor(element) {
    element = this.element;

    this.init();
    this.boxAnimation();
    this.horizontalScrolling();
  }

  init() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }

  boxAnimation() {
    gsap.to('.green', { rotate: 1080, x: 800, duration: 2 });
    gsap.to('.blue', { rotateY: 45, x: 1300, duration: 2 });
    gsap.to('.purple', {
      rotateX: 520,
      x: 1400,
      duration: 2,
      scale: 1.5,
      duration: 1,
    });
    gsap.to('.white', { rotateX: 360, x: -1200, duration: 2 });
    gsap.to('.red', { rotateY: 180, x: -600, duration: 1 });
    gsap.to('.orange', { rotate: 720, x: -1500, duration: 3 });
  }

  horizontalScrolling() {
    const sections = gsap.utils.toArray('#horizontal .card');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      scrollTrigger: {
        trigger: '#horizontal',
        pin: true,
        scrub: 1,
        end: '+=6000',
      },
    });
  }
}
