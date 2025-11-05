import axios from "axios";
import * as readline from "readline-sync";
const apiKey = "6d06218a14f874232b4c2cde5f829fa6";
async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await axios.get(url);
        const data = response.data;
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        console.log(`\nWeather in ${data.name}, ${data.sys.country}:`);
        console.log(`Temperature : ${data.main.temp}°C`);
        console.log(`Condition   : ${data.weather[0].description}`);
        console.log(`Humidity    : ${data.main.humidity}%`);
        console.log(`Wind Speed  : ${data.wind.speed} m/s`);
        console.log(`Sunrise Time : ${sunrise}`);
        console.log(`Sunset Time : ${sunset}`);
    }
    catch (error) {
        console.log("\nCity not found or error fetching data!");
        if (error.response) {
            console.log("API message:", error.response.data.message);
        }
    }
}
while (true) {
    const city = readline.question("\nEnter City name (or type 'exit' to quit): ");
    if (city.toLowerCase() === "exit") {
        console.log("Goodbye! 🌤️");
        break;
    }
    await getWeather(city);
}
//# sourceMappingURL=index.js.map