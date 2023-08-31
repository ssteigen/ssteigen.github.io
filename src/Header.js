import { AppBar, Toolbar, Typography, Link } from "@mui/material";

export function Header() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          San Steigen
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="#about"
            sx={{ my: 1, mx: 1.5 }}
          >
            About
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#projects"
            sx={{ my: 1, mx: 1.5 }}
          >
            Projects
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
