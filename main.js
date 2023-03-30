let stop_lat = -43.883333;
let stop_len = 170.516667;
let zoom= 13;
let title= 'Lake Tekapo';
let map = L.map('map').setView([stop_lat,stop_len], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([stop_lat,stop_len]).addTo(map)
    .bindPopup(title)
    .openPopup();    
