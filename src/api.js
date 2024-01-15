function refreshWeather(response){
let temperatureElement = document.querySelector("#temperature"); 
let temperature = response.data.temperature.current;   
let cityElement = document.querySelector("#weather-city");
cityElement.innerHTML = response.data.city;
    
temperatureElement.innerHTML = Math.round(temperature);
    
}
   
 
    
   
   
   
    
  function searchCity(city) {
    let apiKey = "4of5564b133542e414ea78cf60tfb23d";
    let apiUrl =  'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric';
    axios.get(apiUrl).then(refreshWeather);
     
      
    }  
   
    
function handleSearchSubmit(event) {
    event.preventDefault(); 
    let searchInput = document.querySelector("#search-form-input");
   
     searchCity(searchInput.value);
   }
     
 let formElement = document.querySelector("#form");
 formElement.addEventListener("submit", handleSearchSubmit);   
  
       
searchCity("Paris");  
    
    
    
    
 