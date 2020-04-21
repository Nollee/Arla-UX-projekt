import NavBar from "./components/navbar.js";
import LoginPage from "./pages/login.js";
import AboutPage from "./pages/about.js";
import ClientsPage from "./pages/clients.js";
import ContactPage from "./pages/contact.js";
import _spaService from "./services/spa.js";
import YourPage from "./pages/yourpage.js"; 

import QuestionPage from "./pages/questions.js";

// Declare and init
let navbar = new NavBar();
let loginPage = new LoginPage();
let aboutPage = new AboutPage();
let clientsPage = new ClientsPage();
let contactPage = new ContactPage();
let yourPage = new YourPage();  
 
let questionPage = new QuestionPage();

// init services
_spaService.init();
