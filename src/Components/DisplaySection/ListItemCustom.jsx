import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button, ListItemButton, TextField, createTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const HoverableIconButton = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.error.main,
    color: "white",
  },
}));

export default function ListItemCustom({
  list,
  handleDelete,
  handleCompelete,
  handleEdit,
}) {
  const [inputValueOfEdit, setInputValueOfEdit] = useState("");
  const [isedited, setIsEdited] = useState(false);

  const handleEdit_input_value = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setInputValueOfEdit(list.task)
    if (!list.compeleted) {
      setIsEdited(true);
    }
  };

  function handleEditInputValue(e) {
    if (e.target.value.trim() !== "") {
      setInputValueOfEdit(e.target.value);
    } else {
      setInputValueOfEdit("");
    }
  }

  function handleSubmitionOfEdit() {
    const id = list.id;
    handleEdit({id,data: inputValueOfEdit})
  }

  return (
    <div>
      <ListItem disablePadding>
        <ListItemButton
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {isedited ? (
            <TextField
              id="outlined-basic"
              label="Task to edit"
              variant="outlined"
              sx={{ width: "400px" }}
              value={inputValueOfEdit}
              onChange={handleEditInputValue}
              onKeyDown={(e)=> e.key === 'Enter' && handleSubmitionOfEdit()}
              autoFocus
              required
            />
          ) : (
            <ListItemText
              style={{
                textDecoration: list.compeleted ? "line-through" : "none",
              }}
              primary={list.task}
            />
          )}
          <div>
            <ListItemIcon onClick={() => handleCompelete(list.id)}>
              <HoverableIconButton aria-label="add task">
                <AddTaskIcon />
              </HoverableIconButton>
            </ListItemIcon>

            {isedited ? (
              <ListItemIcon onClick={handleSubmitionOfEdit}>
                <HoverableIconButton aria-label="edit">
                  <CreditScoreIcon />
                </HoverableIconButton>
              </ListItemIcon>
            ) : (
              <ListItemIcon onClick={handleEdit_input_value}>
                <HoverableIconButton aria-label="edit">
                  <EditIcon />
                </HoverableIconButton>
              </ListItemIcon>
            )}

            <ListItemIcon onClick={() => handleDelete(list.id)}>
              <HoverableIconButton aria-label="delete">
                <DeleteIcon />
              </HoverableIconButton>
            </ListItemIcon>
          </div>
        </ListItemButton>
      </ListItem>
    </div>
  );
}
