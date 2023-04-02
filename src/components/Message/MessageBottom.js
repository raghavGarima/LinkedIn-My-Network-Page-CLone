import React, { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import {InputBase,Box,Tabs,Tab,Avatar} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const MessageComponentBottom=()=>{
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const searchWrapper = (
    <Search 
    sx={{ width: {xs:"66%",sm:"92%"}, background: "#e5e8eb", 

    color: "#7a7676"}} style={{margin: "12px",}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
  );
return(

<>
  {searchWrapper}
   <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Focused" sx={{width:"50%"}}/>
          <Tab label="Other" sx={{width:"50%"}}/>
        </Tabs>
      </Box>
     <Box sx={{ height: "280px",overflow: "hidden"}}>
{["One","Two"].map(()=>{
  return (
    <Box className="messageBoxMessageMainDiv">
<Avatar alt="Sharp" src="/static/images/avatar/1.jpg" />
<Box sx={{    borderBottom: "1px solid #dfd7d7",
    paddingBottom: "10px",}}>
  <Box className="messageBoxMessageHeading"><p>Shikha Raghav</p><p>Mar 10</p></Box>
  <p className="messageBoxSubMessageContent">Hi Garima,We'd like to invite you to try </p>
</Box>
</Box>
  )
})}
  </Box>
   </Box>
   </>

)
}
export default MessageComponentBottom;