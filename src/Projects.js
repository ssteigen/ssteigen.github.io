import { Grid, Typography, Box } from "@mui/material";

import ImgMediaCard from "./ImgMediaCard";

export function Projects() {
  const imgHeight = 200;

  return (
    <Box>
      <Typography variant="h2" sx={{textAlign: 'left', borderBottom: '2px solid #eee', marginBottom: 4}}>Projects</Typography>
      <Grid container spacing={3}>
        <Grid item xs>
          <ImgMediaCard
            title="The Yarn Basket"
            description="Fun little site redesign in HTML and CSS"
            imgSrc="https://github.com/ssteigen/shot-scraper/blob/main/the-yarn-basket-screenshot.png?raw=true"
            imgAlt="Screenshot of The Yarn Basket"
            imgHeight={imgHeight}
            repoUrl="https://github.com/ssteigen/the-yarn-basket"
            demoUrl="https://ssteigen.github.io/the-yarn-basket/"
            chips={['HTML', 'CSS', 'Foundation CSS']}
          />
        </Grid>

        <Grid item xs>
          <ImgMediaCard
            title="Skatesona"
            description="Mock up your dream skates"
            imgSrc="https://github.com/ssteigen/shot-scraper/blob/main/skatesona-screenshot.png?raw=true"
            imgAlt="Screenshot of Skatesona"
            imgHeight={imgHeight}
            repoUrl="https://github.com/ssteigen/skatesona"
            demoUrl="https://ssteigen.github.io/skatesona/"
            chips={['HTML', 'CSS', 'JavaScript', 'React']}
          />
        </Grid>

        <Grid item xs>
          <ImgMediaCard
            title="Namerator"
            description="Generate a name for your agile team"
            imgSrc="https://github.com/ssteigen/shot-scraper/blob/main/namerator-screenshot.png?raw=true"
            imgAlt="Screenshot of Namerator"
            imgHeight={imgHeight}
            repoUrl="https://github.com/ssteigen/namerator"
            demoUrl="https://ssteigen.github.io/namerator/"
            chips={['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']}
          />
        </Grid>

        <Grid item xs>
          <ImgMediaCard
            title="AC Design Hub"
            description="A searchable repository of community-made Animal Crossing designs"
            imgSrc="https://raw.githubusercontent.com/ssteigen/acdesignhub/master/readme/Screenshot_2020-05-15.png"
            imgAlt="Screenshot of AC Design Hub"
            imgHeight={imgHeight}
            repoUrl="https://github.com/ssteigen/acdesignhub"
            chips={['HTML', 'CSS', 'JavaScript', 'Django', 'Bootstrap CSS']}
          />
        </Grid>

        <Grid item xs>
          <ImgMediaCard
            title="Colorfill"
            description="A little color fill game"
            imgSrc="https://github.com/ssteigen/shot-scraper/blob/main/colorfill-screenshot.png?raw=true"
            imgAlt="Screenshot of Colorfill"
            imgHeight={imgHeight}
            repoUrl="https://github.com/ssteigen/colorfill"
            demoUrl="https://ssteigen.github.io/colorfill/"
            chips={['HTML', 'CSS', 'JavaScript', 'React']}
          />
        </Grid>

        <Grid item xs>
          <ImgMediaCard
            title="Minesweeper"
            description="A little minesweeper game"
            imgSrc="https://github.com/ssteigen/shot-scraper/blob/main/minesweeper-screenshot.png?raw=true"
            imgAlt="Screenshot of Minesweeper"
            imgHeight={imgHeight}
            repoUrl="https://github.com/ssteigen/minesweeper"
            demoUrl="https://ssteigen.github.io/minesweeper/"
            chips={['HTML', 'CSS', 'JavaScript', 'React']}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
