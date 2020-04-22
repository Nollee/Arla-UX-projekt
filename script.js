
function cowData(){
    document.querySelector(".cow-nav").classList.add('next');
    document.querySelector(".last-nav").classList.add('next');

};


function antalData(){
  document.querySelector(".antal-nav").style.zIndex = 15;
    document.querySelector(".helbred-nav").style.zIndex = 10;

}

function lastData(){
    let lastNav = document.querySelectorAll(".last-nav");
    for (let nav of lastNav){
        nav.classList.add('last');
    }
};

function helbredData(){
    document.querySelector(".antal-nav").style.zIndex = 10;
    document.querySelector(".helbred-nav").style.zIndex = 15;

}

function remove(){
    let elements = document.querySelectorAll("div");

    for (let element of elements){
        element.classList.remove("last")
        element.classList.remove("next")
    }
}

