export default class QuestionPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
    <section id="questions" class="page questions">
  
    <div class="question-section">

      <div class="question-container">

        <h2 class="question">1. Hvor mange kvæg har du på din gård?</h2>
    
        <div class="question-indicators-container">
          <div class="question-indicator">
            <h4 class="question-indicator-text q-help">Hvordan finder jeg svaret?</h4>
            <img src="./images/questionmark.svg" alt="questionmark">
          </div>

          <div class="question-indicator">
          <h4 class="question-indicator-text">Gennemsnittet er 158</h4>
          <img src="./images/exclamation.svg" alt="questionmark">
          </div>
        </div>
       

        <form>

          <div class="sub-question-container">
            <h3 class="sub-question">1.1 Hvor mange køer har du?</h3>
            <input class="input"  id="cows" type="text" name="cows" placeholder="fx. 120" />
          </div>

          <div class="sub-question-container">
            <h3 class="sub-question">1.2 Hvor mange tyrer har du?</h3>
            <input class="input"  id="bulls" type="text" name="cows" placeholder="fx. 120" />
          </div>

          <div class="sub-question-container"> 
            <h3 class="sub-question">1.3 Hvor mange kalve har du?</h3>
            <input class="input" id="calves" type="text" name="cows" placeholder="fx. 120" />
          </div>

        </form>

        </div>
        <div class="question-img-container">
        <img class="question-img" src="./images/cow-icon.svg">
        </div>
    
    </div>

    <div onload="selectCattleData()" class="question-section">

      <div class="question-container">

        <h2 class="question">2. Hvor meget foder giver du til dine kvæg? (målt i kg. per kvæg)</h2>
    
        <div class="question-indicators-container">
          <div class="question-indicator">
            <h4 class="question-indicator-text q-help">Hvordan finder jeg svaret?</h4>
            <img src="./images/questionmark.svg" alt="questionmark">
          </div>

          <div class="question-indicator">
          <h4 class="question-indicator-text">Gennemsnittet er 120 kg per kvæg</h4>
          <img src="./images/exclamation.svg" alt="questionmark">
          </div>
        </div>
       

        <form>

          <div class="sub-question-container">
            <h3 class="sub-question">2.1 Hvor meget foder bruger du i alt?</h3>
            <input class="input" id="foodTotal" type="text" name="foodTotal" placeholder="fx. 120" />
          </div>

          <div class="sub-question-container">
            <h3 class="sub-question">2.2 Hvor meget foder er selvforsynet?</h3>
            <input class="input" id="foodSelf" type="text" name="foodSelf" placeholder="fx. 42" />
          </div>

          <div class="sub-question-container"> 
            <h3 class="sub-question">2.3 Hvor meget foder er indkøbt?</h3>
            <input class="input" id="foodBought" type="text" name="foodBought" placeholder="fx. 65" />
          </div>

        </form>

        </div>
        <div class="question-img-container">
        <img class="question-img" src="./images/cow-icon.svg">
        </div>
    
    </div>

    <div class="question-section">

      <div class="question-container">

        <h2 class="question">3. Hvordan er dine kvægs helbred?</h2>
    
        <div class="question-indicators-container">
          <div class="question-indicator">
            <h4 class="question-indicator-text q-help">Hvordan finder jeg svaret?</h4>
            <img src="./images/questionmark.svg" alt="questionmark">
          </div>

          <div class="question-indicator">
          <h4 class="question-indicator-text">I gennemsnit er 80% køer sunde og raske</h4>
          <img src="./images/exclamation.svg" alt="questionmark">
          </div>
        </div>
       

        <form>

          <div class="sub-question-container">
            <h3 class="sub-question">3.1 Hvor mange kvæg er sunde og raske?</h3>
            <input id="healthy" type="text" name="healthy" placeholder="fx. 120" />
          </div>

          <div class="sub-question-container">
            <h3 class="sub-question">3.2 Hvor mange kvæg er døde i år?</h3>
            <input id="dead" type="text" name="dead" placeholder="fx. 120" />
          </div>

          <div class="sub-question-container"> 
            <h3 class="sub-question">3.3 Hvor mange kvæg er syge?</h3>
            <input id="sick" type="text" name="sick" placeholder="fx. 120" />
          </div>

        </form>

        </div>
        <div class="question-img-container">
        <img class="question-img" src="./images/cow-icon.svg">
        </div>
    
    </div>

    <div class="question-buttons">
    
        <div class="question-button question-button-prev">

        <img src="./images/arrow-left.svg";>
        <p>Tilbage</p>

        </div>  

        <div class="question-button question-button-first cattle-btn" onclick="createNumOfCattles()">

        <p>Næste</p>
        <img src="./images/arrow-right.svg";>

    </div>

    <div class="question-button question-button-next food-btn" onclick="createNumOfFood()">

    <p>Næste</p>
    <img src="./images/arrow-right.svg";>

</div>

    <a href="#thankyou" class="question-button question-button-done" onclick="createNumOfHealth()">

    <p>Afslut</p>
    <img src="./images/white-check.svg";>

</a>
      
    </div>

    <div class="question-list">
      <div class="question-list-ui">
        <img class="q-close-button" src="./images/close.svg">
        <h4>Luk fanen</h4>
      </div>
      <div class="questions">

        <div class="question-list-q">
          <h4 class="list-q-number">1.0</h4>
          <h3 class="list-q-text1">Hvor mange kvæg har du på din gård?</h4>
          <h4 class="list-q-answer" id="cattle-list"></h4> 
        </div>

        <div class="question-list-q">
          <h4 class="list-q-number">2.0</h4>
          <h3 class="list-q-text2">Hvor meget foder giver du til dine kvæg? (målt i kg. per kvæg)</h4>
          <h4 class="list-q-answer" id="food-list"></h4>
        </div> 
        
        <div class="question-list-q">
          <h4 class="list-q-number">3.0</h4>
          <h3 class="list-q-text3">Hvordan er dine kvægs helbred?</h4>
          <h4 class="list-q-answer" id="health-list"></h4>
        </div>  

        <div class="question-list-q">
          <h4 class="list-q-number">4.0</h4>
          <h3 class="list-q-text3">Hvordan er dine kvægs helbred?</h4>
          <h4 class="list-q-answer">120</h4>
        </div> 

        <div class="question-list-q">
          <h4 class="list-q-number">5.0</h4>
          <h3 class="list-q-text3">Hvordan er dine kvægs helbred?</h4>
          <h4 class="list-q-answer">120</h4>
        </div> 

        <div class="question-list-q">
          <h4 class="list-q-number">6.0</h4>
          <h3 class="list-q-text3">Hvordan er dine kvægs helbred?</h4>
          <h4 class="list-q-answer">120</h4>
        </div> 

      </div>
    </div>

    <div class="show-list">
      <img class="q-open-button" src="./images/list-icon.svg">
      <h4>Se alle spørgsmål</h4>
    </div>

    <div class="overlay"></div>

</section>
    
    `;
  }
}
