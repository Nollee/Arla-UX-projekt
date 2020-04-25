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
              <h2>Ko foder</h2>
              <p>Når koen fordøjer dens foder, bliver den naturlige gas "metan" produceret og frigivet gennem bøvser. Du kan ved at ændre foderets komposition, gøre koen mindre gassede.
              </p>
            </div>
            <img class="tip-img" src="./images/cow-food.svg" alt="Kofoder">
          </div>   
          <div class="tip-container">
            <div class="tip-text">
              <h2>Fødeproduktion</h2>
              <p>Effektiv fødeproduktion forsikrer at der, lige præcis, er den rigtige mængde af næringsstoffer for at dyrke afgrøderne og minimere tabet af næringsstoffer igennem opbevaringen, håndteringen og brugen af markerne. <br>Dette reducerer ikke kun klimapåvirkningen, men forbedre også profitten på din farm.
 
              </p>
            </div>
            <img class="tip-img" src="./images/recycle.svg" alt="fødeproduction">
          </div>
          <div class="tip-container">
            <div class="tip-text">
              <h2>Håndtering af gødning</h2>
              <p>Gødning som er brugt til biogasproduktion, reducerer emissionen og producerer vedvarende energi.<br>
              Når gødning bliver brugt på markerne, burde det blive inkorporerede ind i jorden så hurtigt som muligt, for at reducerer tabet af nitrogen.
              </p>
            </div>
            <img class="tip-img" src="./images/organic.svg" alt="Håndtering af gødning">
          </div>
          <div class="tip-container">
          <div class="tip-text">
            <h2>Vedvarende energi</h2>
            <p>Din gård kan producere vedvarende energi gennem solpaneler, biogas og vindturbiner. Elektriciteten som Arla-gårde producerer i øjeblikket er lig med 61% af deres samlet elektricitet brug.  

            </p>
          </div>
          <img class="tip-img" src="./images/energy.svg" alt="Vedvarende energi">
        </div>
        <div class="tip-container">
        <div class="tip-text">
          <h2>Dyrevelfærd</h2>
          <p>Da koen ikke producerer mælk de to første år af dens liv, bliver den totale udledning per kg. mælk i løbet af dens levetid reduceret desto længere den lever, og desto mere mælk den producerer. <br>
          Det er bevist at bedre dyrevelfærd forbedre køers mælkeudbytte og levetid.
          
          </p>
        </div>
        <img class="tip-img" src="./images/cow-icon.svg" alt="Dyrevelfærd">
      </div>
             
        </section>
      `;
    }
  }