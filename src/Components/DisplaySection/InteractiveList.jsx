import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import ListItemCustom from "./ListItemCustom";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


export default function InteractiveList({lists,handleDelete,handleCompelete}) {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752, marginInline: "auto", mt: "2rem" }}>
      <nav aria-label="main mailbox folders">
        <Typography sx={{ mt: 1, mb: 2 }} variant="h4" component="div">
          Task Lists
        </Typography>
        <Divider />
        <List key={Date.now()}>
          {
            lists.map(list => <ListItemCustom key={list.id} list={list} handleDelete={handleDelete} handleCompelete={handleCompelete} />)
          }
        </List>
      </nav>
    </Box>
  );
}
