let stop_lat = -43.883333;
let stop_len = 170.516667;
let zoom= 13;
let title= 'Lake Tekapo';
const STOPS = [
    {
        title: "Christchurch",
        user: "manohog",
        lat: -43.531111,
        lng:172.636667,
        wikipedia: "https://de.wikipedia.org/wiki/Christchurch"
    },
    { 
        title: "Lake Tekapo",
        user: "chris0810",
        lat: -43.883333,
        lng: 170.516667,
        wikipedia:"https://de.wikipedia.org/wiki/Lake_Tekapo"
    },   
    {
        title: "Moeraki Boulders",
        user: "Mirjamkirschner",
        lat: -45.345275,
        lng: 170.826061,
        wikipedia: "https://en.wikipedia.org/wiki/Moeraki_Boulders"
    },
    {
        title: "Milford Sound", 
        user: "julianple",
        lat: -44.616667,
        lng: 167.866667,
        wikipedia: "https://de.wikipedia.org/wiki/Milford_Sound/Piopiotahi"
    }, 
        {
        title: "Wanaka", 
        user: "sebastianv99",
        lat: -44.71,
        lng: 169.16,
        wikipedia: "https://de.wikipedia.org/wiki/Wanaka"
    },
    {
        title:"Der Fox Gletscher",
         user: "grueneli", 
         lat: -43.53, 
         lng: 170.15, 
         wikipedia: "https://de.wikipedia.org/wiki/Fox-Gletscher"
    }, 
    {
        title: "Der Franz-Joseph Gletscher",
        user: "ttfg22",
        lat: -43.5,
        lng: 170.22,
        wikipedia: "https://de.wikipedia.org/wiki/Franz-Josef-Gletscher"
    },
    {   title: "Abel Tasman Nationalpark",
        user: "fabianwild",
        lat: -40.833333,
        lng: 172.9,
        wikipedia: "https://de.wikipedia.org/wiki/Abel-Tasman-Nationalpark"
    },
    {
        title: "Picton", 
        user: "LauraMap",
        lat: -41.293056,
        lng: 174.001944,
        wikipedia: "https://en.wikipedia.org/wiki/Picton,_New_Zealand"    
    },
    {
        title: "Die Hauptstadt von Neuseeland Wellington",
        user: "damerow",
        lat: -41.2875,
        lng: 174.7761,
        Wikipedia: "https://de.wikipedia.org/wiki/Wellington",                
    },
    {
        title: "Tongariro-Nationalpark",
        user: "webmapping",
        lat: -39.2,
        lng: 175.583333,
        wikipedia: "https://de.wikipedia.org/wiki/Tongariro-Nationalpark"
    }, 
    {
        title: "Rotorua",
        user: "juba1508",
        lat: "-38.136944",
        lng: "176.250833",
        wikipedia: "https://de.wikipedia.org/wiki/Rotorua"
    },
    {
        title:"Auckland",
        user: "madeleinehll",
        lat: -36.833333,
        lng: 174.8,
        wikipedia: "https://de.wikipedia.org/wiki/Auckland"
    } ];




let map = L.map('map').setView([stop_lat,stop_len], zoom );

let osm= L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let water=L.tileLayer.provider('Stamen.Watercolor').addTo(map);
let Cycle=L.tileLayer.provider('CyclOSM').addTo(map);
let esri=L.tileLayer.provider('Esri.WorldStreetMap').addTo(map);


L.control.scale({metric : true}).addTo(map);    

map.addControl(new L.Control.Fullscreen());
L.control.layers({
    "Openstreetmap": osm ,
    "Watercolor" : water,
    "CyclOSM": Cycle,
    "Esri.WorldStreetMap": esri,

}).addTo(map);

for (let stop of STOPS){
        
        
        let marker =L.marker([stop.lat,stop.lng],{opacity: 1,}) 
             .addTo(map)
        .bindPopup(`<h3>${stop.title}<h3>
        <a href = ${stop.wikipedia} ">Wikipedia</a>`
        );
        
        
        
        if (stop.user == "chris0810"){
            marker.openPopup();
        console.log("Mein Marker", stop);    
        } 

    }