import "./App.css";

import { Container } from "@mui/material";

import { Layout } from "./Layout";

function App() {
  return (
    <div className="App">
      <Container
        sx={{
          bgcolor: "#eee",
          minHeight: "100vh",
          paddingY: 2,
          marginY: 2,
          maxWidth: "960px",
        }}
      >
        <Layout />
      </Container>
    </div>
  );
}

export default App;
