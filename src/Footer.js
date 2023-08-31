import { Box, Container, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      Copyright © { new Date().getFullYear() } Savanah Steigen
    </Typography>
  );
}

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 4,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </Box>
  );
}
