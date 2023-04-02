import React, { useState } from "react";
import LeftTop from './leftTop'
import LeftBottom from './leftBottom'
import './left.css'
import { Box } from "@mui/material";
const Left=()=>{

return(
  <Box sx={{ flexGrow: 1,backgroundColor:"#FFF",borderRadius:"10px", border: "1px solid #e1e1e1" }}>
  <LeftTop />
  <Box sx={{paddingBlock:"0.8rem", }}>
  <LeftBottom />
   </Box>
 
</Box>
)
}
export default Left;