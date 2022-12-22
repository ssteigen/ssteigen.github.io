import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Section } from "./Section";

function EduItem({degree, university, gradYear}) {
  return (
    <Box>
      {degree}
      {university}
      {gradYear}
    </Box>
  );
}

export function Education() {
  return (
    <Section title="Title">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum autem
        eos recusandae asperiores rem porro. Possimus deserunt molestias, eius
        amet error ratione, eum minus sed ullam, nulla dignissimos asperiores
        vitae?
      </p>
      <EduItem degree="title" university="title" gradYear="1"/>
      <EduItem degree="title" university="title" gradYear="1"/>
      <EduItem degree="title" university="title" gradYear="1"/>
    </Section>
  );
}
