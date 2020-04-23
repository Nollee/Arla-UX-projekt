export default class QuestionPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
    <section id="questions" class="page questions">
  
    <div class="question-section">

      <div class="question-container">

        <h2 class="question">5. Hvor mange kvæg har du på din gård?</h2>
    
        <div class="question-indicators-container">
          <div class="question-indicator">
            <h4 class="question-indicator-text">Hvordan finder jeg svaret?</h4>
            <img src="./images/questionmark.svg" alt="questionmark">
          </div>

          <div class="question-indicator">
          <h4 class="question-indicator-text">Gennemsnittet er 158</h4>
          <img src="./images/exclamation.svg" alt="questionmark">
          </div>
        </div>
       

        <form>

          <div class="sub-question-container">
            <h3 class="sub-question">5.1 Hvor mange køer har du?</h3>
            <input id="cows" type="text" name="cows" placeholder="fx. 120" />
          </div>

          <div class="sub-question-container">
            <h3 class="sub-question">5.2 Hvor mange tyrer har du?</h3>
            <input id="bulls" type="text" name="cows" placeholder="fx. 120" />
          </div>

          <div class="sub-question-container"> 
            <h3 class="sub-question">5.3 Hvor mange kalve har du?</h3>
            <input id="calves" type="text" name="cows" placeholder="fx. 120" />
          </div>

        </form>

        </div>
        <img class="question-img" src="./images/cow-icon.svg">
      
      
      <div class="question-buttons">
    
        <div class="question-button question-button-prev">

        <img src="./images/arrow-left.svg";>
        <p>Tilbage</p>

        </div>  

        <div class="question-button question-button-next" onclick="createNumOfCattles()">

        <p>Næste</p>
        <img src="./images/arrow-right.svg";>

      </div>

      
      

    </div>
      
    </div>

    <div class="question-list">
      <div class="question-list-ui">
        <img class="q-close-button" src="./images/close.svg">
        <h4>Luk fanen</h4>
      </div>
      <div class="questions">
        <div class="question-list-q">
          <h4 class="list-q-number">5.0</h4>
          <h3 class="list-q-text">Hvor mange kvæg har du på din gård?</h4>
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
