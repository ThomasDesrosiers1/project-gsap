import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default class Gsap {
  constructor(element) {
    element = this.element;

    this.init();
    this.boxAnimation();
  }

  init() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }

  boxAnimation() {
    gsap.to('.green', {
      rotate: 360,
      x: 600,
      duration: 0.5,
      scaleY: 0.1,
      duration: 2,
      scaleX: 100,
      duration: 1,
    });
    gsap.to('.blue', { rotateZ: 45, x: 1200, duration: 2 });
    gsap.to('.purple', {
      rotateX: 520,
      x: 1400,
      duration: 2,
      scale: 1.5,
      duration: 1,
    });
  }
}
