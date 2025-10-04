//http://api.weatherapi.com/v1/current.json?key=3d585138527745d1908120850253009&q=mumbai&aqi=no
const temperatureField = document.querySelector('.temperature')
const locationField = document.querySelector('.time_location p')
const dateandTimeField = document.querySelector('.time_location span')
const conditionField = document.querySelector('.condition p')
const searchField = document.querySelector('.search_area')
const form = document.querySelector('form')
const searchbutton = document.querySelector('.search_button');

form.addEventListener('submit',searchForLocation)
searchbutton.addEventListener('click', searchForLocation);
//dynamic url
let target='mumbai'
const fetchResults = async (targetLocation) =>{
    let url = `https://api.weatherapi.com/v1/current.json?key=3d585138527745d1908120850253009&q=${targetLocation}&aqi=no`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;

    updateDetails(temp, locationName, time, condition)

}
function updateDetails(temp, locationName, time, condition){
    let splitDate = time.split(" ")[0]
    let splitTime = time.split(" ")[1]
    let currentDay = getDayName(new Date(splitDate).getDay())
    temperatureField.innerText = temp
    locationField.innerText = locationName
    dateandTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`
    conditionField.innerText = condition
}
function searchForLocation(e){
    e.preventDefault()
    target=searchField.value
    fetchResults(target)
}

fetchResults(target)


function getDayName(number){
    switch(number){
        case 0: return "Sunday"
        case 1: return "Monday"
        case 2: return "Tuesday"
        case 3: return "Wednesday"
        case 4: return "Thursday"
        case 5: return "Friday"
        case 6: return "Saturday"
        default: return ""
    }
}

/*const temperaturefield = document.querySelector('.temperature');
const locationfield = document.querySelector('.time_location p');
const dataField = document.querySelector('.time_location span');
const weatherField = document.querySelector('.condition p');
const searchField = document.querySelector('.search_area');
const searchbutton = document.querySelector('.search_button');
const form = document.querySelector('form');

// Initial location
let target = 'mumbai';

const fetchResults = async (targetLocation) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=3d585138527745d1908120850253009&q=${targetLocation}&aqi=no`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.error) {
            console.error("API Error:", data.error.message);
            return;
        }

        // Extract data safely
        const locationName = data.location.name;
        const time = data.location.localtime;
        const temp_c = data.current.temp_c;
        const conditionText = data.current.condition.text;

        // Update UI
        temperaturefield.textContent = temp_c + "°C";
        locationfield.textContent = locationName;
        dataField.textContent = time;
        weatherField.textContent = conditionText;

    } catch (error) {
        console.error("Fetch failed:", error);
    }
};

fetchResults(target);

// Event handler for searching
function searchForLocation(event) {
    event.preventDefault();
    const input = searchField.value.trim();
    if (!input) return;
    target = input;
    fetchResults(target);
}

// Hook up search button
searchbutton.addEventListener('click', searchForLocation);*/

 //static url
/*const fetchResults = async () =>{
    let url='http://api.weatherapi.com/v1/current.json?key=3d585138527745d1908120850253009&q=mumbai&aqi=no'
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}
fetchResults() */
/*const fetchResults = async () =>{
    let url='http://api.weatherapi.com/v1/current.json?key=3d585138527745d1908120850253009&q=mumbai&aqi=no'
    const res = await fetch(url);
    console.log(res);
}
fetchResults() */