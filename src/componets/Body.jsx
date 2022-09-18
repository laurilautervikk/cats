//import react from "react";
import React from "react";
import axios from "axios";
import CatCard from "./CatCard";
import { Grid } from "@mui/material";

export default function Body() {
  const [cats, setCats] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/images/search?limit=10&order=Desc")
      .then((response) => setCats(response.data));
  }, []);

  if (!cats) return null;

  const catCollection = cats.map((cat) => {
    return (
      <Grid item key={cat.id + "-grid"}>
        <CatCard key={cat.id} {...cat} />
      </Grid>
    );
  });

  return (
    <Grid container spacing={1}>
      {catCollection}
    </Grid>
  );
}
