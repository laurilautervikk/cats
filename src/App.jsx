import "./App.css";
import axios from "axios";
import Header from "./componets/Header";
import Body from "./componets/Body";
import { Container } from "@mui/material";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers.common["x-api-key"] = import.meta.env.VITE_API_KEY;

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Body />
    </Container>
  );
}

export default App;
