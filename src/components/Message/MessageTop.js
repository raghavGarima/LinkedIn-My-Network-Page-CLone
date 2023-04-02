import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Box} from '@mui/material';
import editIcon from '../../images/edit.svg'
const MessageComponentTop=()=>{
 
return(
  <>
    <Box sx={{alignItems:"center",    display: "flex"}}>
    <AccountCircleIcon sx={{marginRight:"5px",    width: "30px",
    height: "30px",
    color: "#808080"}} />
    Messaging
    </Box>
   <Box >
<MoreHorizIcon className="formMessageBottomDivIcons" />
<img src={editIcon} className="formMessageBottomDivIcons" />
<KeyboardArrowUpIcon className="formMessageBottomDivIcons"  />
   </Box>
  </>
)
}
export default MessageComponentTop;