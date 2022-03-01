const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const loading = document.querySelector(".loading");

window.addEventListener("load", ()=>{
    loading.style.display = "block";
    //miliseconds in setTimeout
    setTimeout(()=>{
        loading.style.display = "none";
    }, 1500)      
});