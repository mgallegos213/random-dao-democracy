import React from 'react';
import './App.css';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { contractAddress, contractAbi } from "./contract";

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";


function App() {
  const activeChainId = ChainId.Mumbai;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const addressArray = ['0x923B02b9a3538B24E288e041545697DcD011189d', '0x2Ef51772cB3cA601D71752306084b5a90301bd5a', '0x222a41aE52453a0115475b8D55282633a3d5D522', '0xF66de28d13Fa1e24A2a84D35A0b9223A7C2B62Df', '0xC553addc08dD956Be7E81be3F4657cD57405Ccea'];
  const numberOfAddressesToReturn = 2;

  return (
    <>
    <ThirdwebProvider desiredChainId={activeChainId}>
    <ConnectWallet colorMode="light" accentColor="#F213A4"/>
    <Web3Button
      contractAddress={contractAddress}
      contractAbi={contractAbi}
      // Call the name of your smart contract function
      action={(contract) => contract.call("shuffleAddresses", addressArray, numberOfAddressesToReturn)}
    >
      Call Contract Function
    </Web3Button>
    </ThirdwebProvider>
    </>
  );
}

export default App;
