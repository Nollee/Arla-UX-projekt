import NavBar from "./components/navbar.js";
import LoginPage from "./pages/login.js";
import AboutPage from "./pages/about.js";
import ClientsPage from "./pages/clients.js";
import ContactPage from "./pages/contact.js";
import _spaService from "./services/spa.js";


// Declare and init
let navbar = new NavBar();
let loginPage = new LoginPage();
let aboutPage = new AboutPage();
let clientsPage = new ClientsPage;
let contactPage = new ContactPage();

// init services
_spaService.init();