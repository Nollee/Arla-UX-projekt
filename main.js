import NavBar from "./components/navbar.js";
import LoginPage from "./pages/login.js";
import AboutPage from "./pages/about.js";
import ClientsPage from "./pages/clients.js";
import _spaService from "./services/spa.js";
import YourPage from "./pages/yourpage.js"; 
import QuestionPage from "./pages/questions.js";
import WelcomePage from "./pages/welcome.js";
import HowToPage from "./pages/howto.js";
import PrizePage from "./pages/prize.js";
import ThankYouPage from "./pages/thankyou.js";
import HelpPage from "./pages/help.js";
import DataPage from "./pages/yourdata.js";




// Declare and init
let navbar = new NavBar();
let loginPage = new LoginPage();
let aboutPage = new AboutPage();
let clientsPage = new ClientsPage();
let yourPage = new YourPage();  
let questionPage = new QuestionPage();
let welcomePage = new WelcomePage();
let howtoPage = new HowToPage();
let prizePage = new PrizePage();
let thankyoupage = new ThankYouPage();
let helppage = new HelpPage();
let dataPage = new DataPage();



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

/* chart */
// 1: data
// Array of objects with sale
let _farmer1 = [{
    year: '2015',
    numberOfCows: 51
  },
  {
    year: '2016',
    numberOfCows: 50
  },
  {
    year: '2017',
    numberOfCows: 49  
  },
  {
    year: '2018',
    numberOfCows: 51
  },
  {
    year: '2019',
    numberOfCows: 50
  },
  {
    year: '2020',
    numberOfCows: 52
  }
];

let _farmer2 = [{
  year: '2015',
  numberOfCows: 50
},
{
  year: '2016',
  numberOfCows: 53
},
{
  year: '2017',
  numberOfCows: 43  
},
{
  year: '2018',
  numberOfCows: 57
},
{
  year: '2019',
  numberOfCows: 49
},
{
  year: '2020',
  numberOfCows: 52
}
];

// 2: prepare data for chart
// seperating the objects to arrays: months and sales
// why? that's how chart.js reads the data :)
function prepareData(data) {
  // declaring two array to store the data 
  let cows = [];
  let years = [];
  // looping through the data array
  for (const object of data) {
    // adding the values to the different arrays
    cows.push(object.numberOfCows);
    years.push(object.year);
  }
  // returning the two arrays (months & sales) inside and object
  // we cannot return to values - that's why we have to do it inside an array
  return {
    years,
    cows
  };
}

// 3: create and append the chart
function appendChart() {
  // using prepareData() to get the excact data we want
  let data1 = prepareData(_farmer1);
  let data2 = prepareData(_farmer2);
  //open the developer console to inspect the result
  
  let chartContainer = document.getElementById('chartContainer');
  let chart = new Chart(chartContainer, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset  
    data: { 
      labels: data1.years, // refering to the data object, holding data from prepareData()
      datasets: [
    {
        data: data1.cows, // refering to the data object, holding data from prepareData()
        label: 'Udvikling af køer landmand 1',
        backgroundColor: '#4BB131', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
        borderColor: 'rgba(111, 111, 111, 0.5)'
      },
      { 
        data: data2.cows, // refering to the data object, holding data from prepareData()
        label: 'Udvikling af køer landmand 2',
        backgroundColor: '#FFCC32', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
        borderColor: 'rgba(111, 111, 111, 0.5)'
      }
    
    ]
    },
    // Configuration options goes here
    // Go to the docs to find more: https://www.chartjs.org/docs/latest/
    options: {
      title: {
        display: true,
        text: 'Udvikling af køer',
        fontFamily: 'arla',
        fontSize: '15',
        color:  "#EBEBEC", 
      }, 
        legend: {
            display: false
        }, 
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }   
            }]
        }
    }
  
  });
}

appendChart(); 




