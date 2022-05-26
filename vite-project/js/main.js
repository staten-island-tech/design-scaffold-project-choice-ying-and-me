import "../styles/style.css";
import { cities } from "./array";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";

const parrallax = document.getElementById("");

window.addEventListener("scroll", function ()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})

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

const DOMSelectors = {
    cities: document.querySelector(".cities"),
}

window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter("#skewElem", "skewY", "deg"),
    clamp = gsap.utils.clamp(-20, 20);

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});


VanillaTilt.init(document.querySelectorAll(".cityCard"), {
    max: 5,
    speed: 5000,
    reverse: true,
});

VanillaTilt.init(document.querySelectorAll(".eiffelImage"), {
    max: 2,
    speed: 5000,
    reverse: true,
});

VanillaTilt.init(document.querySelectorAll(".buckinghamImage"), {
    max: 2,
    speed: 5000,
    reverse: true,
});

VanillaTilt.init(document.querySelectorAll(".ibizaImage"), {
    max: 2,
    speed: 5000,
    reverse: true,
});

VanillaTilt.init(document.querySelectorAll(".colosseumImage"), {
    max: 2,
    speed: 5000,
    reverse: true,
});

VanillaTilt.init(document.querySelectorAll(".passportUS"), {
    max: 5,
    speed: 5000,
    reverse: true,
    glare: true,
    maxGlare: .5,
});