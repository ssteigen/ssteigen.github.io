import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Tooltip, IconButton, Stack } from "@mui/material";
import { GitHub } from "@mui/icons-material";

export default function ProjectCard({
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
          <Stack sx={{ mt: 2 }} direction="row" flexWrap="wrap" gap={1}>
            {chips.map((chip) => (
              <Chip key={chip} label={chip} size="small" />
            ))}
          </Stack>
        )}
      </CardContent>
      <CardActions sx={{ borderTop: "1px solid #eee" }}>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="space-between"
          width="100%"
        >
          {demoUrl ? (
            <Tooltip title="See it in action!" placement="top">
              <Button
                href={demoUrl}
                variant="contained"
                fullWidth
                color="secondary"
              >
                Demo
              </Button>
            </Tooltip>
          ) : (
            <div />
          )}
          {repoUrl && (
            <Tooltip title="See the code on GitHub" placement="top">
              <IconButton
                href={repoUrl}
                color="secondary"
                sx={{ border: "1px solid" }}
              >
                <GitHub alt="See the code on GitHub" />
              </IconButton>
            </Tooltip>
          )}
        </Stack>
      </CardActions>
    </Card>
  );
}
