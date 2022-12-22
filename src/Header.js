import { Box } from "@mui/system";

import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { InitialAvatar } from "./InitialAvatar";

export function Header() {
  return (
    <Box bgcolor="white" marginBottom={1} textAlign="left">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h1">
            Heading
          </Typography>
          <Typography variant="h5" component="h2">
            Subtitle
          </Typography>
        </Grid>
        <Grid item>
          <InitialAvatar />
        </Grid>
      </Grid>
    </Box>
  );
}
