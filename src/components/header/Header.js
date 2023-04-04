import React from "react";
import { styled, alpha } from '@mui/material/styles';
import {MenuItem,Menu,Badge,InputBase,Typography,IconButton,Toolbar,AppBar,Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import likedInIcon from '../../images/linkedIn.svg'
import networkIcon from '../../images/network.svg'
import notificationIcon from '../../images/notification.svg'
import messageIcon from '../../images/message.svg'
import { color } from "@mui/system";

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

const Header=()=>{

  const headerIconsList=[
    {
      icon:<HomeIcon sx={{height:"29px",width:"29px",color:"#666666"}} />,
      iconText:"Home"},
    {
      icon: <img src={networkIcon} sx={{height:"29px",width:"29px"}} />,
      iconText:"My Network"},
    {
      icon :<BusinessCenterIcon sx={{height:"29px",width:"29px" ,color:"#666666"}} />,
      iconText:"Jobs"
    },
    {
      icon : <img src={messageIcon} sx={{height:"29px",width:"29px"}} />,
      iconText:"Messaging"
    },
    {
      icon :<Badge badgeContent={9} color="error">
      <img src={notificationIcon} sx={{height:"29px",width:"29px" ,color:"#666666"}} />
      </Badge>,
      iconText:"Notifications"
    },
    {
      icon:<AccountCircle sx={{height:"29px",width:"29px" ,color:"#666666"}} />,
      iconText:<>Me <ArrowDropDownIcon  /></>,
    }
  ]
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
   {
            headerIconsList.map((item,index)=>{
              return (
                <MenuItem key={index}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit" className="forIconsBtn">
                {item.icon}
              
            </IconButton>
            <p>{item.iconText}</p>
            </MenuItem>
            )
            })
          }


  
    </Menu>
  );
  const searchWrapper = (
    <Search 
    sx={{ width: {xs:"66%",sm:"26%"}, background: "#e5e8eb",height:"35px",
    color: "#7a7676"}} style={{    marginLeft: "3px"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
  );

  return (
    <Box sx={{ flexGrow: 1, height: "53px" }}>
      <AppBar position="static" sx={{backgroundColor:"white",color:"grey",alignItems:"center",boxShadow: "none",
  borderBottom: "1px solid #e7e2e2"}}>
        <Toolbar sx={{ width: { xs: '100%', sm: '83%' },paddingRight:{xs:"0px"},paddingLeft:{xs:"0px"}}} style={{minHeight: "58px"}}>
      
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } ,height:"2.8rem"}}
          >
          <img src={likedInIcon} style={{height: "42px", width: "40px"}} />

          </Typography>
          {searchWrapper}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {
            headerIconsList.map((item,index)=>{
              return (
                <IconButton key={index} size="large" aria-label="show 4 new mails" color="inherit" className={item.iconText=="My Network"?"active":"forIconsBtn"}>
                {item.icon}
              <p className="headerContent">{item.iconText}</p>
            </IconButton>
            )
            })
          }
        
            <Box style={{  height: "3.5rem",
            color: "black",
            border: "1px solid #ddd4d4"}}></Box>
          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              className="forIconsBtn"
            >
            <AppsIcon />
    
                <p className="headerContent">Work <ArrowDropDownIcon onClick={handleClick} /></p>  
            </IconButton>
            <p className="forPremium">
            Try Premium for free
            </p>

          </Box>
        
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            
          </Box>
         
        </Toolbar>
      </AppBar>
      {renderMobileMenu}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
 
)
}
export default Header;