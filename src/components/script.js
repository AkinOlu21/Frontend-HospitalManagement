

mapboxgl.accessToken = 'pk.eyJ1IjoiYWtpbjEyMyIsImEiOiJjbHZmcnlqcTYwazV4MmpvNWs5bG0wNDVzIn0.YIAS8yMyaCGuKNTlylhV4g';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})


function successLocation(position) {
console.log(position)
setUpMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
setUpMap([-2.24, 53.48])

}

function setUpMap(center) {
    const map = new mapboxgl.Map({
     container: 'map',
     style: 'mapbox://styles/mapbox/streets-v11',
     center: center,
     zoom: 15
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
});

map.addControl(directions, 'top-left')

}



