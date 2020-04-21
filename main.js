import NavBar from "./components/navbar.js";
import LoginPage from "./pages/login.js";
import AboutPage from "./pages/about.js";
import ClientsPage from "./pages/clients.js";
import ContactPage from "./pages/contact.js";
import _spaService from "./services/spa.js";
import QuestionPage from "./pages/questions.js";
import WelcomePage from "./pages/welcome.js";

// Declare and init
let navbar = new NavBar();
let loginPage = new LoginPage();
let aboutPage = new AboutPage();
let clientsPage = new ClientsPage();
let contactPage = new ContactPage();
let questionPage = new QuestionPage();
let welcomePage = new WelcomePage();


// init services
_spaService.init();

