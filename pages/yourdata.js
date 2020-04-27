export default class DataPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector('#app').innerHTML += /*html*/ `
        
      
        <!-- MAIN NAV -->

        <section id="data" class="page">
        <div class="data-nav first-nav">
        <div class="data-category">
        <h3>Dyrefoder</h3>
        <img src="./images/cow-food.svg" alt="dyrefoder">
        </div>
        <div class="data-category">
        <h3>Energi</h3>
        <img src="./images/energy.svg" alt="elektricitet">
        </div>
        <div class="data-category" onclick="cowData()">
        <h3>Kvæg</h3>
        <img src="./images/animals.svg" alt="køer">

        </div>
        <div class="data-category">
        <h3>Ressourcer</h3>
        <img src="./images/recycle.svg" alt="ressourcer">
        </div>
        <div class="data-category">
        <h3>Vand</h3>
        <img src="./images/water.svg" alt="vand">
        </div>
        <div class="data-category">
        <h3>Mejeri</h3>
        <img src="./images/cheese.svg" alt="mejeri">
        </div>
        <div class="data-category">
        <h3>Organisk</h3>
        <img src="./images/organic.svg" alt="organisk">
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
        <div class="data-category last-nav-cat" onclick="remove(); showCalves()">
        <h3>Kalve</h3>
        </div> 
        <div class="data-category last-nav-cat" onclick="remove(); showCattles()">
        <h3>Alle kvæg</h3>
        </div>
        </div> 

        <!-- HELBRED NAV -->
        <div class="data-nav last-nav helbred-nav">
        <div class="data-category last-nav-cat" onclick="remove(); showSick()">
        <h3>Antal syge</h3>
        </div>
        <div class="data-category last-nav-cat" onclick="remove(); showFood()">
        <h3>Kost</h3>
        </div>
        <div class="data-category last-nav-cat" onclick="remove(); showDead()">
        <h3>Afdøde</h3>
        </div>
        </div>

        <img class="nav-close" src="images/close.svg" alt="luk" onclick="remove()">
        

        <div class="data-content">
        <h1 id="header-web" class="data-heading">Dine data</h1>
        <div class="chart-wrapper" id="dataChart">
        <canvas class="hidden chart" id="cowChart"></canvas>
        <canvas class="hidden chart" id="bullChart"></canvas>
        <canvas class="hidden chart" id="calveChart"></canvas>
        <canvas class="hidden chart" id="cattleChart"></canvas>
        <canvas class="hidden chart" id="foodChart"></canvas> 
        <canvas class="hidden chart" id="sickChart"></canvas>
        <canvas class="hidden chart" id="deadChart"></canvas>  

        </div>
        <div class="data-header" onclick="firstNav()">
        <h1 class="data-heading">Vælg data</h1>
        </div>
        </div>
        <span class="nav-overlay" onclick="remove()"></span>
        </section>
      `;
    }
  }