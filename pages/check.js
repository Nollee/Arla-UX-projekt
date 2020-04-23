export default class CheckPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector('#app').innerHTML += /*html*/ `
      <section id="check" class="page">
        <div id="check__content">
            <!-- left side content questions -->

            

            <div id="check__content--left">
                <a class="check__go-back" href="#thankyou">
                    <img src="../images/arrow-left.svg" alt="tilbage pil"> Tilbage  
                 </a> 
                <div class="check__content--left--wrapper">
                    <div id="check__content--left__question">
                        <h3 class="sub-question">1. Hvor mange køer har du på din gård?</h3> 
                        <input type="text" name="cows" placeholder="fx. 120" />
                    </div>
                    <div class="question-indicators-container">
                        <div class="question-indicator">
                            <h4 class="question-indicator-text">Hvordan finder jeg svaret?</h4>
                            <img src="./images/questionmark.svg" alt="questionmark" class="q-help">
                        </div>   
                        
                        <div class="question-indicator">
                            <h4 class="question-indicator-text">Gennemsnittet er 158</h4>
                            <img src="./images/exclamation.svg" alt="questionmark">
                        </div>
                    </div>
                </div>   
                
                <div class="check__content--left--wrapper">
                    <div id="check__content--left__question">
                        <h3 class="sub-question">2. Angiv mængde af foder pr ko</h3> 
                        <input type="text" name="cows" placeholder="fx. 120" />
                    </div>
                    <div class="question-indicators-container">
                        <div class="question-indicator">
                            <h4 class="question-indicator-text">Hvordan finder jeg svaret?</h4>
                            <img src="./images/questionmark.svg" alt="questionmark">
                        </div>  
                        
                        <div class="question-indicator">
                            <h4 class="question-indicator-text">Gennemsnittet er 32</h4>
                            <img src="./images/exclamation.svg" alt="questionmark">
                        </div>
                    </div>
                </div>  

                <div class="check__content--left--wrapper">
                    <div id="check__content--left__question">
                        <h3 class="sub-question">3. Mængde af vand brugt pr ko?</h3> 
                        <input type="text" name="cows" placeholder="fx. 120" />
                    </div>
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
                </div> 

                <div class="check__content--left--wrapper">
                    <div id="check__content--left__question">
                        <h3 class="sub-question">4. Hvor maget plads har du pr ko?</h3> 
                        <input type="text" name="cows" placeholder="fx. 120" />
                    </div>
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
                </div> 

                <div class="check__content--left--wrapper">
                    <div id="check__content--left__question">
                        <h3 class="sub-question">5. Gennemsnits vægt pr ko?</h3> 
                        <input type="text" name="cows" placeholder="fx. 120" />
                    </div>
                    <div class="question-indicators-container">
                        <div class="question-indicator">
                            <h4 class="question-indicator-text">Hvordan finder jeg svaret?</h4>
                            <img src="./images/questionmark.svg" alt="questionmark">
                        </div>  
                        
                        <div class="question-indicator">
                            <h4 class="question-indicator-text">Gennemsnittet er 725 kg</h4>
                            <img src="./images/exclamation.svg" alt="questionmark">
                        </div>
                    </div>
                </div> 

                <div class="check__content--left--wrapper">
                    <div class="dropdown" id="check__content--left__question">
                        <h3 class="sub-question">6. Hvor mange kvæg er der på din gård?</h3> 
                        <img id="arrow-down" src="../images/arrow-down.svg" alt="se mere pil">  
                    </div>
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
                    
                    <div class="panel">

                    <div class="check__content--left--wrapper">
                        
                        <div id="check__content--left__question" class="expand-questions">
                            <h4 class="sub-question">6.1 Hvor mange kvæg er der på din gård?</h4> 
                            <input type="text">
                        </div> 

                    </div>

                    <div class="check__content--left--wrapper">
                        
                        <div id="check__content--left__question" class="expand-questions">
                            <h4 class="sub-question">6.2 Hvor mange tyrer er der på din gård?</h4> 
                            <input type="text">
                        </div>
                
                        
                    </div>
                    
                    <div class="check__content--left--wrapper">
                        <div id="check__content--left__question" class="expand-questions">
                            <h4 class="sub-question">6.3 Hvor mange kalve er der på din gård?</h4> 
                            <input type="text">
                        </div>
                        </div>
                
                        
                    </div>

                    

                </div> 

                <div class="check__content--left--wrapper">
                    <div id="check__content--left__question">
                        <h3 class="sub-question">7. Gennemsnits alder for dine dyr?</h3> 
                        <input type="text" name="cows" placeholder="fx. 120" />
                    </div>
                    <div class="question-indicators-container">
                        <div class="question-indicator">
                            <h4 class="question-indicator-text">Hvordan finder jeg svaret?</h4>
                            <img src="./images/questionmark.svg" alt="questionmark">
                        </div>  
                        
                        <div class="question-indicator">
                            <h4 class="question-indicator-text">Gennemsnittet er 5</h4>  
                            <img src="./images/exclamation.svg" alt="questionmark">
                        </div>
                    </div>
                </div> 

                <div class="check__content--left--wrapper">
                    <div id="check__content--left__question">
                        <h3 class="sub-question">8. Hvor mange kvier får du om året?</h3> 
                        <input type="text" name="cows" placeholder="fx. 120" />
                    </div>
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
                </div> 

                <div class="check__content--left--wrapper">
                    <div id="check__content--left__question">
                        <h3 class="sub-question">9. Hvor mange liter mælk producerer du  dagligt?</h3> 
                        <input type="text" name="cows" placeholder="fx. 120" />
                    </div>
                    <div class="question-indicators-container">
                        <div class="question-indicator">
                            <h4 class="question-indicator-text">Hvordan finder jeg svaret?</h4>
                            <img src="./images/questionmark.svg" alt="questionmark">
                        </div>  
                        
                        <div class="question-indicator">
                            <h4 class="question-indicator-text">Gennemsnittet er 123</h4> 
                            <img src="./images/exclamation.svg" alt="questionmark">
                        </div>
                    </div>
                </div> 

                <div class="check__content--left--wrapper">
                    <div id="check__content--left__question">
                        <h3 class="sub-question">10. Hvor mange køer har du på din gård?</h3> 
                        <input type="text" name="cows" placeholder="fx. 120" />
                    </div>
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
                </div> 
                <!-------------------->
            </div> 
            <!--------------------> 
            
            <!-- right side content; illustration -->
            <div id="check__content--right">
                <img src="../images/cow-icon.svg" alt="ikon af arla ko"> 
                <!-------------------->
            </div>
            <!-------------------->
            
            <div id="help-box-container">
            <div id="help-box">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut quam pellentesque enim laoreet iaculis. Vestibulum ullamcorper nulla sed condimentum scelerisque. Nam at metus eget neque tincidunt mattis eget a arcu. Nulla vel tellus hendrerit dolor efficitur viverra vitae vel dolor. Duis maximus justo vitae elit luctus vestibulum. Aenean convallis condimentum sodales.</p>
            <img src="../images/questionmark.svg" alt="spørgsmåltegn ikon"> 
            </div>
            </div> 
        
        </div>


        
        


    </section>
      `;
    }
  }