import { Divider, Grid } from "@mui/material";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Header } from "./Header";
import { Profile } from "./Profile";
import { Projects } from "./Projects";

const divider = (
  <Divider
    variant="middle"
    sx={{ borderWidth: 1, borderColor: "gray", marginY: 1 }}
  />
);

export function Layout() {
  return (
    <>
      <Header />
      {divider}
      <Grid container justifyContent='space-between'>
        <Grid item sm='4'>
          <Contact />
          {divider}
          <Education />
        </Grid>
        <Grid item sm='auto'>
          <Divider
            orientation="vertical"

            // sx={{ borderWidth: 1, borderColor: "gray" }}
          />
        </Grid>
        <Grid item sm>
          <Profile />
          {divider}
          <Experience />
          {divider}
          <Projects />
        </Grid>
      </Grid>
    </>
  );
}
