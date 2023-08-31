import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Stack } from "@mui/material";

export default function ImgMediaCard({
  title,
  description,
  imgSrc,
  imgAlt,
  imgHeight,
  repoUrl,
  demoUrl,
  chips,
}) {
  return (
    <Card variant="outlined">
      <CardHeader title={title} />
      <CardMedia
        component="img"
        alt={imgAlt}
        height={imgHeight}
        image={imgSrc}
        sx={{ border: "2px solid #eee" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {chips && (
          <Stack
            spacing={1}
            sx={{ mt: 2 }}
            direction="row"
            justifyContent="center"
          >
            {chips.map((chip) => (
              <Chip key={chip} label={chip} size="small" />
            ))}
          </Stack>
        )}
      </CardContent>
      <CardActions
        sx={{ borderTop: "1px solid #eee", justifyContent: "center" }}
      >
        <Stack spacing={2} direction="row">
          {demoUrl && (
            <Button href={demoUrl} size="large" variant="contained">
              Demo
            </Button>
          )}
          {repoUrl && (
            <Button href={repoUrl} size="large" variant="text">
              <span className="code">&lt;</span>Github
              <span className="code">/&gt;</span>
            </Button>
          )}
        </Stack>
      </CardActions>
    </Card>
  );
}
