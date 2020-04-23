// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpb0OF-Co5wJU3PRvBwWIqtp71yOi25wY",
    authDomain: "arla-ux.firebaseapp.com",
    databaseURL: "https://arla-ux.firebaseio.com",
    projectId: "arla-ux",
    storageBucket: "arla-ux.appspot.com",
    messagingSenderId: "333480570558",
    appId: "1:333480570558:web:ab212ac76f48f0d92ab8ef"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const dataRef = db.collection("data");
  
  let selectedUserId = "";
  
  // ========== READ ==========
  // watch the database ref for changes
  dataRef.onSnapshot(function(snapshotData) {
    let datas = [];
    snapshotData.forEach(function(doc) {
      let data = doc.data();
      console.log(data);
      data.id = doc.id;
      datas.push(data);
    });
  });


 /*  function createUser() {
    // references to the input fields
    let nameInput = document.querySelector('#name');
    let mailInput = document.querySelector('#mail');
    console.log(nameInput.value);
    console.log(mailInput.value);
  
    let newUser = {
      name: nameInput.value,
      mail: mailInput.value
    };
  
    userRef.add(newUser);
  }
 */







function cowData(){
    document.querySelector(".cow-nav").classList.toggle('next');
    let lastNav = document.querySelectorAll(".last-nav");
    for (let nav of lastNav){
        nav.classList.remove('last');
        nav.classList.toggle('next');
    }



};


function antalData(){
  document.querySelector(".antal-nav").classList.add("one-up");
    document.querySelector(".helbred-nav").classList.remove("one-up");

}

function lastData(){
    let lastNav = document.querySelectorAll(".last-nav");
    for (let nav of lastNav){
        nav.classList.add('last');
    }
};

function helbredData(){
    document.querySelector(".antal-nav").classList.remove("one-up");
    document.querySelector(".helbred-nav").classList.add("one-up");

}

function remove(){
    let elements = document.querySelectorAll(".data-nav");
    document.querySelector(".helbred-nav").classList.remove("one-up");
    document.querySelector(".antal-nav").classList.remove("one-up");
    document.querySelector(".nav-close").style.left = "-50%";
    document.querySelector(".nav-overlay").style.display = "none";


    for (let element of elements){
        element.classList.remove("last")
        element.classList.remove("next")
        element.classList.add("zero")
    }
}

function firstNav(){
    let allData = document.querySelectorAll('.data-nav')

    for (let data of allData){
        data.classList.remove("zero")
        data.classList.add("first")
        data.classList.remove("next")
    }
    document.querySelector(".nav-close").style.left = "5%";
    document.querySelector(".nav-overlay").style.display = "block";


}


/* ===================================== ANTAL ========================================= */
function numOfCows(){
    document.getElementById("data-heading").innerHTML ="Antal køer"
}

function numOfBulls(){
    document.getElementById("data-heading").innerHTML ="Antal Tyrer"
}

function numOfCalves(){
    document.getElementById("data-heading").innerHTML ="Antal Kalve"
}

function numOfCattles(){
    document.getElementById("data-heading").innerHTML ="Alle kvæg"
}


/* ===================================== HELBRED ========================================= */

function sickness(){
    document.getElementById("data-heading").innerHTML ="Antal syge kvæg"
}

function diet(){
    document.getElementById("data-heading").innerHTML ="kvægenes kost"
}

function mood(){
    document.getElementById("data-heading").innerHTML ="kvægenes humør"
}

function dead(){
    document.getElementById("data-heading").innerHTML ="Antal døde køer"
}



function showHelp() {
    document.getElementById("help-box-container").classList.add("active"); 
}

function hideHelp() {
    document.getElementById(help-box-container).classList.remove("active"); 
}

/* const helpBox */ 




/* ================================= DROPDOWN ============================*/

let acc = document.getElementsByClassName("dropdown");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("dropping");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    console.log("test123");
    
  });
};