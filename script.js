const trafficLights = document.querySelectorAll(".light");
const cars = document.querySelectorAll(".car");

let currentLightIndex = 0;

// Set different interval timings for each car (adjust as needed)
const carIntervals = [2000, 3000, 4000]; // in milliseconds

function toggleTrafficLight() {
    trafficLights[currentLightIndex].classList.remove("active");
    currentLightIndex = (currentLightIndex + 1) % 3;
    trafficLights[currentLightIndex].classList.add("active");

    if (currentLightIndex === 0) {
        // Red light
        cars.forEach((car, index) => {
            setTimeout(() => {
                car.style.animationPlayState = "paused";
            }, carIntervals[index]);
        });

        // Illuminate the red light
        trafficLights[0].classList.add("active");
        trafficLights[1].classList.remove("active");
        trafficLights[2].classList.remove("active");
    } else if (currentLightIndex === 2) {
        // Green light
        cars.forEach(car => {
            car.style.animationPlayState = "running";
            car.style.animationDuration = "5s"; // 
        });

        // Illuminate the green light
        trafficLights[0].classList.remove("active");
        trafficLights[1].classList.remove("active");
        trafficLights[2].classList.add("active");
    } else {
        // Yellow light
        cars.forEach(car => car.style.animationPlayState = "paused");

        // Illuminate the yellow light
        trafficLights[0].classList.remove("active");
        trafficLights[1].classList.add("active");
        trafficLights[2].classList.remove("active");
    }
}

setInterval(toggleTrafficLight, 3500); // Change traffic light every 3.5 seconds