import NavBar from "./components/navbar.js";
import LoginPage from "./pages/login.js";
import AboutPage from "./pages/about.js";
import ClientsPage from "./pages/clients.js";
import _spaService from "./services/spa.js";
import YourPage from "./pages/yourpage.js"; 

import QuestionPage from "./pages/questions.js";
import WelcomePage from "./pages/welcome.js";
import HowToPage from "./pages/howto.js"
import ThankYouPage from "./pages/thankyou.js"
import HelpPage from "./pages/help.js"
import DataPage from "./pages/yourdata.js"




// Declare and init
let navbar = new NavBar();
let loginPage = new LoginPage();
let aboutPage = new AboutPage();
let clientsPage = new ClientsPage();
let yourPage = new YourPage();  
let thankyoupage = new ThankYouPage();
let helppage = new HelpPage();
 
let questionPage = new QuestionPage();
let welcomePage = new WelcomePage();
let howtoPage = new HowToPage();
let dataPage = new DataPage();



// init services
_spaService.init();

