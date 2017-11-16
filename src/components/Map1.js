import  React from "react";

class Map1 extends React.Component{
  render(){
    return(
    
  function initMap() {
  const uluru = {lat: 29.329, lng: -95.051};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map
  });
}
	
    
    )
  }
}
export default Map1;
