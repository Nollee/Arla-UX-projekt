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
              <p>For at deltage i muligheden for at få tilegenet et produkt specielt til din gård og mælkeproduktion, skal du besvare alle spørgsmålene og derefter rangre i top 3, på carbon udslip i CO2 baseret på din gårds størrelse.</p>
              
              <p>
              Rangerer du i top 3, laver vi i samarbejde med dig et produkt tilegnet specielt til din gård, hvoraf 1kr af hvert produktsalg går direkte til din gård.  På den made kan vi og forbrugeren hylde de danske landmænd der gør en særlig indsats.</p>
            </div>
          </div>
          <img src="./images/carton-money.svg" alt="mælkekarton og penge">
        </div>
      </section>
    `;
  }
}