import { Favorite } from "@mui/icons-material";
import { Typography } from "@mui/material";

export function Footer() {
  return (
      <Typography variant="body2" color="text.secondary">
        Made with <Favorite sx={{color: 'pink', fontSize: '1.5em', verticalAlign: 'top'}} alt="love" /> by San Steigen<br />
        Copyright &copy; { new Date().getFullYear() }
      </Typography>
  );
}
