import { CssBaseline, Grid } from "@material-ui/core";
import React from "react";
import Header from "./component/Header/Header";
import List from "./component/List/List";
import Map from "./component/Map/Map";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spaching={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}
