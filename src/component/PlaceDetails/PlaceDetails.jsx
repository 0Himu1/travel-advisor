import { Card, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import useStyle from "./Style";

export default function PlaceDetails({ place }) {
  const classes = useStyle();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <Typography></Typography>
    </Card>
  );
}
