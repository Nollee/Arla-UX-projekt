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
                    
                 <div class="dropdown" id="check__content--left__question" onclick="dropDown1()">
                         <h3 class="sub-question">1. Hvor mange kvæg er der på din gård?</h3> 
                         <img id="arrow-down" class="arrow-down1" src="../images/arrow-down.svg" alt="se mere pil">  
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
                     
                     <div class="panel1 panel">
 
                     <div class="check__content--left--wrapper sub-sub-wrapper">
                         
                         <div id="check__content--left__question" class="expand-questions">
                             <h4 class="sub-sub-question">1.1 Hvor mange køer er der på din gård?</h4> 
                             <input class="sub-sub-input" id="cow-update" type="text" placeholder="50">
                         </div>                
                         
                     </div>
 
                     <div class="check__content--left--wrapper sub-sub-wrapper">
                         
                         <div id="check__content--left__question" class="expand-questions">
                             <h4 class="sub-sub-question">1.2 Hvor mange tyrer er der på din gård?</h4> 
                             <input class="sub-sub-input" id="bull-update" type="text" placeholder="45">
                         </div>                
                         
                     </div>
 
                     <div class="check__content--left--wrapper sub-sub-wrapper">
                         <div id="check__content--left__question" class="expand-questions">
                             <h4 class="sub-sub-question">1.3 Hvor mange kalve er der på din gård?</h4> 
                             <input class="sub-sub-input" id="calve-update" type="text" placeholder="22">
                         </div>
                         </div>
 
                         <br>
 
 
                         
                     </div>
 
                     
 
                 </div> 
                
                 <div class="check__content--left--wrapper">
                    
                 <div class="dropdown" id="check__content--left__question" onclick="dropDown2()">
                         <h3 class="sub-question">2. Hvor mange kvæg er der på din gård?</h3> 
                         <img id="arrow-down" class="arrow-down2" src="../images/arrow-down.svg" alt="se mere pil">  
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
                     
                     <div class="panel panel2">
 
                     <div class="check__content--left--wrapper sub-sub-wrapper">
                         
                         <div id="check__content--left__question" class="expand-questions">
                             <h4 class="sub-sub-question">2.1 Hvor meget foder bruger du i alt?</h4> 
                             <input class="sub-sub-input" id="healthy-update" type="text" placeholder="50">
                         </div>                
                         
                     </div>
 
                     <div class="check__content--left--wrapper sub-sub-wrapper">
                         
                         <div id="check__content--left__question" class="expand-questions">
                             <h4 class="sub-sub-question">2.2 Hvor meget foder er selvforsynet?</h4> 
                             <input class="sub-sub-input" id="dead-update" type="text" placeholder="45">
                         </div>                
                         
                     </div>
 
                     <div class="check__content--left--wrapper sub-sub-wrapper">
                         <div id="check__content--left__question" class="expand-questions">
                             <h4 class="sub-sub-question">2.3 Hvor meget foder er indkøbt?</h4> 
                             <input class="sub-sub-input" id="sick-update" type="text" placeholder="22">
                         </div>
                         </div>
 
                         <br>
 
 
                         
                     </div>
 
                     
 
                 </div>
                 
                 <div class="check__content--left--wrapper">
                    
                 <div class="dropdown" id="check__content--left__question" onclick="dropDown3()">
                         <h3 class="sub-question">3. Hvordan er dine kvægs helbred?</h3> 
                         <img id="arrow-down" class="arrow-down3" src="../images/arrow-down.svg" alt="se mere pil">  
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
                     
                     <div class="panel panel3">
 
                     <div class="check__content--left--wrapper sub-sub-wrapper">
                         
                         <div id="check__content--left__question" class="expand-questions">
                             <h4 class="sub-sub-question">3.1 Hvor mange kvæg er sunde og raske?</h4> 
                             <input class="sub-sub-input" id="food-update" type="text" placeholder="50">
                         </div>                
                         
                     </div>
 
                     <div class="check__content--left--wrapper sub-sub-wrapper">
                         
                         <div id="check__content--left__question" class="expand-questions">
                             <h4 class="sub-sub-question">3.2 Hvor mange kvæg er døde i år?</h4> 
                             <input class="sub-sub-input" id="self-update" type="text" placeholder="45">
                         </div>                
                         
                     </div>
 
                     <div class="check__content--left--wrapper sub-sub-wrapper">
                         <div id="check__content--left__question" class="expand-questions">
                             <h4 class="sub-sub-question">3.3 Hvor mange kvæg er syge?</h4> 
                             <input class="sub-sub-input" id="buy-update" type="text" placeholder="22">
                         </div>
                         </div>
 
                         <br>
 
 
                         
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
                        <h3 class="sub-question">4. Hvor maget plads har du pr ko?</h3> 
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
                        <h3 class="sub-question">5. Gennemsnits vægt pr ko?</h3> 
                        <input type="text" name="cows" placeholder="fx. 120" />
                    </div>
                    <div class="question-indicators-container">
                        <div class="question-indicator">
                            <h4 class="question-indicator-text">Hvordan finder jeg svaret?</h4>
                            <img src="./images/questionmark.svg" alt="questionmark" class="q-help">
                        </div>  
                        
                        <div class="question-indicator">
                            <h4 class="question-indicator-text">Gennemsnittet er 725 kg</h4>
                            <img src="./images/exclamation.svg" alt="questionmark">
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
                            <img src="./images/questionmark.svg" alt="questionmark" class="q-help">
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
                        <h3 class="sub-question">9. Hvor mange liter mælk producerer du  dagligt?</h3> 
                        <input type="text" name="cows" placeholder="fx. 120" />
                    </div>
                    <div class="question-indicators-container">
                        <div class="question-indicator">
                            <h4 class="question-indicator-text">Hvordan finder jeg svaret?</h4>
                            <img src="./images/questionmark.svg" alt="questionmark" class="q-help">
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
                            <img src="./images/questionmark.svg" alt="questionmark" class="q-help">
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
            <h1>Ret eller gennemgå</h1>
                <img src="../images/cow-icon.svg" alt="ikon af arla ko"> 
                <a class="accept-btn" href="#thankyou" onclick="updateData()"><p>Godkend</p>
                <img src="images/checkmark.svg" alt="check">
                </a>
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