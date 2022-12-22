import { Box, Typography } from "@mui/material";
import { Section } from "./Section";

function ExpItem({ title, company, startDate, endDate }) {
  return (
    <>
      <Box>
        <Typography variant="subtitle1" component="h3">
          {title}
        </Typography>
        <Typography variant="subtitle2">
          {/* {company} | {startDate} - {endDate || "Present"} */}
        </Typography>
        <Box>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            autem eos recusandae asperiores rem porro. Possimus deserunt
            molestias, eius amet error ratione, eum minus sed ullam, nulla
            dignissimos asperiores vitae?
          </Typography>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Explicabo perspiciatis aperiam nihil.</li>
            <li>
              Excepturi sint inventore ad minima sit nisi tenetur eaque
              obcaecati aliquam eveniet officia molestias, totam fugiat saepe.
            </li>
            <li>
              Illo qui rem numquam aliquam quos, optio pariatur, facere quia
              perspiciatis natus quo inventore dolorem esse aliquid consequatur
              sunt rerum nisi velit.
            </li>
          </ul>
        </Box>
      </Box>
    </>
  );
}

export function Experience() {
  return (
    <Section title="Title">
      <ExpItem title="Longer title here" company="title" startDate="1" />
      <ExpItem
        title="Longer title here"
        company="title"
        startDate="3"
        endDate="4"
      />
    </Section>
  );
}
