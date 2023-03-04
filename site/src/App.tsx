import React from 'react';
import './App.css';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function App() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
    <main className="App">


      <header style={{ display: "flow-root" }}>
        <span style={{
          fontSize: "34px", float: "left",
          margin: "25px 0px 0px 25px"
        }}><strong>DAO</strong>MOCRACY</span>

        <Chip style={{
          float: "right",
          margin: "25px 25px 25px 0px"
        }} avatar={<Avatar>U</Avatar>} label="0x065BD7...D9AB" />

      </header>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
      <div>
      <Box sx={{ flexGrow: 1 }}>
        <Button style={{ height: 200, 
          width: 225, 
          borderColor: "black", 
          color: "black", 
          borderRadius: 0, 
          margin: "1em", 
          boxShadow: "5px 10px #888888"}} 
          variant="outlined">Vote</Button>
          <Button style={{ height: 200, 
          width: 225, 
          borderColor: "black", 
          color: "black", 
          borderRadius: 0, 
          margin: "1em", 
          boxShadow: "5px 10px #888888"}} 
          variant="outlined">Discuss</Button>
          <br></br>
          <Button style={{ height: 200, 
          width: 225, 
          borderColor: "black", 
          color: "black", 
          borderRadius: 0, 
          margin: "1em", 
          boxShadow: "5px 10px #888888"}} 
          variant="outlined">Initiate</Button>
          <Button style={{ height: 200, 
          width: 225, 
          borderColor: "black", 
          color: "black", 
          borderRadius: 0, 
          margin: "1em", 
          boxShadow: "5px 10px #888888"}} 
          variant="outlined">Review</Button>  
        </Box>
      </div>
    </main>
  );
}

export default App;
