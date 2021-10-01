import React, { useEffect, useState } from "react";
import { MenuItem, FormControl, Select, CardContent } from "@material-ui/core";
import MapComponent from "./Map";
import Post from "./Post";
import "bootstrap/dist/css/bootstrap.min.css";
import LowerCard from "./LowerCard";
const Card = () => {
  const [details, setDetails] = useState([]);
  const [address, setAddress] = useState("");
  const [userData, setUserData] = useState("");
  const [zoom, setZoom] = useState(2);
  const [mapCenter, setMapCenter] = useState({ lat: "", lng: "" });
  const [loading, setLoading] = useState(true);
  const Handler = async (e) => {
    const code = e.target.value;

    const url = `https://jsonplaceholder.typicode.com/users/${code}`;

    const response1 = await fetch(url);
    const data1 = await response1.json();

    setMapCenter([data1.address.geo.lat, data1.address.geo.lng]);

    // setAddress(e.target.value);
    setUserData(e.target.value);
    setAddress(data1);
    console.log("add", data1);
    setZoom(2);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setDetails(data);
      setLoading(true);
      console.log("details", details);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    if (loading) {
      return <p>loading</p>;
    }
  }, []);
  const { id, name, username, email, phone, website, company } = address;
  return (
    <div>
      <h2>Please select a user to know its location</h2>
      <FormControl className="app__dropdown" placeholder="select">
        <Select
          placeholder="select"
          variant="outlined"
          onChange={Handler}
          // value={address}
          value={userData}
        >
          {details.map((person) => (
            <MenuItem value={person.id}>{person.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <div>
        <br />

        <div class="card">
          <div class="card-header">
            <h1>ID: {address.id}</h1>
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <h4>NAME : {name}</h4>
              <h4>USERNAME : {username}</h4>
              <h5>CONATCT NO : {phone}</h5>
              {/* <h5>Comapny Name:{company.name}</h5> */}
              <p>WEBSITE : {website}</p>
              {/* <p>ADDRESS  :
      {address.address.suite},
      {address.address.street},
      {address.address.city},
      {address.address.zipcode}.
     </p> */}
            </blockquote>
          </div>
        </div>

        <MapComponent centre={mapCenter} zoom={zoom} address={address} />
      </div>
      <Post />
    </div>
  );
};

export default Card;
