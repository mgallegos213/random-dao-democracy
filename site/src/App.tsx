import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

function App() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <main className="App">
      
      
      <header>
        <div style={{fontSize: "34px"}}>DAOMOCRACY</div>
        <div>
        <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
      
      </div></header>
    </main>
  );
}

export default App;
