import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./Style";

const place = [
  { name: "Kacchi Vai" },
  { name: "Sultans Dine" },
  { name: "Kabab Ghor" },
  { name: "Dui Takar singara" },
];

export default function List() {
  const classes = useStyles();
  const [type, setType] = useState("resturants");
  const [ratting, setRatting] = useState();

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Resturants, Hotels & Attraction around you.
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="resturants">Resturants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attraction">Attraction</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Ratting</InputLabel>
        <Select value={ratting} onChange={(e) => setRatting(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {place
          ? place.map((place, i) => (
              <Grid item xs={12} key={i}>
                <PlaceDetails place={place} />
              </Grid>
            ))
          : ""}
      </Grid>
    </div>
  );
}
