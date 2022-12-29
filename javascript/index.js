function updateTime(){
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");

let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");

//Cordoba
let cordobaElement = document.querySelector("#cordoba");
let cordobaDateElement = cordobaElement.querySelector(".date");
let cordobaTimeElement = cordobaElement.querySelector(".time");

let cordobaTime = moment().tz("America/Cordoba");

cordobaDateElement.innerHTML = cordobaTime.format("MMMM Do YYYY");
cordobaTimeElement.innerHTML = cordobaTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);