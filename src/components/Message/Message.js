import React, { useState } from "react";
import MessageComponentBottom from './MessageBottom'
import MessageComponentTop from './MessageTop'
import {Box} from '@mui/material';

const MessageComponent=()=>{
  const [isMessageBoxActive,setIsMessageBoxActive]=useState(false)
  
return(
  <>
    <Box className={isMessageBoxActive?"formMessageBottomDiv formMessageBottomDivOpen" :"formMessageBottomDiv"} sx={{display:{xs:"none",md:"block"}}} >
    <Box sx={{width:"95%",    padding: "6px 7px",borderBottom: "1px solid #ddd7d7"}} className="formMessageBottomFirstDiv" onClick={()=>setIsMessageBoxActive(!isMessageBoxActive)}>
 <MessageComponentTop />
   </Box>
{isMessageBoxActive &&
<MessageComponentBottom />
}  
    </Box>
  </>
)
}
export default MessageComponent;