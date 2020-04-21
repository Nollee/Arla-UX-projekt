export default class QuestionPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="questions" class="page">
        <header class="topbar">
          <h2>questions</h2>
        </header>
        <div class="question-section">
          <div class="question-container">
            <div>
            <h2 class="question">5. Hvor mange kvæg har du på din gård?</h2>

            <div class="question-indicators">
              <div class="sub-question-container">
                <h4 class="sub-question">Hvordan finder jeg svaret?</h4>
                <img src="./images/questionmark.svg" alt="questionmark">
              </div>

              <div class="sub-question-container">
              <h4 class="sub-question">Gennemsnittet er 158</h4>
              <img src="./images/exclamation.svg" alt="questionmark">
              </div>
            </div>
           

            <form>

              <div>
                <h3 class="sub-question">5.1 Hvor mange køer har du?</h3>
                <input type="text" name="cows" placeholder="fx. 120" />
              </div>

              <div>
                <h3 class="sub-question">5.2 Hvor mange tyrer har du?</h3>
                <input type="text" name="cows" placeholder="fx. 120" />
              </div>

              <div> 
                <h3 class="sub-question">5.3 Hvor mange kalve har du?</h3>
                <input type="text" name="cows" placeholder="fx. 120" />
              </div>

            </form>
            </div>
          </div>
          <div class="question-img">
            <img src="./images/cow-icon.svg">
          </div>
        </div>

      </section>
    
    `;
  }
}
