export default class IntroPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.getElementById('intro').innerHTML += /* html */ `
      <h1>Intro</h1>
      `
    
    }
}