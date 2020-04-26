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
  let health2020 = dataRef.doc("health2020");


  /* ============= opdatere dataen inde i cowspørgsmålet ===================*/

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

/* ============= opdatere dataen inde i foodspørgsmålet ===================*/

  food2020.get().then(function (doc) {
    foodStatus = doc.data();

    let totalInput = document.querySelector("#foodTotal");
    let selfInput = document.querySelector("#foodSelf");
    let boughtInput = document.querySelector("#foodBought");
    let foodUpdate = document.querySelector("#food-update");
    let selfUpdate = document.querySelector("#self-update");
    let buyUpdate = document.querySelector("#buy-update");

    totalInput.value = foodStatus.numOfFoodBought;
    foodUpdate.value = foodStatus.numOfFoodBought;


    selfInput.value = foodStatus.numOfFoodSelf;
    selfUpdate.value = foodStatus.numOfFoodSelf;


    boughtInput.value = foodStatus.numOfFoodBought;
    buyUpdate.value = foodStatus.numOfFoodBought;

  });

  /* ============= opdatere dataen inde i healthpørgsmålet ===================*/

  health2020.get().then(function (doc) {
    healthStatus = doc.data();

    let healthyInput = document.querySelector("#healthy");
    let deadInput = document.querySelector("#dead");
    let sickInput = document.querySelector("#sick");
    let healthyUpdate = document.querySelector("#healthy-update");
    let deadUpdate = document.querySelector("#dead-update");
    let sickUpdate = document.querySelector("#sick-update");




    healthyInput.value = healthStatus.numOfHealthy;
    healthyUpdate.value = healthStatus.numOfHealthy;


    deadInput.value = healthStatus.numOfDead;
    deadUpdate.value = healthStatus.numOfDead;


    sickInput.value = healthStatus.numOfSick;
    sickUpdate.value = healthStatus.numOfSick;

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
    category: "cattle",
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
    category: "food",
  };

  dataRef.doc("food2020").set(newNumberAnswer);
}

function createNumOfHealth() {
  // references to the input fields
  let healthyInput = document.querySelector("#healthy");
  let deadInput = document.querySelector("#dead");
  let sickInput = document.querySelector("#sick");

  let newNumberAnswer = {
    numOfHealthy: +healthyInput.value,
    numOfDead: +deadInput.value,
    numOfSick: +sickInput.value,
    year: 2020,
    category: "health",
  };

  dataRef.doc("health2020").set(newNumberAnswer);
}


// ========================= opdater data inde i check ==========================
function updateData() {
  // references to the input fields
  let cowsUpdate = document.querySelector("#cow-update");
  let bullsUpdate = document.querySelector("#bull-update");
  let calvesUpdate = document.querySelector("#calve-update");
  let foodTotalUpdate = document.querySelector("#food-update");
  let foodSelfUpdate = document.querySelector("#self-update");
  let foodBoughtUpdate = document.querySelector("#buy-update");
  let healthyUpdate = document.querySelector("#healthy-update");
  let deadUpdate = document.querySelector("#dead-update");
  let sickUpdate = document.querySelector("#sick-update");

  // opdatere cattle spørgsmål
  let newNumberAnswer = {
    numOfCalves: +calvesUpdate.value,
    numOfBulls: +bullsUpdate.value,
    numOfCows: +cowsUpdate.value,
    numOfCattles: +cowsUpdate.value + +bullsUpdate.value + +calvesUpdate.value
  };

  dataRef.doc("Cattles2020").update(newNumberAnswer);

// opdatere food spørgsmål
  let newFoodAnswer = {
    numOfFoodBought: +foodTotalUpdate.value,
    numOfFoodSelf: +foodSelfUpdate.value,
    numOfFoodTotal: +foodBoughtUpdate.value
  };

  dataRef.doc("food2020").update(newFoodAnswer);

  // opdatere food spørgsmål
  let newHealthAnswer = {
    numOfHealthy: +healthyUpdate.value,
    numOfDead: +deadUpdate.value,
    numOfSick: +sickUpdate.value,
  };

  dataRef.doc("health2020").update(newHealthAnswer);


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


// ============================== DROPDOWN ==============================


function dropDown1(){
      document.querySelector(".arrow-down1").classList.toggle("dropping");
      let panel = document.querySelector(".panel1");
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        console.log("ned");
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        console.log("op");
      }
  }

  function dropDown2(){
    document.querySelector(".arrow-down2").classList.toggle("dropping");
    let panel = document.querySelector(".panel2");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      console.log("ned");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      console.log("op");
    }
}

function dropDown3(){
  document.querySelector(".arrow-down3").classList.toggle("dropping");
  let panel = document.querySelector(".panel3");
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    console.log("ned");
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    console.log("op");
  }
}
  