import "../styles/style.css";
import { cities } from "./array";
import { gsap } from "gsap";

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
                    alt="${cities.City}">
                <div class="text-wrapper">
                    <h2 class="cityName">${cities.City}, ${cities.Country}</h2>
                </div>
            </div>
            `
        )
    });
}
makeCards();

window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})