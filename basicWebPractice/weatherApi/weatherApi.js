const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7f5056762emsh1bbdeeea273dd57p154333jsn8efa0a17ab88',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


function getWeather(city){

    cityName.innerHTML = city;


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response);
    
        cloud_pct.innerText = response.cloud_pct;
        temp.innerText = response.temp;
        temp2.innerText = response.temp;
        feels_like.innerText = response.feels_like;
        humidity.innerText = response.humidity;
        min_temp.innerText = response.min_temp;
        max_temp.innerText = response.max_temp;
        wind_speed.innerText = response.wind_speed;
        wind_degrees.innerText = response.wind_degrees;
        sunrise.innerText = response.sunrise;
        sunset.innerText = response.sunset;
    
        
    })
	.catch(err => console.error(err));
// console.log("hello");

}
    submit.addEventListener("click", (e)=>{
        e.preventDefault()
        getWeather(city.value)
    })

getWeather("delhi")