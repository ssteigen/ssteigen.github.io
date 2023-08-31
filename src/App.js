import "./App.css";

import { Box, Container } from "@mui/material";

import { Header } from "./Header";
import { About } from "./About";
import { Projects } from "./Projects";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Container>
          <About id="about" />
          <Projects id="projects" />
        </Container>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
