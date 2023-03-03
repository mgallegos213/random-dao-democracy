# Randaomocracy
We want to be able to randomly select voters from a list of DAO members.
It is the goal to then pass this randomly selected list to Snapshot, and spin up a sub-space for each proposal.
This will allow us to have whitelisting/gatekeeping on who can vote for each proposal.

## Install
The solidity file works well with Remix.
It utilizes Chainlink's VRF, so you will need to get testnet ETH and LINK on the Sepolia testnet.

1. Compile the Solidity file in Remix
2. Deploy it via MetaMask to Sepolia
3. Fund the contract with 1-2 LINK
4. `requestRandomWords` to call the Chainlink VRF method
5. Get the latest request ID via `lastRequestId`
6. Call `getRequestStatus` with `lastRequestId` as input
7. Wait for the random words field to be filled by Chainlink, might take a few minutes on the testnet
8. Call `shuffleAddresses` with the addresses you wish to pick from, and how many you wish to select.
- Example Input: `[0x923B02b9a3538B24E288e041545697DcD011189d, 0x2Ef51772cB3cA601D71752306084b5a90301bd5a, 0x222a41aE52453a0115475b8D55282633a3d5D522, 0xF66de28d13Fa1e24A2a84D35A0b9223A7C2B62Df, 0xC553addc08dD956Be7E81be3F4657cD57405Ccea], 2`

Currently, this works when you make the `shuffleAddresses` function `view` only, but we want to log it on-chain.
Trying to figure out how to do that.