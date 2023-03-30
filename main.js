<script>
    var map = L.map('map').setView([-43.883333, 170.516667], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

L.marker([-43.883333, 170.516667]).addTo(map)
    .bindPopup('Lake Tekapo')
    .openPopup();    
    </script> 