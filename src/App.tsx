import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import CatCard from "./components/CatCard";
import React from "react";
import { Grid, Container, Paper } from "@mui/material";
import { makeStyles, createStyles, Theme } from "@mui/material/styles";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers.common["x-api-key"] = import.meta.env.VITE_API_KEY;

interface ICats {
  id: string;
  url: string;
  width: number;
  height: number;
}

function App() {
  const [cats, setCats] = React.useState<ICats[]>([]);

  React.useEffect(() => {
    axios
      .get("/images/search?limit=10&order=Desc")
      .then((response) => setCats(response.data));
  }, []);

  if (!cats) return null;

  const catCollection = cats.map((cat) => {
    return (
      <Grid item xs={6} sm={4} md={3}>
        <CatCard key={cat.id} {...cat} />
      </Grid>
    );
  });

  return (
    <Container maxWidth="lg">
      <Header title="Lots of cats" />
      <Grid container spacing={1}>
        {catCollection}
      </Grid>
    </Container>
  );
}

export default App;
