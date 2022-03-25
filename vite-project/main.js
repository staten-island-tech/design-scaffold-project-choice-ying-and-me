import './style.css'
import { cities } from "./array";

console.log(cities)

let sortedCities = cities.sort(function(a, b) {
    return a.id - b.id;
})
.reverse();
console.log(sortedCities)

function makeCards() {
    sortedCities.forEach((cities) => {
        document.querySelector(".cities").insertAdjacentHTML(
            "afterbegin",
            `
            <div class="cityCard">
                <img class="cityImage" 
                    src=${cities.Image}
                </a>
                <h2 class="cityName">${cities.City}</h2>
                <h2 class="cityCountry">${cities.Country}</h2>
            </div>
            `
        )
    });
}
makeCards();