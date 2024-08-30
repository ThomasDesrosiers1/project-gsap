import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default class Gsap {
  constructor() {
    this.init();
  }

  init() {
    console.log('gsap');

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    gsap.to('.green', { rotation: 720, x: 300, duration: 2 });
  }
}
