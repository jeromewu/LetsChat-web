import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = makeStyles({
  button: {
    width: '100%',
  },
  textarea: {
    padding: 0,
    fontSize: 96,
    width: '100%',
  }
});

export default function App() {
  const [value, setValue] = useState('');
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <TextareaAutosize
          rows={5}
          rowsMax={5}
          value={value}
          onChange={(evt) => { setValue(evt.target.value) }}
          className={classes.textarea}
          aria-label="textarea"
          placeholder="Click Me"
        />
        <Button
          className={classes.button}
          variant="contained"
          size="large"
          color="secondary"
          onClick={() => setValue('')}
        >
          Clear
        </Button>
      </Box>
    </Container>
  );
}
