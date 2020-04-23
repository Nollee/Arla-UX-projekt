export default class YourPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector('#app').innerHTML += /*html*/ `
        <section id="yourpage" class="page">
        
        <div id="yourpage-wrapper">
        
        <div id="yourpage__content">
         
         <!--øverste del at indholdet --->
         <div id="yourpage__content--farming">

         <div id="yourpage__content--farming__header">
         <h2>Dit landbrug</h2> <img src="../images/light-bulb.svg" alt="lyspære ikon"><p>Du har 15 km2 pr ko</p>
         </div> 

         <div id="yourpage__content--farming--wrapper">
         <!--farming tabs --->
         <div id="yourpage__content--farming__tabs">
         <a href="#"><img src="../images/milk-carton.svg" alt="ikon af mælk"><p>Præmie</p></a>

         <a href="#data"><img src="../images/data.svg" alt="ikon af data"><p>Data</p></a>

         <a href="#"><img src="../images/money.svg" alt="ikon af penge"><p>Forslag</p></a>
        
         <div class="chart-container"> 
         <canvas id="chartContainer"></canvas>
         <p>Du har 3 køer flere end sidste år</p>  
        </div>   
 
         </div>   
         
        </div> 
         <!------------------>   
         
          

         </div> 
         <!------------------------------>
         
         
         
         <!-- nederste del af indholdet --->
         <div id="yourpage__content--questions">

         <div id="yourpage__content--questions__header">
         <h2>Spørgsmål</h2> <img src="../images/clock.svg" alt="ur ikon"><p>Du har ca 4 timer tilbage af besvarelsen</p>
         </div> 
         <!--questions tabs --->
         <div id="yourpage__content--questions__tabs">
         <a href="#"><img src="../images/cow-food.svg" alt="ikon af mælk"><p>Dyrefoder<br>0/15</p></a>

         <a href="#"><img src="../images/energy.svg" alt="ikon af data"><p>Energi<br>0/15</p></a>

         <a href="#questions"><img src="../images/animals.svg" alt="ikon af penge"><p>Køer<br>0/15</p></a>

         <a href="#"><img src="../images/recycle.svg" alt="ikon af mælk"><p>Ressourcer<br>0/15</p></a>

         <a href="#"><img src="../images/water.svg" alt="ikon af data"><p>Vand<br>0/15</p></a>

         <a href="#"><img src="../images/cheese.svg" alt="ikon af penge"><p>Mejeri<br>0/15</p></a> 

         <a href="#"><img src="../images/organic.svg" alt="ikon af penge"><p>Organisk<br>0/15</p></a> 

         </div> 
         <!------------------>   
         
         </div> 
        
        
        
         </div>

         </div>
        </section>  
      `; 
    }
  } 