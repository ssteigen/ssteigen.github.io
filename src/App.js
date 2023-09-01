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

        <Box sx={{ py: 10 }}>
          <Container id="about" maxWidth="sm">
            <About />
          </Container>
        </Box>

        <Box sx={{ backgroundColor: "#eee", py: 10 }}>
          <Container id="projects">
            <Projects />
          </Container>
        </Box>

        <Box component="footer" textAlign='center' sx={{ py: 2 }}>
          <Container>
            <Footer />
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default App;
