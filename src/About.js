import {
  Container,
  Typography,
  Box,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export function About() {
  return (
    <Container
      disableGutters
      maxWidth="md"
      component="main"
      sx={{ pt: 8, pb: 6 }}
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={6}
        alignItems="center"
      >
        <Box>
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Hi, I'm San!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
          >
            I'm a <span className="brand">Software Developer</span> looking for
            a highly collaborative, product-focused company.
          </Typography>
          <Stack direction="row" spacing={4} sx={{ mt: 2}} justifyContent="center">
            <IconButton sx={{border: '1px solid'}} color='primary' href="https://www.linkedin.com/in/savanahsteigen/"><LinkedInIcon alt="LinkedIn" /></IconButton>
            <IconButton sx={{border: '1px solid'}} color='primary' href="https://github.com/ssteigen"><GitHubIcon alt="GitHub" /></IconButton>
          </Stack>
        </Box>
        <Box>
          <img src="https://placehold.co/300" alt="San Steigen" />
        </Box>
      </Stack>
    </Container>
  );
}
