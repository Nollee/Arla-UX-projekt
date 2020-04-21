export default class IntroPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.getElementById('content').innerHTML += /* html */ `
      <section id="intro" class="page">
      <h1>Intro</h1>
      </section>
      `
    
    }
}