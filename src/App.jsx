import "./App.css";
import React, { useReducer, useState } from "react";
import Button from "@mui/material/Button";
import { Paper, TextField, Typography } from "@mui/material";
import InteractiveList from "./Components/DisplaySection/InteractiveList";

const initialTask = [];

function handleState(state, action) {
  const id = Date.now()
  switch (action.type) {
    case 'addTask': {
      return [
        ...state,
        {
          id: id,
          task: action.data,
          compeleted: false,
        },
      ];
    }
    case 'compeletedTask': {
      const compeleted = state.map(element => {
        if (element.id === action.id) {
            return {
              ...element,
              compeleted: element.compeleted ? false : true,
            }
        }else {
          return element
        }
      })
      return compeleted;
    }
    case 'deleteTask': {
    const filteredData = state.filter(element => element.id !== action.id)
      return filteredData;
    }
    default: {
      return state
    }
  }
}

function App() {
  const [lists, dispatch] = useReducer(handleState, initialTask);
  const [currentInput, setCurrentInput] = useState("");

  function handleInput(e) {
    if (e.target.value.trim() !== '') {
      setCurrentInput(e.target.value)
    }else {
      setCurrentInput('')
    }
  }

  function handleAddTask(e) {
    e.preventDefault();
    dispatch({
      type: 'addTask',
      data: currentInput
    });
    setCurrentInput('')
  }

  function handleDelete(id) {
    dispatch({
      type: 'deleteTask',
      id
    })
  }

  function handleCompelete(id) {
    dispatch({
      type: 'compeletedTask',
      id
    })
  }
  return (
    <>
      <Paper style={{ backgroundColor: "#ffcc00", padding: 16 }}>
        <Typography variant="h3">Task Manager</Typography>
      </Paper>
      <form onSubmit={handleAddTask}>
        <div style={{ display: "flex", gap: 5, justifyContent: "center" }}>
          <TextField
            id="outlined-basic"
            label="Task to add"
            variant="outlined"
            sx={{ width: "600px", mt: 4 }}
            value={currentInput}
            onChange={handleInput}
            required
          />
          <Button type="submit" variant="contained" sx={{ mt: 4, padding: 2 }}>
            Add Task
          </Button>
        </div>
      </form>
      <InteractiveList lists={lists} handleDelete={handleDelete} handleCompelete={handleCompelete} />
    </>
  );
}

export default App;