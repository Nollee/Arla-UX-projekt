"use strict";


function showCows(){
  let headers = document.querySelectorAll(".data-heading");

  for (let header of headers){
    header.innerHTML ="Antal Køer"
}

let charts = document.querySelectorAll(".chart");

for (let chart of charts){
  chart.classList.add("hidden");
}
  document.querySelector("#cowChart").classList.remove("hidden");


}





function showBulls(){
  let headers = document.querySelectorAll(".data-heading");

      for (let header of headers){
        header.innerHTML ="Antal Tyrer"
     }

     let charts = document.querySelectorAll(".chart");
      
     for (let chart of charts){
      chart.classList.add("hidden");
      }

      document.querySelector("#bullChart").classList.remove("hidden");
}


function showCalves(){
  let headers = document.querySelectorAll(".data-heading");

        for (let header of headers){
          header.innerHTML ="Antal Kalve"
        }

    let charts = document.querySelectorAll(".chart");
  
      for (let chart of charts){
        chart.classList.add("hidden");
      }
        document.querySelector("#calveChart").classList.remove("hidden");
      }

function showCattles(){
  let headers = document.querySelectorAll(".data-heading");

          for (let header of headers){
            header.innerHTML ="Alle Kvæg"
        }

        let charts = document.querySelectorAll(".chart");

        for (let chart of charts){
          chart.classList.add("hidden");
        }
          document.querySelector("#cattleChart").classList.remove("hidden");
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
  appendCalves(_sustainabilityData);
  appendCattles(_sustainabilityData);


});

// 2: preparing the data
function prepareBullData(sustainabilityData) {
  let bulls = [];
  let years = [];
  sustainabilityData.forEach(data => {
    if (data.category === 'cattle') { 

      bulls.push(data.numOfBulls);
      years.push(data.year);
  }
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
        borderColor: "#6F6F6F",
        backgroundColor: "#0B43AA",
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
                beginAtZero: true,
                max: (Math.max(...data.bulls) + 4)

            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
        }],
        xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
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
    if (data.category === 'cattle') { 
      cows.push(data.numOfCows);
      years.push(data.year);
    }
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
        borderColor: "#6F6F6F",
        backgroundColor: "#FF9837",
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
                beginAtZero: true,
                max: (Math.max(...data.cows) + 4)

            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
        }],
        xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }]
    },
      legend: {
        display: false
    }
    }
  });

};

//////////////////////////////////////////////////////////////
/* Calve data */
function prepareCalveData(sustainabilityData) {
  let calves = [];
  let years = [];
  sustainabilityData.forEach(data => {
    if (data.category === 'cattle') { 
      calves.push(data.numOfCalves);
      years.push(data.year);
    }
  });
  return {
    calves,
    years
  }
}
//3: appending the chart
function appendCalves(sustainabilityData) {



  let data = prepareCalveData(sustainabilityData);
  console.log(data);
  // generate chart
  let chartContainer = document.querySelector('#calveChart');

  let chart = new Chart(chartContainer, {
    type: 'bar',
    data: {
      datasets: [{
        data: data.calves,
        label: false,
        fill: false,
        borderColor: "#6F6F6F",
        backgroundColor: "#4BB131",
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
                beginAtZero: true,
                max: (Math.max(...data.calves) + 4)

            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
        }],
        xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }]
    },
      legend: {
        display: false
    }
    }
  });
}

/////////////////////////////////////////////////////////
/* cattle */
// 2: preparing the data
function prepareCattleData(sustainabilityData) {
  let cattles = [];
  let years = [];
  sustainabilityData.forEach(data => {
    if (data.category === 'cattle') { 
      cattles.push(data.numOfCattles);
      years.push(data.year);
    }
  });
  return {
    cattles,
    years
  }
}
//3: appending the chart
function appendCattles(sustainabilityData) {



  let data = prepareCattleData(sustainabilityData);
  console.log(data);
  // generate chart
  let chartContainer = document.querySelector('#cattleChart');

  let chart = new Chart(chartContainer, {
    type: 'line',
    data: {
      datasets: [{
        data: data.cattles,
        label: false,
        fill: false,
        borderColor: "#F8353C",
        backgroundColor: "#e755ba",
        pointBackgroundColor: "#4BB131",
        pointBorderColor: "#4BB131",
        pointHoverBackgroundColor: "#4BB131",
        pointHoverBorderColor: "#4BB131",
      }],
      labels: data.years
    },
    options: {
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                max: (Math.max(...data.cattles) + 4)

            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
        }],
        xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }]
    },
      legend: {
        display: false
    }
    } 
  });
}
