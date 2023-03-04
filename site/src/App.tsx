import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

function App() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
    <main className="App">


      <header style={{display: "flow-root"}}>
        <span style={{
          fontSize: "34px", float: "left",
          margin: "25px 0px 0px 25px"
        }}><strong>DAO</strong>MOCRACY</span>

        <Chip style={{
           float: "right",
          margin: "25px 25px 25px 0px"
        }} avatar={<Avatar>U</Avatar>} label="0x065BD7...D9AB" />

      </header>

      <div>
      <Button style={{height: 200, width: 200}} variant="outlined">Vote</Button>
      <Button style={{height: 200, width: 200}} variant="outlined">Discuss</Button>
      <Button style={{height: 200, width: 200}} variant="outlined">Initiate</Button>
      <Button style={{height: 200, width: 200}} variant="outlined">Review</Button>
      </div>
    </main>
  );
}

export default App;
