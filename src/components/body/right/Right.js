import React from "react";
import { styled } from '@mui/material/styles';
import {Grid,Box} from '@mui/material';
import UserCard from '../cards/index.js'

const Right=()=>{
  const follwerUserDetails=[
    {
      userImage:"https://mui.com/static/images/avatar/2.jpg",
      name:"Shubham Raghav",
      userDesigInfo:"Assistant Manager at Max Healthcare",
      userFollower:"7869875 followers",
      userBackgroundImage:"https://picsum.photos/200/300",

    },
    {
      userImage:"https://mui.com/static/images/avatar/3.jpg",
      name:"Garima Raghav",
      userDesigInfo:"Deputy Manager-Human Resources",
      userFollower:"1500034 followers",       
      userBackgroundImage:"https://picsum.photos/seed/picsum/200/300",

    },
{
    userImage:"https://mui.com/static/images/avatar/2.jpg",
    name:"Shubham Raghav",
    userDesigInfo:"Assistant Manager at Max Healthcare",
    userFollower:"7869875 followers",
    userBackgroundImage:"https://picsum.photos/200/300",

  },
  {
    userImage:"https://mui.com/static/images/avatar/3.jpg",
    name:"Garima Raghav",
    userDesigInfo:"Deputy Manager-Human Resources",
    userFollower:"1500034 followers",

    userBackgroundImage:"https://picsum.photos/seed/picsum/200/300",
  },
{
  userImage:"https://mui.com/static/images/avatar/2.jpg",
  name:"Shubham Raghav",
  userDesigInfo:"Assistant Manager at Max Healthcare",
  userFollower:"7869875 followers",
  userBackgroundImage:"https://picsum.photos/200/300",

},
{
  userImage:"https://mui.com/static/images/avatar/3.jpg",
  name:"Garima Raghav",
  userDesigInfo:"Deputy Manager-Human Resources",
  userFollower:"1500034 followers",

  userBackgroundImage:"https://picsum.photos/seed/picsum/200/300",
}
  ]
  const workingAtUserDetails=[
    {
      userImage:"https://mui.com/static/images/avatar/2.jpg",
      name:"Shubham Raghav",
      userDesigInfo:"React Js. Developer",
      workingAt:"Pristyn Care",
      workingAtLogo:"https://media.licdn.com/dms/image/C4D0BAQHgEWP8UWKyhQ/company-logo_100_100/0/1668582079849?e=1688601600&v=beta&t=4CecnNQI-83236SOTqgB_RiWWt39ThAxLkCzA5L8rLs",
      userBackgroundImage:"https://fastly.picsum.photos/id/1057/536/354.jpg?hmac=Bx6hxppJnxgdVDhSwJp0YFx6GxVMKj8XIRbuQmKysz4",
      

    },
    {
      userImage:"https://mui.com/static/images/avatar/3.jpg",
      name:"Garima Raghav",
      userDesigInfo:"Node Js Developer",
        workingAt:"Pristyn Care",
      workingAtLogo:"https://media.licdn.com/dms/image/C4D0BAQHgEWP8UWKyhQ/company-logo_100_100/0/1668582079849?e=1688601600&v=beta&t=4CecnNQI-83236SOTqgB_RiWWt39ThAxLkCzA5L8rLs",
      userBackgroundImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qROQFV_3SDisHS4ISFujMVkZQq528xxgKg&usqp=CAU",

      
    },
{
    userImage:"https://mui.com/static/images/avatar/2.jpg",
    name:"Shubham Raghav",
    userDesigInfo:"React Js. Developer",
    workingAt:"Pristyn Care",
    workingAtLogo:"https://media.licdn.com/dms/image/C4D0BAQHgEWP8UWKyhQ/company-logo_100_100/0/1668582079849?e=1688601600&v=beta&t=4CecnNQI-83236SOTqgB_RiWWt39ThAxLkCzA5L8rLs",
    userBackgroundImage:"https://fastly.picsum.photos/id/1057/536/354.jpg?hmac=Bx6hxppJnxgdVDhSwJp0YFx6GxVMKj8XIRbuQmKysz4",

  },
  {
    userImage:"https://mui.com/static/images/avatar/3.jpg",
    name:"Garima Raghav",
    userDesigInfo:"Node Js Developer",
      workingAt:"Pristyn Care",
      workingAtLogo:"https://media.licdn.com/dms/image/C4D0BAQHgEWP8UWKyhQ/company-logo_100_100/0/1668582079849?e=1688601600&v=beta&t=4CecnNQI-83236SOTqgB_RiWWt39ThAxLkCzA5L8rLs",
    userBackgroundImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qROQFV_3SDisHS4ISFujMVkZQq528xxgKg&usqp=CAU",


  },
{
  userImage:"https://mui.com/static/images/avatar/2.jpg",
  name:"Shubham Raghav",
  userDesigInfo:"React Js. Developer",
  workingAt:"Pristyn Care",
  workingAtLogo:"https://media.licdn.com/dms/image/C4D0BAQHgEWP8UWKyhQ/company-logo_100_100/0/1668582079849?e=1688601600&v=beta&t=4CecnNQI-83236SOTqgB_RiWWt39ThAxLkCzA5L8rLs",
  userBackgroundImage:"https://fastly.picsum.photos/id/1057/536/354.jpg?hmac=Bx6hxppJnxgdVDhSwJp0YFx6GxVMKj8XIRbuQmKysz4",

},
{
  userImage:"https://mui.com/static/images/avatar/3.jpg",
  name:"Garima Raghav",
  userDesigInfo:"Node Js Developer",
    workingAt:"Pristyn Care",
      workingAtLogo:"https://media.licdn.com/dms/image/C4D0BAQHgEWP8UWKyhQ/company-logo_100_100/0/1668582079849?e=1688601600&v=beta&t=4CecnNQI-83236SOTqgB_RiWWt39ThAxLkCzA5L8rLs",
  userBackgroundImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qROQFV_3SDisHS4ISFujMVkZQq528xxgKg&usqp=CAU",


},
{
  userImage:"https://mui.com/static/images/avatar/2.jpg",
  name:"Shubham Raghav",
  userDesigInfo:"React Js. Developer",
  workingAt:"Pristyn Care",
  workingAtLogo:"https://media.licdn.com/dms/image/C4D0BAQHgEWP8UWKyhQ/company-logo_100_100/0/1668582079849?e=1688601600&v=beta&t=4CecnNQI-83236SOTqgB_RiWWt39ThAxLkCzA5L8rLs",
  userBackgroundImage:"https://fastly.picsum.photos/id/1057/536/354.jpg?hmac=Bx6hxppJnxgdVDhSwJp0YFx6GxVMKj8XIRbuQmKysz4",

},
{
  userImage:"https://mui.com/static/images/avatar/3.jpg",
  name:"Garima Raghav",
  userDesigInfo:"Node Js Developer",
  workingAt:"Pristyn Care",
  workingAtLogo:"https://media.licdn.com/dms/image/C4D0BAQHgEWP8UWKyhQ/company-logo_100_100/0/1668582079849?e=1688601600&v=beta&t=4CecnNQI-83236SOTqgB_RiWWt39ThAxLkCzA5L8rLs",
  userBackgroundImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qROQFV_3SDisHS4ISFujMVkZQq528xxgKg&usqp=CAU",

},
  ]

  const viewUserDetails=[
    {
      userImage:"https://mui.com/static/images/avatar/2.jpg",
      name:"Why Public Speaking is so Important?",
      userDesigInfo:"Today, 1:00 PM",
      userFollower:"252 attendees",
      userBackgroundImage:"https://picsum.photos/200/300",
      type:"View"

    },
    {
      userImage:"https://mui.com/static/images/avatar/3.jpg",
      name:"AI Roadmap for experienced professional?",
      userDesigInfo:"Today, 3:00 PM",
      userFollower:"252 attendees",
      userBackgroundImage:"https://picsum.photos/seed/picsum/200/300",
type:"View"
      
    },
{
    userImage:"https://mui.com/static/images/avatar/2.jpg",
    name:"Why Public Speaking is so Important?",
    userDesigInfo:"Today, 1:00 PM",
    userFollower:"252 attendees",
    userBackgroundImage:"https://picsum.photos/200/300",
type:"View"
  },
  {
    userImage:"https://mui.com/static/images/avatar/3.jpg",
    name:"AI Roadmap for experienced professional?",
    userDesigInfo:"Today, 3:00 PM",
    userFollower:"252 attendees",
    userBackgroundImage:"https://picsum.photos/seed/picsum/200/300",
type:"View"

  },
{
  userImage:"https://mui.com/static/images/avatar/2.jpg",
  name:"Why Public Speaking is so Important?",
  userDesigInfo:"Today, 1:00 PM",
  userFollower:"252 attendees",
  userBackgroundImage:"https://picsum.photos/200/300",
type:"View"
},
{
  userImage:"https://mui.com/static/images/avatar/3.jpg",
  name:"AI Roadmap for experienced professional?",
  userDesigInfo:"Today, 3:00 PM",
  userFollower:"252 attendees",
  userBackgroundImage:"https://picsum.photos/seed/picsum/200/300",
type:"View"

},
  ]
  const basedOnUserDetails=[
    {
      userImage:"https://mui.com/static/images/avatar/2.jpg",
      name:"Shubham Raghav",
      userDesigInfo:"React Js. Developer",
      workingAt:"Based On Your Profile",
      userBackgroundImage:"https://fastly.picsum.photos/id/1057/536/354.jpg?hmac=Bx6hxppJnxgdVDhSwJp0YFx6GxVMKj8XIRbuQmKysz4",
      

    },
    {
      userImage:"https://mui.com/static/images/avatar/3.jpg",
      name:"Garima Raghav",
      userDesigInfo:"Node Js Developer",
      workingAt:"Based On Your Profile",
      userBackgroundImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qROQFV_3SDisHS4ISFujMVkZQq528xxgKg&usqp=CAU",

      
    },
{
    userImage:"https://mui.com/static/images/avatar/2.jpg",
    name:"Shubham Raghav",
    userDesigInfo:"React Js. Developer",
    workingAt:"Based On Your Profile",
    userBackgroundImage:"https://fastly.picsum.photos/id/1057/536/354.jpg?hmac=Bx6hxppJnxgdVDhSwJp0YFx6GxVMKj8XIRbuQmKysz4",

  },
  {
    userImage:"https://mui.com/static/images/avatar/3.jpg",
    name:"Garima Raghav",
    userDesigInfo:"Node Js Developer",
    workingAt:"Based On Your Profile",
    userBackgroundImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qROQFV_3SDisHS4ISFujMVkZQq528xxgKg&usqp=CAU",


  },
{
  userImage:"https://mui.com/static/images/avatar/2.jpg",
  name:"Shubham Raghav",
  userDesigInfo:"React Js. Developer",
  workingAt:"Based On Your Profile",
  userBackgroundImage:"https://fastly.picsum.photos/id/1057/536/354.jpg?hmac=Bx6hxppJnxgdVDhSwJp0YFx6GxVMKj8XIRbuQmKysz4",

},
{
  userImage:"https://mui.com/static/images/avatar/3.jpg",
  name:"Garima Raghav",
  userDesigInfo:"Node Js Developer",
  workingAt:"Based On Your Profile",
  userBackgroundImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qROQFV_3SDisHS4ISFujMVkZQq528xxgKg&usqp=CAU",


},
{
  userImage:"https://mui.com/static/images/avatar/2.jpg",
  name:"Shubham Raghav",
  userDesigInfo:"React Js. Developer",
  workingAt:"Based On Your Profile",
  userBackgroundImage:"https://fastly.picsum.photos/id/1057/536/354.jpg?hmac=Bx6hxppJnxgdVDhSwJp0YFx6GxVMKj8XIRbuQmKysz4",

},
{
  userImage:"https://mui.com/static/images/avatar/3.jpg",
  name:"Garima Raghav",
  userDesigInfo:"Node Js Developer",
  workingAt:"Based On Your Profile",
  userBackgroundImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qROQFV_3SDisHS4ISFujMVkZQq528xxgKg&usqp=CAU",

},
  ]
return(
  <Box sx={{ flexGrow: 1, backgroundColor:"#FFF",borderRadius:{xs:"0px",sm:"10px"} ,border: "1px solid #e1e1e1" 
}}>
<Grid container spacing={3} style={{justifyContent:"center",padding:"20px",    marginTop: "1px"    }}>
  <Grid item xs={10.5} md={10.5} style={{paddingTop: "0px"}}>
       People who are in the Hospitals and Health Care industry also follow these people
        </Grid>
        <Grid item xs={1.5} md={1.5} style={{padding: "0px",color: "#747474",fontWeight: "500",cursor: "pointer"}}>
        See All
        </Grid>
        <Grid item xs={12} md={12} style={{paddingTop: "0px"}}>
        <UserCard cardData={follwerUserDetails} />
        </Grid>
        <Grid item xs={10.5} md={10.5} >
        People you may know from Pristyn Care
        </Grid>
        <Grid item xs={1.5} md={1.5} style={{color: "#747474",fontWeight: "500",cursor: "pointer"}} >
        See All
        </Grid>
        <Grid item xs={12} md={12} >
        <UserCard cardData={workingAtUserDetails} />
        </Grid>
        <Grid item xs={10.5} md={10.5} >
        Software Engineers you may know
        </Grid>
        <Grid item xs={1.5} md={1.5} style={{color: "#747474",fontWeight: "500",cursor: "pointer"}} >
        See All
        </Grid>
        <Grid item xs={12} md={12} style={{paddingTop: "0px"}}>
        <UserCard cardData={viewUserDetails} />
        </Grid>
        <Grid item xs={10.5} md={10.5} >
        Software Engineers you may know
        </Grid>
        <Grid item xs={1.5} md={1.5} style={{color: "#747474",fontWeight: "500",cursor: "pointer"}} >
        See All
        </Grid>
        <Grid item xs={12} md={12} style={{paddingTop: "0px"}}>
        <UserCard cardData={basedOnUserDetails} />
        </Grid>
  </Grid>


</Box>
)
}
export default Right;