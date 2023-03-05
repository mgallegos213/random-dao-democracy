import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";

const IndexPage = () => {
    return(
        <>
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
      </>
      
    );
};

export default IndexPage;