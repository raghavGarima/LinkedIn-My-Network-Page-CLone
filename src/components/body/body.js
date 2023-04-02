import React from "react";
import {Grid,Box} from '@mui/material';
import Left from './left/Left'
import Right from './right/Right'


const Body=()=>{
return(
  <Box sx={{ flexGrow: 1, height: "calc(100vh - 63px)",
  position: "absolute",
  background: "#f3f2ef",
  overflowY: "scroll" }}>
  <Grid container spacing={3} sx={{justifyContent:"center",  marginTop: {xs:"null",md:"5px"} }}>
  <Grid item xs={12} md={3}>
        <Left />
        </Grid>
        <Grid item xs={12} md={7}>
      <Right />
        </Grid>
       

  </Grid>
</Box>
)
}
export default Body;