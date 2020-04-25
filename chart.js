"use strict";


function showCows(){
  document.getElementById("data-heading").innerHTML ="Antal Køer"

  document.querySelector("#cowChart").classList.remove("hidden");
  document.querySelector("#bullChart").classList.add("hidden");

}

function showBulls(){
  document.getElementById("data-heading").innerHTML ="Antal Tyrer"

  document.querySelector("#bullChart").classList.remove("hidden");
  document.querySelector("#cowChart").classList.add("hidden");
}



// ========== GLOBAL VARIABLES ========== //
const _dataRef = db.collection("data");
let _sustainabilityData;

// 1: data from firebase
// listen for changes on _dataRef
_dataRef.orderBy("year").onSnapshot(snapshotData => {
  _sustainabilityData = []; // reset _sustainabilityData
  snapshotData.forEach(doc => { // loop through snapshotData - like for of loop
    let data = doc.data(); // save the data in a variable
    data.id = doc.id; // add the id to the data variable
    _sustainabilityData.push(data); // push the data object to the global array _sustainabilityData
  });
  console.log(_sustainabilityData);
  appendBulls(_sustainabilityData);
  appendCows(_sustainabilityData);


});

// 2: preparing the data
function prepareBullData(sustainabilityData) {
  let bulls = [];
  let years = [];
  sustainabilityData.forEach(data => {
      bulls.push(data.numOfBulls);
      years.push(data.year);
  });
  return {
    bulls,
    years
  }
}
//3: appending the chart
function appendBulls(sustainabilityData) {



  let data = prepareBullData(sustainabilityData);
  console.log(data);
  // generate chart
  let chartContainer = document.querySelector('#bullChart');

  let chart = new Chart(chartContainer, {
    type: 'bar',
    data: {
      datasets: [{
        data: data.bulls,
        label: false,
        fill: false,
        borderColor: "#e755ba",
        backgroundColor: "#e755ba",
        pointBackgroundColor: "#55bae7",
        pointBorderColor: "#55bae7",
        pointHoverBackgroundColor: "#55bae7",
        pointHoverBorderColor: "#55bae7",
      }],
      labels: data.years
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: (Math.min(...data.bulls) - 5),
            max: (Math.max(...data.bulls) + 1)
          }
        }]
      },
      legend: {
        display: false
    }
    }
  });
}




function prepareCowData(sustainabilityData) {
  let cows = [];
  let years = [];
  sustainabilityData.forEach(data => {
      cows.push(data.numOfCows);
      years.push(data.year);
  });
  return {
    cows,
    years
  }
}



//3: appending the chart
function appendCows(sustainabilityData) {
  let data = prepareCowData(sustainabilityData);
  console.log(data);
  // generate chart
  let cowContainer = document.querySelector('#cowChart');
  let chart = new Chart(cowContainer, {
    type: 'bar',
    data: {
      datasets: [{
        data: data.cows,
        label: false,
        fill: false,
        borderColor: "#e755ba",
        backgroundColor: "#e755ba",
        pointBackgroundColor: "#55bae7",
        pointBorderColor: "#55bae7",
        pointHoverBackgroundColor: "#55bae7",
        pointHoverBorderColor: "#55bae7",
      }],
      labels: data.years
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: (Math.min(...data.cows) - 5),
            max: (Math.max(...data.cows) + 1)
          }
        }]
      },
      legend: {
        display: false
    }
    }
  });

};