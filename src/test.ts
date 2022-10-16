import { Confetti } from './index';

(function(){
  const confetti = new Confetti();
  const button = document.getElementById('fire');
  button?.addEventListener('click', (event) => {
    console.log('fire!');
    confetti.fire();;
  });
}())
