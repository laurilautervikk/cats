//import react from "react";
import React from "react";
import axios from "axios";
import CatCard from "./CatCard";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
});

export default function Body() {
  const [cats, setCats] = React.useState([]);
  const classes = useStyles();

  React.useEffect(() => {
    axios
      .get("/images/search?limit=12&order=Desc")
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
    <Grid container spacing={1} className={classes.root}>
      {catCollection}
    </Grid>
  );
}
