export default class PrizePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="prize" class="page">
        <div class="prize-content">
          <div class="prize-content-text">
            <div class="prize-header">
              <h2>Præmien</h2>
            </div>
            <div>
            Som noget nyt har du nu muligheden for at være med til at blive en del af helt ny mælkekarton, som repræsentere landmændene. Denne mælkekarton vil blive solgt sammen med de andre mælkekartoner og her vil en andel af indkomsten fra kartonen gå direkte til dig. 
            <br><br>Måden du bliver gyldig til at være en del af mælkekartonen, er for det første at du svarer på alle spørgsmålene. Din CO2-udledning vil derefter blive målt per kvadratmeter grund du ejer. Hvis din CO2-udledning er under en bestemt grænse, vil du blive gyldig til at være en del af mælkekartonen og vil derfor få en andel af indkomsten fra den.
            <br><br>
            Hvis du ikke er under grænsen, er du ikke gyldig. Dette betyder dog ikke at du aldrig kan være gyldig. 
            forbedre din CO2-udledning til næste år, hvor du igen har mulighed for at være gyldig. Hvis du ikke ved hvordan du kan forbedre din CO2-udledning, kan du <a href="#tips">her finde nogle forslag.</a></p>
            
            </div>
          </div>
          <img src="./images/carton-money.svg" alt="mælkekarton og penge">
        </div>
      </section>
    `;
  }
}