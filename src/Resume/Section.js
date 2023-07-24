import { Box, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "left",
}));

export function Section({title, children}) {
  return (
    <Item>
      <Typography variant="body1" component="h2" textTransform='uppercase' fontWeight='bold' letterSpacing='3px'>{title}</Typography>
      {children}
    </Item>
  );
}
