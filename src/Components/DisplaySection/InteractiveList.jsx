import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import ListItemCustom from "./ListItemCustom";

export default function InteractiveList({lists,handleDelete,handleCompelete,handleEdit}) {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752, marginInline: "auto", mt: "2rem" }}>
      <nav aria-label="main mailbox folders">
        <Typography sx={{ mt: 1, mb: 2 }} variant="h4" component="div">
          Task Lists
        </Typography>
        <Divider />
        <List key={Date.now()}>
          {
            lists.map(list => <ListItemCustom key={list.id} list={list} handleDelete={handleDelete} handleCompelete={handleCompelete} handleEdit={handleEdit} />)
          }
        </List>
      </nav>
    </Box>
  );
}
