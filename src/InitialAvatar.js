import { Avatar, Divider } from "@mui/material";

export function InitialAvatar() {
  return (
    <Avatar
      sx={{
        padding: 3,
        border: "2px solid gray",
        background: "white",
        color: "gray",
        fontSize: "2.5em",
      }}
    >
      A
      <Divider orientation="vertical" sx={{ marginX: 0.5, borderWidth: 1 }} />
      B
    </Avatar>
  );
}
