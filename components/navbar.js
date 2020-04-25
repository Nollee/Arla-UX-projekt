export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="tabbar">
      <a href="#yourpage"><img src="../images/arla_logo.svg" alt="arla logo"></a>  
        <!--<a href="#login">Login</a>
        <a href="#yourpage">Din side</a>  
        <a href="#check">check</a>
        <a href="#thankyou">thankyou</a>   
        <a href="#questions">Questions</a> 
        <a href="#prize">Præmie</a>
        <a href="#tips">Tips</a> -->
        
        
        <div id="nav__user">
        <div id="nav__user--wrapper">
        <p>Hr. Landmand</p>
        <img id="nav__user__img" src="../images/user.svg" alt="login bruger"> 
        </div>  
        <div id="nav__user__window">
        <a href="#help"><img src="../images/help-icon.svg" alt="Hjælp ikon">Hjælp</a>
        <a href="#login"><img src="../images/logout.svg" alt="log ud ikon">Log ud</a>
        </div>
        </div>  
       
        <div id="nav__gradient"></div> 
       
        </nav>


        <!------ help box for questions ------>
        <div id="help-box-container">
            <div id="help-box">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut quam pellentesque enim laoreet iaculis. Vestibulum ullamcorper nulla sed condimentum scelerisque. Nam at metus eget neque tincidunt mattis eget a arcu. Nulla vel tellus hendrerit dolor efficitur viverra vitae vel dolor. Duis maximus justo vitae elit luctus vestibulum. Aenean convallis condimentum sodales.</p>
            <img src="../images/questionmark.svg" alt="spørgsmåltegn ikon"> 
            </div>
            </div> 
    `;
  }
}
