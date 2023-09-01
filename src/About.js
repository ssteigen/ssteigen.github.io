import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import { Download, Email } from "@mui/icons-material";

export function About() {
  return (
    <Stack direction="column" spacing={6} alignItems="center">
      <Avatar
        sx={{ width: 300, height: 300 }}
        src="img/me-and-mouse.jpg"
        alt="San Steigen"
      />
      <Box>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          gutterBottom
        >
          Hi, I'm San!
        </Typography>
        <Typography
          variant="h5"
          align="center"
          component="p"
        >
          I'm a <span className="brand">Web Developer</span> looking for a
          highly collaborative, product-focused company.
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          sx={{ mt: 2 }}
          justifyContent="center"
        >
          <IconButton
            sx={{ border: "2px solid" }}
            color="secondary"
            href="https://www.linkedin.com/in/savanahsteigen/"
          >
            <LinkedInIcon alt="LinkedIn" />
          </IconButton>
          <IconButton
            sx={{ border: "2px solid" }}
            color="secondary"
            href="https://github.com/ssteigen"
          >
            <GitHubIcon alt="GitHub" />
          </IconButton>
          {/* <Button variant='outlined' endIcon={<Download />}>Resume</Button> */}
          {/* <Button variant='outlined' endIcon={<Email />}>Hire Me</Button> */}
        </Stack>
      </Box>
    </Stack>
  );
}
