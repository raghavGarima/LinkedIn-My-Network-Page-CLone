import React from "react";
import {Grid,Box,Card,CardActions,CardContent,CardMedia,Button,Typography,Avatar} from '@mui/material';
import './cards.css'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const UserCard=({cardData})=>{
return(
  <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={3} style={{justifyContent:"center",    marginTop: '-5px'}}>
  {cardData.map((info,index)=>{
    return (
      <Grid item xs={12} sm={info?.workingAt?3:4} md={info?.workingAt=="Pristyn Care" || info?.workingAt=="Based On Your Profile" ?3:4} key={index}>
  <Card sx={{    minHeight: "16.5rem"}} className="cardHover">
      <CardMedia
        sx={{ height:info?.workingAt? 65:57 }}
        image={info.userBackgroundImage}
        title="green iguana"
      />
   <Box sx={{    alignItems: "center",
    display: "flex",
    margin: info?.workingAt?"-45px 0px 0px 0px":"-32px 0px 0px 19px",
    justifyContent:info?.workingAt?"center":"",
}} >   <Avatar
        alt="Remy Sharp"
        src={info.userImage}
        sx={{ width:info?.workingAt? 90:65, height:info?.workingAt? 90:65 }}
      /></Box>
      <CardContent>
        <Typography gutterBottom component="div" sx={{    fontWeight: "600",
    fontSize: "15px"}}>
          {info.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{minHeight:"32px"}}>
         {info.userDesigInfo}
        </Typography>
      </CardContent>
      <CardActions sx={{    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "8px 15px",
    minHeight: "59px",
    justifyContent: "end"}}>
      <Typography variant="div" color="text.secondary" sx={{     width: "100%",   marginBottom: '5px' ,fontSize:info?.workingAt?"10px":"13px",textAlign:info?.workingAt?"center":"flex-start"}}>
          {info?.userFollower? `${info.userFollower}` :
          <Box style={{    alignItems: "center",
    justifyContent: "center",
    display: "flex"}}>
    {info.workingAtLogo ?
      <img style={{    marginRight: "6px",    width: "22px",
    height: "22px"}} src={info.workingAtLogo} />:null
    }
         
          {info.workingAt}
          </Box> }
        </Typography>
        <Box style={{minHeight:"32px",margin:"auto",width:"100%"}}> 
          <Button size="small" variant="outlined" className="blueBtn">
        {info?.type?"View":
          info.workingAt=="Based On Your Profile" || info?.workingAt=="Pristyn Care"?
        <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
  <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
</svg>Connect</>:"Follow"}
        </Button>

        </Box>
      </CardActions>
    </Card>
  </Grid>
    )
  })}
 
  </Grid>
</Box>
)
}
export default UserCard;