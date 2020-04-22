import NavBar from "./components/navbar.js";
import LoginPage from "./pages/login.js";
import AboutPage from "./pages/about.js";
import ClientsPage from "./pages/clients.js";
import ContactPage from "./pages/contact.js";
import _spaService from "./services/spa.js";
import YourPage from "./pages/yourpage.js"; 
import QuestionPage from "./pages/questions.js";
import WelcomePage from "./pages/welcome.js";
import HowToPage from "./pages/howto.js";
import PrizePage from "./pages/prize.js";

// Declare and init
let navbar = new NavBar();
let loginPage = new LoginPage();
let aboutPage = new AboutPage();
let clientsPage = new ClientsPage();
let contactPage = new ContactPage();
let yourPage = new YourPage();  
let questionPage = new QuestionPage();
let welcomePage = new WelcomePage();
let howtoPage = new HowToPage();
let prizePage = new PrizePage();



// init services
_spaService.init();



// Question navigation

const closeButton = document.querySelector(".q-close-button");
const openButton = document.querySelector(".q-open-button");

const overlay = document.querySelector(".overlay");

const list = document.querySelector(".question-list");

closeButton.addEventListener('click', closeList);
openButton.addEventListener('click', closeList);
overlay.addEventListener('click', closeList);


function closeList(){
    list.classList.toggle('fade-out');
    overlay.classList.toggle('overlay-show');
}

