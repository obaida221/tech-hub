import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles?.('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function TodoGrid() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <TextField
              label="Add a task"
              value={input}
              onChange={e => setInput(e.target.value)}
              size="small"
              sx={{ mr: 2 }}
            />
            <Button variant="contained" onClick={addTodo}>
              Add
            </Button>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <strong>Tasks: {todos.length}</strong>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <List>
              {todos.map((todo, idx) => (
                <ListItem key={idx}>{todo}</ListItem>
              ))}
            </List>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}