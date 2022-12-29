//update Time

function updateTime(){
    //Los Angeles
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");

        let losAngelesTime = moment().tz("America/Los_Angeles");

        losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
        losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
    }

    //Cordoba
    let cordobaElement = document.querySelector("#cordoba");
    if (cordobaElement) {
        let cordobaDateElement = cordobaElement.querySelector(".date");
        let cordobaTimeElement = cordobaElement.querySelector(".time");

        let cordobaTime = moment().tz("America/Cordoba");

        cordobaDateElement.innerHTML = cordobaTime.format("MMMM Do YYYY");
        cordobaTimeElement.innerHTML = cordobaTime.format("h:mm:ss [<small>]A[</small>]");
    }
}


updateTime();
setInterval(updateTime, 1000);

//update city

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    `;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);