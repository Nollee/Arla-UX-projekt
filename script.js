const dataRef = db.collection("data");

// ========== READ ==========
// watch the database ref for changes
dataRef.onSnapshot(function (snapshotData) {
  let datas = [];
  snapshotData.forEach(function (doc) {
    let data = doc.data();
    console.log(data);
    data.id = doc.id;
    datas.push(data);
  });
  selectData();
});

function selectData() {
  let cattle2020 = dataRef.doc("Cattles2020");
  let food2020 = dataRef.doc("food2020");

  cattle2020.get().then(function (doc) {
    cattleStatus = doc.data();
    let cowsInput = document.querySelector("#cows");
    let bullsInput = document.querySelector("#bulls");
    let calvesInput = document.querySelector("#calves");
    let cowUpdate = document.querySelector("#cow-update");
    let bullUpdate = document.querySelector("#bull-update");
    let calveUpdate = document.querySelector("#calve-update");

    cowsInput.value = cattleStatus.numOfCows;
    cowUpdate.value = cattleStatus.numOfCows;

    bullsInput.value = cattleStatus.numOfBulls;
    bullUpdate.value = cattleStatus.numOfBulls;

    calvesInput.value = cattleStatus.numOfCalves;
    calveUpdate.value = cattleStatus.numOfCalves;
  });


  food2020.get().then(function (doc) {
    foodStatus = doc.data();

    let totalInput = document.querySelector("#foodTotal");
    let selfInput = document.querySelector("#foodSelf");
    let boughtInput = document.querySelector("#foodBought");

    totalInput.value = foodStatus.numOfFoodBought;

    selfInput.value = foodStatus.numOfFoodSelf;

    boughtInput.value = foodStatus.numOfFoodBought;
  });
  
  let inputs = document.querySelectorAll(".input");


  for (let input of inputs) {
    if (input.value === "undefined") {
      input.value = "";
    }
  }
}

function createNumOfCattles() {
  // references to the input fields
  let cowsInput = document.querySelector("#cows");
  let bullsInput = document.querySelector("#bulls");
  let calvesInput = document.querySelector("#calves");
  console.log(cowsInput.value);
  console.log(bullsInput.value);
  console.log(calvesInput.value);

  let newNumberAnswer = {
    numOfCalves: +calvesInput.value,
    numOfBulls: +bullsInput.value,
    numOfCows: +cowsInput.value,
    numOfCattles: +cowsInput.value + +bullsInput.value + +calvesInput.value,
    year: 2020,
  };

  dataRef.doc("Cattles2020").set(newNumberAnswer);
}

function createNumOfFood() {
  // references to the input fields
  let foodTotalInput = document.querySelector("#foodTotal");
  let foodSelfInput = document.querySelector("#foodSelf");
  let foodBoughtInput = document.querySelector("#foodBought");

  let newNumberAnswer = {
    numOfFoodBought: +foodTotalInput.value,
    numOfFoodSelf: +foodSelfInput.value,
    numOfFoodTotal: +foodBoughtInput.value,
    year: 2020,
  };

  dataRef.doc("food2020").set(newNumberAnswer);
}

function createNumOfHealth() {
    // references to the input fields
    let healthyInput = document.querySelector("#healthy");
    let deadInput = document.querySelector("#dead");
    let sickInput = document.querySelector("#sick");
  
    let newNumberAnswer = {
      numOfFoodBought: +healthyInput.value,
      numOfFoodSelf: +deadInput.value,
      numOfFoodTotal: +sickInput.value,
      healthYear: 2020,
    };
  
    dataRef.doc("health2020").set(newNumberAnswer);
  }

function updateNumOfCattles() {
  // references to the input fields
  let cowsInput = document.querySelector("#cow-update");
  let bullsInput = document.querySelector("#bull-update");
  let calvesInput = document.querySelector("#calve-update");
  console.log(cowsInput.value);
  console.log(bullsInput.value);
  console.log(calvesInput.value);

  let newNumberAnswer = {
    numOfCalves: +calvesInput.value,
    numOfBulls: +bullsInput.value,
    numOfCows: +cowsInput.value,
    numOfCattles: +cowsInput.value + +bullsInput.value + +calvesInput.value,
    year: 2020,
    category: "cattle"
  };

  dataRef.doc("Cattles2020").set(newNumberAnswer);
}




/* ============================ NAV til "Din data" ================================= */

function cowData() {
  document.querySelector(".cow-nav").classList.toggle("next");
  let lastNav = document.querySelectorAll(".last-nav");
  for (let nav of lastNav) {
    nav.classList.remove("last");
    nav.classList.toggle("next");
  }
}

function antalData() {
  document.querySelector(".antal-nav").classList.add("one-up");
  document.querySelector(".helbred-nav").classList.remove("one-up");
}

function lastData() {
  let lastNav = document.querySelectorAll(".last-nav");
  for (let nav of lastNav) {
    nav.classList.add("last");
  }
}

function helbredData() {
  document.querySelector(".antal-nav").classList.remove("one-up");
  document.querySelector(".helbred-nav").classList.add("one-up");
}

function remove() {
  let elements = document.querySelectorAll(".data-nav");
  document.querySelector(".helbred-nav").classList.remove("one-up");
  document.querySelector(".antal-nav").classList.remove("one-up");
  document.querySelector(".nav-close").style.left = "-50%";
  document.querySelector(".nav-overlay").style.display = "none";

  for (let element of elements) {
    element.classList.remove("last");
    element.classList.remove("next");
    element.classList.add("zero");
  }
}

function firstNav() {
  let allData = document.querySelectorAll(".data-nav");

  for (let data of allData) {
    data.classList.remove("zero");
    data.classList.add("first");
    data.classList.remove("next");
  }
  document.querySelector(".nav-close").style.left = "5%";
  document.querySelector(".nav-overlay").style.display = "block";
}



/* ===================================== ANTAL ========================================= */
function numOfCows() {
  document.getElementById("data-heading").innerHTML = "Antal køer";
}

function numOfCalves() {
  document.getElementById("data-heading").innerHTML = "Antal Kalve";
}

function numOfCattles() {
  document.getElementById("data-heading").innerHTML = "Alle kvæg";
}

/* ===================================== HELBRED ========================================= */

function sickness() {
  document.getElementById("data-heading").innerHTML = "Antal syge kvæg";
}

function diet() {
  document.getElementById("data-heading").innerHTML = "kvægenes kost";
}

function mood() {
  document.getElementById("data-heading").innerHTML = "kvægenes humør";
}

function dead() {
  document.getElementById("data-heading").innerHTML = "Antal døde køer";
}

/* ========================== UPDATE YOURPAGE QUESTIONS ========================= */

function fillCows() {
  document.querySelector("#cow-number-questions").innerHTML = "15";
  document.querySelector(".done").style.display = "block";
  document.querySelector(".cow-question").setAttribute("href", "#thankyou");
}
