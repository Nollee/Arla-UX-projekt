export default class HelpPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector('#app').innerHTML += /*html*/ `
        <section id="tips" class="page">
          <h1>Tips til et mere bæredygtig landbrug</h1>
          <div class="tip-container">
            <div class="tip-text">
              <h2>The Cow's feed</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempora eos eaque soluta culpa aliquid ab repellat dolore!</p>
            </div>
            <img class="tip-img" src="./images/cow-icon.svg" alt="">
          </div>   
          <div class="tip-container">
            <div class="tip-text">
              <h2>Renewable energy</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempora eos eaque soluta culpa aliquid ab repellat dolore!</p>
            </div>
            <img class="tip-img" src="./images/energy.svg" alt="">
          </div>
          <div class="tip-container">
            <div class="tip-text">
              <h2>Renewable energy</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempora eos eaque soluta culpa aliquid ab repellat dolore!</p>
            </div>
            <img class="tip-img" src="./images/energy.svg" alt="">
          </div>
             
        </section>
      `;
    }
  }