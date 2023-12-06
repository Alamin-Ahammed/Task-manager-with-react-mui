import * as React from "react";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button, ListItemButton, createTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteIcon from "@mui/icons-material/Delete";

const HoverableIconButton = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.error.main,
    color: "white",
  },
}));

export default function ListItemCustom({list,handleDelete,handleCompelete}) {

  return (
    <div>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText style={{textDecoration: list.compeleted ? 'line-through' : 'none'}} primary={list.task} />

              <ListItemIcon onClick={()=> handleCompelete(list.id)} >
                <HoverableIconButton aria-label="add task">
                  <AddTaskIcon />
                </HoverableIconButton>
              </ListItemIcon>

              <ListItemIcon onClick={() => handleDelete(list.id)}>
                <HoverableIconButton aria-label="delete">
                  <DeleteIcon />
                </HoverableIconButton>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
    </div>
  )
}
