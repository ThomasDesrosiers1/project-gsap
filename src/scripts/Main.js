import Icons from './utils/Icons';
import ComponentFactory from './ComponentFactory';
import Gsap from './components/Gsap';
import AnimatedLetters from './components/Animate';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();

    document.documentElement.classList.add('has-js');

    new ComponentFactory();
    new Gsap();
    new AnimatedLetters(this.title);
  }
}
new Main();
