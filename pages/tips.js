export default class HelpPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector('#app').innerHTML += /*html*/ `
        <section id="tips" class="page">
          <div class="tip-container">
            <div class="tip-text">
              <h2>The Cow's feed</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempora eos eaque soluta culpa aliquid ab repellat dolore!</p>
            </div>
            <div class="tip-img">
              <img src="./images/cow-icon.svg" alt="">
            </div>
          </div>   
        </section>
      `;
    }
  }