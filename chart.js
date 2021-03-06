"use strict";

function showCows() {
  let headers = document.querySelectorAll(".data-heading");

  for (let header of headers) {
    header.innerHTML = "Antal Køer";
  }

  let charts = document.querySelectorAll(".chart");

  for (let chart of charts) {
    chart.classList.add("hidden");
  }
  document.querySelector("#cowChart").classList.remove("hidden");
}

function showBulls() {
  let headers = document.querySelectorAll(".data-heading");

  for (let header of headers) {
    header.innerHTML = "Antal Tyrer";
  }

  let charts = document.querySelectorAll(".chart");

  for (let chart of charts) {
    chart.classList.add("hidden");
  }

  document.querySelector("#bullChart").classList.remove("hidden");
}

function showCalves() {
  let headers = document.querySelectorAll(".data-heading");

  for (let header of headers) {
    header.innerHTML = "Antal Kalve";
  }

  let charts = document.querySelectorAll(".chart");

  for (let chart of charts) {
    chart.classList.add("hidden");
  }
  document.querySelector("#calveChart").classList.remove("hidden");
}

function showCattles() {
  let headers = document.querySelectorAll(".data-heading");

  for (let header of headers) {
    header.innerHTML = "Alle Kvæg";
  }

  let charts = document.querySelectorAll(".chart");

  for (let chart of charts) {
    chart.classList.add("hidden");
  }
  document.querySelector("#cattleChart").classList.remove("hidden");
}

function showFood() {
  let headers = document.querySelectorAll(".data-heading");

  for (let header of headers) {
    header.innerHTML = "Alt foder (Kg. per kvæg)";
  }

  let charts = document.querySelectorAll(".chart");

  for (let chart of charts) {
    chart.classList.add("hidden");
  }
  document.querySelector("#foodChart").classList.remove("hidden");
}

function showSick() {
  let headers = document.querySelectorAll(".data-heading");

  for (let header of headers) {
    header.innerHTML = "Antal syge kvæg";
  }

  let charts = document.querySelectorAll(".chart");

  for (let chart of charts) {
    chart.classList.add("hidden");
  }
  document.querySelector("#sickChart").classList.remove("hidden");
}

function showDead() {
  let headers = document.querySelectorAll(".data-heading");

  for (let header of headers) {
    header.innerHTML = "Antal døde kvæg";
  }

  let charts = document.querySelectorAll(".chart");

  for (let chart of charts) {
    chart.classList.add("hidden");
  }
  document.querySelector("#deadChart").classList.remove("hidden");
}

// ========== GLOBAL VARIABLES ========== //
const _dataRef = db.collection("data");
let _sustainabilityData;

// 1: data from firebase
// listen for changes on _dataRef
_dataRef.orderBy("year").onSnapshot((snapshotData) => {
  _sustainabilityData = []; // reset _sustainabilityData
  snapshotData.forEach((doc) => {
    // loop through snapshotData - like for of loop
    let data = doc.data(); // save the data in a variable
    data.id = doc.id; // add the id to the data variable
    _sustainabilityData.push(data); // push the data object to the global array _sustainabilityData
  });
  appendBulls(_sustainabilityData);
  appendCows(_sustainabilityData);
  appendCalves(_sustainabilityData);
  appendCattles(_sustainabilityData);
  appendFood(_sustainabilityData);
  appendSick(_sustainabilityData);
  appendDead(_sustainabilityData);
});

// 2: preparing the data
function prepareBullData(sustainabilityData) {
  let bulls = [];
  let years = [];
  sustainabilityData.forEach((data) => {
    if (data.category === "cattle") {
      bulls.push(data.numOfBulls);
      years.push(data.year);
    }
  });
  return {
    bulls,
    years,
  };
}
//3: appending the chart
function appendBulls(sustainabilityData) {
  let data = prepareBullData(sustainabilityData);
  // generate chart
  let chartContainer = document.querySelector("#bullChart");

  let chart = new Chart(chartContainer, {
    type: "bar",
    data: {
      datasets: [
        {
          data: data.bulls,
          label: false,
          fill: false,
          borderColor: "#6F6F6F",
          backgroundColor: "#0B43AA",
          pointBackgroundColor: "#55bae7",
          pointBorderColor: "#55bae7",
          pointHoverBackgroundColor: "#55bae7",
          pointHoverBorderColor: "#55bae7",
        },
      ],
      labels: data.years,
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: Math.max(...data.bulls) + 4,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
}

function prepareCowData(sustainabilityData) {
  let cows = [];
  let years = [];
  sustainabilityData.forEach((data) => {
    if (data.category === "cattle") {
      cows.push(data.numOfCows);
      years.push(data.year);
    }
  });
  return {
    cows,
    years,
  };
}

//3: appending the chart
function appendCows(sustainabilityData) {
  let data = prepareCowData(sustainabilityData);
  // generate chart
  let cowContainer = document.querySelector("#cowChart");
  let chart = new Chart(cowContainer, {
    type: "bar",
    data: {
      datasets: [
        {
          data: data.cows,
          label: false,
          fill: false,
          borderColor: "#6F6F6F",
          backgroundColor: "#FF9837",
          pointBackgroundColor: "#55bae7",
          pointBorderColor: "#55bae7",
          pointHoverBackgroundColor: "#55bae7",
          pointHoverBorderColor: "#55bae7",
        },
      ],
      labels: data.years,
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: Math.max(...data.cows) + 4,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
}

//////////////////////////////////////////////////////////////
/* Calve data */
function prepareCalveData(sustainabilityData) {
  let calves = [];
  let years = [];
  sustainabilityData.forEach((data) => {
    if (data.category === "cattle") {
      calves.push(data.numOfCalves);
      years.push(data.year);
    }
  });
  return {
    calves,
    years,
  };
}
//3: appending the chart
function appendCalves(sustainabilityData) {
  let data = prepareCalveData(sustainabilityData);
  // generate chart
  let chartContainer = document.querySelector("#calveChart");

  let chart = new Chart(chartContainer, {
    type: "bar",
    data: {
      datasets: [
        {
          data: data.calves,
          label: false,
          fill: false,
          borderColor: "#6F6F6F",
          backgroundColor: "#4BB131",
          pointBackgroundColor: "#55bae7",
          pointBorderColor: "#55bae7",
          pointHoverBackgroundColor: "#55bae7",
          pointHoverBorderColor: "#55bae7",
        },
      ],
      labels: data.years,
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: Math.max(...data.calves) + 4,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
}

/////////////////////////////////////////////////////////
/* cattle */
// 2: preparing the data
function prepareCattleData(sustainabilityData) {
  let cattles = [];
  let years = [];
  sustainabilityData.forEach((data) => {
    if (data.category === "cattle") {
      cattles.push(data.numOfCattles);
      years.push(data.year);
    }
  });
  return {
    cattles,
    years,
  };
}
//3: appending the chart
function appendCattles(sustainabilityData) {
  let data = prepareCattleData(sustainabilityData);
  // generate chart
  let chartContainer = document.querySelector("#cattleChart");

  let chart = new Chart(chartContainer, {
    type: "line",
    data: {
      datasets: [
        {
          data: data.cattles,
          label: false,
          fill: true,
          borderColor: "#FF9837",
          backgroundColor: "#0B43AA",
          pointBackgroundColor: "#5AD0EF",
          pointBorderColor: "#5AD0EF",
          pointHoverBackgroundColor: "#4BB131",
          pointHoverBorderColor: "#4BB131",
        },
      ],
      labels: data.years,
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: Math.max(...data.cattles) + 4,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
}

function prepareFoodData(sustainabilityData) {
  let food = [];
  let years = [];
  sustainabilityData.forEach((data) => {
    if (data.category === "food") {
      food.push(data.numOfFoodTotal);
      years.push(data.year);
    }
  });
  return {
    food,
    years,
  };
}

//3: appending the chart
function appendFood(sustainabilityData) {
  let data = prepareFoodData(sustainabilityData);
  // generate chart
  let chartContainer = document.querySelector("#foodChart");

  let chart = new Chart(chartContainer, {
    type: "bar",
    data: {
      datasets: [
        {
          data: data.food,
          label: false,
          fill: false,
          borderColor: "#6F6F6F",
          backgroundColor: "#0B43AA",
          pointBackgroundColor: "#55bae7",
          pointBorderColor: "#55bae7",
          pointHoverBackgroundColor: "#55bae7",
          pointHoverBorderColor: "#55bae7",
        },
      ],
      labels: data.years,
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: Math.max(...data.food) + 4,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
}

function prepareSickData(sustainabilityData) {
  let sick = [];
  let years = [];
  sustainabilityData.forEach((data) => {
    if (data.category === "health") {
      sick.push(data.numOfSick);
      years.push(data.year);
    }
  });
  return {
    sick,
    years,
  };
}

//3: appending the chart
function appendSick(sustainabilityData) {
  let data = prepareSickData(sustainabilityData);
  // generate chart
  let chartContainer = document.querySelector("#sickChart");

  let chart = new Chart(chartContainer, {
    type: "line",
    data: {
      datasets: [
        {
          data: data.sick,
          label: false,
          fill: true,
          borderColor: "#FF9837",
          backgroundColor: "#0B43AA",
          pointBackgroundColor: "#55bae7",
          pointBorderColor: "#55bae7",
          pointHoverBackgroundColor: "#55bae7",
          pointHoverBorderColor: "#55bae7",
        },
      ],
      labels: data.years,
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: Math.max(...data.sick) + 4,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
}

function prepareDeadData(sustainabilityData) {
  let dead = [];
  let years = [];
  sustainabilityData.forEach((data) => {
    if (data.category === "health") {
      dead.push(data.numOfDead);
      years.push(data.year);
    }
  });
  return {
    dead,
    years,
  };
}

//3: appending the chart
function appendDead(sustainabilityData) {
  let data = prepareDeadData(sustainabilityData);
  // generate chart
  let chartContainer = document.querySelector("#deadChart");

  let chart = new Chart(chartContainer, {
    type: "bar",
    data: {
      datasets: [
        {
          data: data.dead,
          label: false,
          fill: false,
          borderColor: "#6F6F6F",
          backgroundColor: "#0B43AA",
          pointBackgroundColor: "#55bae7",
          pointBorderColor: "#55bae7",
          pointHoverBackgroundColor: "#55bae7",
          pointHoverBorderColor: "#55bae7",
        },
      ],
      labels: data.years,
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: Math.max(...data.dead) + 4,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
}
