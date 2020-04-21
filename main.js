import NavBar from "./components/navbar.js";
import HomePage from "./pages/home.js";
import AboutPage from "./pages/about.js";
import ClientsPage from "./pages/clients.js";
import ContactPage from "./pages/contact.js";
import _spaService from "./services/spa.js";
import YourPage from "./pages/yourpage.js"; 


// Declare and init
let navbar = new NavBar();
let homePage = new HomePage();
let aboutPage = new AboutPage();
let clientsPage = new ClientsPage;
let contactPage = new ContactPage();
let yourPage = new YourPage(); 
 
// init services
_spaService.init();