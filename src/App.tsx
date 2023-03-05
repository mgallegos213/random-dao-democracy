import React from 'react';
import './App.css';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";


function App() {
  const activeChainId = ChainId.Mumbai;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
    <>
    <ThirdwebProvider desiredChainId={activeChainId}>
    <ConnectWallet colorMode="light" accentColor="#F213A4"/>
    </ThirdwebProvider>
    <Button variant="outlined">Shuffle</Button>
    </>
  );
}

export default App;
