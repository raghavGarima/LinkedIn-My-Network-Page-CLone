import React, { useState } from "react";
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TagIcon from '@mui/icons-material/Tag';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button,Box } from "@mui/material";
import './left.css'
import contactImage from "../../../images/contact.svg"
import followingIcon from '../../../images/Following.svg'
import groupIcon from '../../../images/group.svg'
import connectionIcon from '../../../images/connection.svg'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
const LeftTop=()=>{
  const networkIconsList=[
    {
      icon:<img src={contactImage} style={{marginRight: "16px"}} />,
      iconText:"Contacts"},
    {
      icon: <GroupAddIcon style={{marginRight: "16px"}} />,
      iconText:"Following & followers"},
    {
      icon :<img src={groupIcon} style={{marginRight: "16px"}} />,
      iconText:"Groups"
    },
    {
      icon :<EventIcon style={{marginRight: "16px"}} />,
      iconText:"Groups"
    },
    {
      icon :<NewspaperIcon style={{marginRight: "16px"}} />,
      iconText:"Pages"
    },
    {
      icon:<TagIcon style={{marginRight: "16px"}} />,
      iconText:"Hastags"
    }
  ]
  const [showMore,setShowMore]=useState(true)
return(
<Box sx={{paddingBlock:"0.8rem",    borderBottom: "1px solid #00000014"
}}>
    <p className="manageNetworkText">Manage my network</p>
    <div className="manageNetworDIv"> 
    <img src={connectionIcon} style={{marginRight: "16px"}} />Connections
</div>
    {!showMore? <Button className="greyBtn" onClick={()=>setShowMore(true)}>Show more <KeyboardArrowDownIcon /></Button>:
  networkIconsList.map((item,index)=>{
return <div className="manageNetworDIv" key={index}> 
  {item.icon} {item.iconText}
</div>
   })}
  {showMore &&  <Button className="greyBtn" onClick={()=>setShowMore(false)}>Show less <KeyboardArrowUpIcon /></Button>}
</Box>
)
}
export default LeftTop;