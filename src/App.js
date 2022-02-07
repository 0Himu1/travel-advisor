import { CssBaseline, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import getPlacesDeta from "./API/index";
import Header from "./component/Header/Header";
import List from "./component/List/List";
import Map from "./component/Map/Map";

export default function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});

  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [type, setType] = useState("restaurants");
  const [ratting, setRatting] = useState();

  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > ratting);

    setFilteredPlaces(filtered);
  }, [ratting, places]);

  useEffect(() => {
    setLoading(true);
    getPlacesDeta(type, bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
      setLoading(false);
      setFilteredPlaces([]);
    });
  }, [type, bounds, coordinates]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spaching={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            loading={loading}
            type={type}
            setType={setType}
            ratting={ratting}
            setRatting={setRatting}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            places={filteredPlaces.length ? filteredPlaces : places}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
}
