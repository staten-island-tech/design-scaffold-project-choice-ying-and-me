import './style.css'
import { cities } from "./array";

function makeCards() {
    cities.forEach((cities) => {
        document.querySelector(".cities").insertAdjacentHTML(
            "afterbegin",
            `
            <div class="cityCard">
            </div>
            `
        )
    })
}