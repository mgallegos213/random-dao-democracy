import React, { Children } from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { ChildCare } from "@mui/icons-material";

const Layout = (properties: any) => {
  const {children} = properties;
  return(
    <>
    <header style={{ display: "flow-root", boxShadow: "5px 1px 5px 5px #888888" }}>
        <span style={{
          fontSize: "34px", float: "left",
          margin: "25px 0px 0px 25px"
        }}><strong>DAO</strong>MOCRACY</span>

        <Chip style={{
          float: "right",
          margin: "25px 25px 25px 0px"
        }} avatar={<Avatar>U</Avatar>} label="0x065BD7...D9AB" />

      </header>
      {children}
    </>
  );
}

export default Layout;