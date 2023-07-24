import { AutoAwesome, Email, LinkedIn, Place } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section title="Contact">
      <List dense >
        <ListItem >
          <ListItemIcon>
            <Email />
          </ListItemIcon>
          <ListItemText><a href="mailto:savanahsteigen@gmail.com">savanahsteigen@gmail.com</a></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LinkedIn />
          </ListItemIcon>
          <ListItemText><a href="https://www.linkedin.com/in/savanahsteigen/">savanahsteigen</a></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Place />
          </ListItemIcon>
          <ListItemText>Media, PA, USA</ListItemText>
        </ListItem>
      </List>
    </Section>
  );
}
