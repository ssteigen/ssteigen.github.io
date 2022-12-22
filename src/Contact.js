import { AutoAwesome } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section title="Title">
      <List dense >
        <ListItem >
          <ListItemIcon>
            <AutoAwesome />
          </ListItemIcon>
          <ListItemText>List item 1</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AutoAwesome />
          </ListItemIcon>
          <ListItemText>List item 2</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AutoAwesome />
          </ListItemIcon>
          <ListItemText>List item 3</ListItemText>
        </ListItem>
      </List>
    </Section>
  );
}
