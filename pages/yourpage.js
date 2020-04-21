export default class YourPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector('#app').innerHTML += /*html*/ `
        <section id="yourpage" class="page">
         <div id="yourpage__content">
         <!--øverste del at indholdet --->
         <div id="yourpage__content--farming">
         <h2>Dit landbrug</h2> <img src="../images/light-bulb.svg" alt="lyspære ikon"><p>Du har 15 km2 pr ko</p>
         <img src="../images/line.svg" alt="tegnet linje">    
         </div>
         <!------------------------------>
         <!-- nederste del af indholdet --->
         <div id="yourpage__content--questions">
         <h2>Dit landbrug</h2> <img src="../images/light-bulb.svg" alt="lyspære ikon"><p>Du har 15 km2 pr ko</p>
         <img src="../images/line.svg" alt="tegnet linje">    
         </div>
         <!---------------------------->
         </div>
        </section>  
      `; 
    }
  } 