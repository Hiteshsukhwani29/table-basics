import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { AppBar, Box, createTheme, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import "../styles/Table.module.css";
// import { createTheme } from '@mui/material/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const theme = createTheme({
  //   components:{
  //     MuiPopover-paper{

  //     }
  //   }
  // })
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            onMouseEnter={handleClick}
            style={{ color: "black" }}
          >
            <MenuIcon />
          </Button>
          <Menu
            id="fade-menu"
            // MenuListProps={{
            //   "aria-labelledby": "fade-button",
            // }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
            TransitionComponent={Fade}
            sx={{
              '& .MuiMenu-list':{
                color: "gold",
                border: "1px solid gold",
                background:'#000000',
                padding:'2px',
                width:'200px'
              },
              '& .MuiMenuItem-root':{
                border: "1px solid gold",
                margin: "2px",
                '&:hover':{
                  background:'gold',
                  color:'black',
                  fontWeight:'600'
                }
              }
            }}
          >
            <MenuItem
              
              onClick={handleClose}
            >
              Language
            </MenuItem>
            <MenuItem
             
              onClick={handleClose}
            >
              Preferences
            </MenuItem>
            <MenuItem
              
              onClick={handleClose}
            >
              Switch to Admin
            </MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Zicops
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

    </>
  );
}
