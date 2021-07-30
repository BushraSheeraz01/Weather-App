const api = {
    key: '38cddc446326c4195f76ee6df9cdebc0',
    base: "https://api.openweathermap.org/data/2.5/",

}


$(document).ready(function(){
    $("#btn").on('click', function() {
        var data=$('.search-box').val();
        getResults(data);
    });
});


// const searchbox = document.querySelector('.search-box');
// if(searchbox){
//     searchbox.addEventListener('keypress', setQuery);
// }

// getResults('Karachi');

// function setQuery(evt){
//     if(evt.keyCode == 13){
//         getResults(searchbox.value);
//         console.log(searchbox.value);
//     }
// }

function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
    .then(response =>{
        return response.json();
    }).then(displayResults);
}

function displayResults(response){
    console.log(response.weather[0].id);
    document.getElementById('city').innerHTML=response.name;


    // for bg-img
    // let SmokeImg = document.createElement('image');
    // SmokeImg.src = 'Smoke.jpg';

    // if(response.weather.description == "drizzle"){
    //     document.getElementById('img').appendChild(image);
    // }

  // for date

    const d = new Date();
    document.getElementById("date").innerHTML = d.toDateString();


    // for temprature conversion
    let temp = document.getElementById('temprature');
    temperature.innerHTML = `${Math.round(response.main.temp)}<span>°C</span>`;

    document.getElementById('weather').innerHTML=response.weather[0].description;
    // document.getElementById('hi-low').innerText= `${response.main.temp_min}*C / ${respone.main.temp_max}*C`;
}
