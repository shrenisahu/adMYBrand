import React ,{useState,useMapEvents}from 'react'
import { MapContainer, TileLayer, Marker, Popup ,Circle,Rectangle} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
const MapComponent = ({centre,zoom,address}) => {

    
    return (
        <div>
             <MapContainer center={centre } zoom={zoom} scrollWheelZoom={false}
        style={{height:"600px",width:"1500px"}}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={centre} src="https://source.unsplash.com/user/erondu/16x9">
    <Popup>
        <h6> {address.name}.</h6> 
        <br></br> 
        <p>
        {address.address.suite},
      {address.address.street},
      {address.address.city},
      {address.address.zipcode}.


        </p>
      </Popup>
   
    </Marker>
    <Circle center={centre} radius={2000}     >
   
    </Circle>
    
  </MapContainer>
        </div>
    )
}

export default MapComponent
