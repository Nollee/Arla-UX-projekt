export default class HelpPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector('#app').innerHTML += /*html*/ `
        <section id="help" class="page">
        <h2>Hjælp til dataindsamling</h2>
        <h1>Sådan bedømmes køers helbred</h1>
        <div class="reading-time">
        <p>Læsetid: 3 min.</p>
        <img src="images/clock.svg" alt="tid">
        </div>
        <div class="help-wrapper">
        <h3>Sådan bedømmes køers helbred</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </p>
        <img src="images/cows.jpg" alt="køer">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </p>
        </div>
        </section>
      `;
    }
  }