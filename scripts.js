// Check if the Geolocation API is supported by the browser
if (navigator.geolocation) {
    // Get the location
    document.getElementById("getLocation").addEventListener("click", getLocation);
  } else {
    // Display an error message
    alert("Geolocation is not supported by this browser.");
  }
  
  // Get the user's location
  function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  
  // Show the user's position on the map
  function showPosition(position) {
    // Save the latitude and longitude in localStorage
    localStorage.setItem("lat", position.coords.latitude);
    localStorage.setItem("long", position.coords.longitude);
  
    // Disable the Get Location button
    document.getElementById("getLocation").disabled = true;
  
    // Show the map
    const mapDiv = document.getElementById("map");
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const mapUrl = `https://maps.google.com/maps?q=${lat},${long}&output=embed`;
    mapDiv.innerHTML = `<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="${mapUrl}"></iframe>`;
  
    // Add event listener to the Remove Location button
    document.getElementById("removeLocation").addEventListener("click", removeLocation);
  }
  
  // Remove the user's location from localStorage and reload the page
  function removeLocation() {
    localStorage.removeItem("lat");
    localStorage.removeItem("long");
    location.reload();
  }
  
  // Check if the user's location is already in localStorage
  if (localStorage.getItem("lat") && localStorage.getItem("long")) {
    // Disable the Get Location button
    document.getElementById("getLocation").disabled = true;
  
    // Show the map
    const mapDiv = document.getElementById("map");
    const lat = localStorage.getItem("lat");
    const long = localStorage.getItem("long");
    const mapUrl = `https://maps.google.com/maps?q=${lat},${long}&output=embed`;
    mapDiv.innerHTML = `<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="${mapUrl}"></iframe>`;
  
    // Add event listener to the Remove Location button
    document.getElementById("removeLocation").addEventListener("click", removeLocation);
  }
  ``
  
