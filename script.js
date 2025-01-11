// Example script to initialize an interactive map using Leaflet.js
document.addEventListener('DOMContentLoaded', () => {
    var map = L.map('map-container').setView([48.8566, 2.3522], 10); // Paris coordinates as an example

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});
