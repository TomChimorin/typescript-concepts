enum WeatherConditions {
    Sunny = 'sunny',
    Cloudy = 'cloudy',
    Rainy = 'rainy',
    Snowy = 'snowy',
}

console.log(WeatherConditions.Sunny);
console.log(WeatherConditions);

const currentWeather = WeatherConditions.Snowy;
console.log(`The current weather is ${currentWeather}`);