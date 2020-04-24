export default class DataPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector('#app').innerHTML += /*html*/ `
        
      
        <!-- MAIN NAV -->

        <section id="data" class="page">
        <div class="data-nav first-nav">
        <div class="data-category" onclick="foodData()">
        <h3>Dyrefoder</h3>
        <img src="images/icons/dyrefoder.svg" alt="dyrefoder">
        </div>
        <div class="data-category" onclick="elecData()">
        <h3>Energi</h3>
        <img src="images/icons/elektricitet.svg" alt="elektricitet">
        </div>
        <div class="data-category" onclick="cowData()">
        <h3>Køer</h3>
        <img src="images/icons/cows.svg" alt="køer">

        </div>
        <div class="data-category" onclick="resData()">
        <h3>Ressourcer</h3>
        <img src="images/icons/ressourcer.svg" alt="ressourcer">
        </div>
        <div class="data-category" onclick="waterData()">
        <h3>Vand</h3>
        <img src="images/icons/vand.svg" alt="vand">
        </div>
        <div class="data-category" onclick="dairyData()">
        <h3>Mejeri</h3>
        <img src="images/icons/mejeri.svg" alt="mejeri">
        </div>
        <div class="data-category" onclick="organicData()">
        <h3>Organisk</h3>
        <img src="images/icons/organisk.svg" alt="organisk">
        </div>
        </div>



        <!-- KØER NAV -->
        <div class="data-nav next-nav cow-nav">
        <div class="data-category" onclick="antalData(); lastData()">
        <h3>Antal</h3>
        </div>
        <div class="data-category" onclick="helbredData(); lastData()">
        <h3>Helbred</h3>
        </div>
        </div>


        <!-- ANTAL NAV -->
        <div class="data-nav last-nav antal-nav">
        <div class="data-category last-nav-cat" onclick="remove(); showCows()">
        <h3>Køer</h3>
        </div>
        <div class="data-category last-nav-cat" onclick="remove(); showBulls()">
        <h3>Tyrer</h3>
        </div>
        <div class="data-category last-nav-cat" onclick="remove();">
        <h3>Kalve</h3>
        </div>
        <div class="data-category last-nav-cat" onclick="remove(); numOfCattles()">
        <h3>Alle kvæg</h3>
        </div>
        </div>

        <!-- HELBRED NAV -->
        <div class="data-nav last-nav helbred-nav">
        <div class="data-category last-nav-cat" onclick="remove(); sickness()">
        <h3>Antal syge</h3>
        </div>
        <div class="data-category last-nav-cat" onclick="remove(); diet()">
        <h3>Kost</h3>
        </div>
        <div class="data-category last-nav-cat" onclick="remove(); mood()">
        <h3>Humør</h3>
        </div>
        <div class="data-category last-nav-cat" onclick="remove(); dead() ">
        <h3>Afdøde</h3>
        </div>
        </div>

        <img class="nav-close" src="images/close.svg" alt="luk" onclick="remove()">
        

        <div class="data-content">
        <h1>Dine data</h1>
        <div class="chart-wrapper" id="dataChart">
        <canvas class="hidden" id="cowChart"></canvas>
        <canvas class="hidden" id="bullChart"></canvas>

        </div>
        <div class="data-header" onclick="firstNav()">
        <h2 id="data-heading">Vælg data</h2>
        </div>
        </div>
        <span class="nav-overlay" onclick="remove()"></span>
        </section>
      `;
    }
  }