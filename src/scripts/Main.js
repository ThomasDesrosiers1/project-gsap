import Icons from './utils/Icons';
import ComponentFactory from './ComponentFactory';
import Gsap from './components/Gsap';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();

    document.documentElement.classList.add('has-js');

    new ComponentFactory();
    new Gsap();
  }
}
new Main();