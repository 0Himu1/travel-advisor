import GoogleMapReact from "google-map-react";
import React from "react";
import useStyles from "./Style";

const coordinates = { lat: 0, lng: 0 };
export default function Map() {
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB6aBCkpCwVSUJ_WS05fTZS41HC5xYXxqk" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
}
