const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.getElementById("countdown")


const loading = document.querySelector(".loading");

window.addEventListener("load", ()=>{
    loading.style.display = "block";
    //miliseconds in setTimeout
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "flex"
    }, 1000);
    
    // years.innerHTML = "00";
    // months.innerHTML = "00";
    // days.innerHTML = "00";
    // hours.innerHTML = "00";
    // minutes.innerHTML = "00";
    // seconds.innerHTML = "00";

    let H2Elements = document.getElementsByTagName("h2");

    // for (let index = 0; index < H2Elements.length; index++) {
    //     H2Elements[index].innerHTML = "00";
    // }

    let H2Elements2 = countdown.querySelectorAll("h2");

    //nodeList.forEach()
    //Array.forEach()

    // H2Elements2.forEach((element) =>{
    //     element.innerHTML = "00";

    // })

    // 
    
    [...H2Elements].forEach(el =>{
        el.innerHTML ="00";
    });

});

let selectedBirthday = new Date();

let birthdayInput = document.querySelector("input[name=birthday]");

birthdayInput.addEventListener("change", (event) =>{
    selectedBirthday = new Date(event.target.value);
    if (selectedBirthday> new Date()) {
        alert("Doğum tarihiniz bugünden sonraki bir tarih olamaz!!")
        return; // tarihi ileri tarih girdiğinde resim değişmemesi için..
        
    }
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random')";

    loading.style.display = "block";
    setInterval(updateCountdown, 1000);
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "flex"
    }, 1000);


});

const updateCountdown = () => {
    let dobYear = selectedBirthday.getFullYear();
    let dobMonth = selectedBirthday.getMonth();
    let dobDay = selectedBirthday.getDate();
    let dobHour = selectedBirthday.getHours();
    let dobMinute = selectedBirthday.getMinutes();
    let dobSecond = selectedBirthday.getSeconds();

    let now = new Date(); 

    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay = now.getDate();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    let currentSecond = now.getSeconds();

    let yearOfAge = currentYear - dobYear;
    let monthOfAge = currentMonth - dobMonth;
    let dayOfAge = currentDay - dobDay;
    let hourOfAge = currentHour - dobHour;
    let minuteOfAge = currentMinute - dobMinute;
    let secondOfAge = currentSecond - dobSecond;

    if (secondOfAge < 0) {
        secondOfAge += 60;
        minuteOfAge--;
    }

    if (minuteOfAge < 0) {
        minuteOfAge += 60;
        hourOfAge--;
    }

    if (hourOfAge < 0) {
        hourOfAge += 24;
        dayOfAge--;
    }

    if (dayOfAge < 0){
        dayOfAge += 30;
        monthOfAge --;
    }

    if (monthOfAge < 0){
        monthOfAge += 12;
        yearOfAge --;
    }
 
    
    years.innerHTML = yearOfAge.toString().padStart(2, "0");
    months.innerHTML = monthOfAge.toString().padStart(2, "0");
    days.innerHTML = dayOfAge.toString().padStart(2, "0");
    hours.innerHTML = hourOfAge.toString().padStart(2, "0");
    minutes.innerHTML = minuteOfAge.toString().padStart(2, "0");
    seconds.innerHTML = secondOfAge.toString().padStart(2, "0");

}



