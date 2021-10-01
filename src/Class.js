import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 import React,{Component} from 'react';
 class MapContainer extends Component {
  render() {
    return (
      


      <Map
      // google={this.props.google}
      
      center={{
        lat: 20.59, lng: 78.96
      }}
      zoom={15}
      onClick={this.onMapClicked}
    />
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
})(MapContainer)