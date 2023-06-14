import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import logo from '../assets/Group-53.png'
import icons from '../assets/icons'
import { Link } from 'react-router-dom';
import userThemeContext from "../stores/userThemeContext";
import { useContext, useState } from "react";
// import { makeStyles } from "@mui/material"; 
const drawerWidth = 250


const container = window !== undefined ? () => window.document.body : undefined;

const tabs = [{title: 'Overview', src: 'overview', url: '/'}, {title: 'Appointments', src: 'apt', url: ''},
 {title: 'Doctors', src: 'doctors', url: ''}, {title: 'Pathology Results', src: 'path', url: ''}, {title: 'Chats', src: 'chat', url: ''}]
const accountTabs = [{title: 'Settings', src: 'search', url: ''}, {title: 'Logout', src: 'logout', url: '/logout'}]
const SideNav = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const userTheme = useContext(userThemeContext)
    // const classes = useStyles()
    // classes={{paper: classes.drawerPaper}}
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
    return ( <div>
        <div style={{
            '@media screen and (minWidth: 900px)': {
                display: 'none'
            }
        }} onClick={handleDrawerToggle} className="h-12 w-12 flex justify-center items-center bg-paper mt-6 ml-4 dark:bg-dark-purple rounded-md absolute">
            <img  src={ userTheme.theme ? icons.expandLight : icons.expand } alt="" />
            
        </div>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer anchor="left"  variant="permanent" sx={{display: {xs: 'none',sm: 'none', md: 'block'}, width: drawerWidth}}>
            {drawer}
        </Drawer>
    </div> );
}

const drawer = (<div className="dark:bg-dark-purple bg-paper">
    <Box sx={{ display: 'flex', flexDirection: 'column', width: drawerWidth, minHeight: '100vh'}}>
        <Box sx={{ position: 'relative'}} className="py-4">
            <Box sx={{ display: 'flex', px: 3,  alignItems: 'center' }}>
                <img width={45} height={45} src={logo} alt="" className="mr-2" />
                <Typography variant='h5'>
                    Iwosan
                </Typography>
                {/* <img src={userTheme.theme ? icons.expandLight : icons.expand} className="ml-auto" alt="" /> */}
            </Box>
            <div className="absolute w-full h-px bottom-0 dark:bg-slate-300"></div> 
        </Box>
        <List>
            {tabs.map((item, i) => (
                <Link to={item.url}>
                <ListItemButton sx={{py: '12px'}} key={i}>
                    <ListItemIcon >
                        <img src={icons[item.src]} alt="" />
                    </ListItemIcon>
                    <ListItemText sx={{fontSize: '14px'}}>
                    <span className="text-[14px]">{item.title}</span>
                    </ListItemText>
                </ListItemButton>
                </Link>
            ))}
        </List>
        <List
        subheader={
            <Typography id="nested-list-subheader" sx={{ml: 2, fontSize: '14px'}}>
                ACCOUNT
            </Typography>
        }>
        {accountTabs.map((item, i) => (
            <Link to={item.url} className="text-[14px]">
                <ListItemButton sx={{py: '12px'}} key={i}>
                    <ListItemIcon >
                        <img src={icons[item.src]} alt="" />
                    </ListItemIcon>
                    <ListItemText >
                        <span className="text-[14px]">{item.title}</span>
                    </ListItemText>
                </ListItemButton>
            </Link>
            ))}
        </List>
        <Box sx={{position: 'relative', mt: 'auto'}}>
        <div className="absolute w-full h-px top-0 dark:bg-slate-300"></div> 
            <List>
                <ListItemButton sx={{gap: 1.5}}>
                    <ListItemIcon sx={{p: 1, backgroundColor: '#100DB1', borderRadius: 1, minWidth: 2 }}>
                        <img src={icons.htLns} />
                    </ListItemIcon>
                    <ListItemText >
                        <p  className="text-[#ff0000] text-[12px]">Emergency Hotlines</p>
                        <p className="text-[10px]">+234 92 928 2891</p>
                        <p className="text-[10px]"> +234 60 621 2098</p>
                    </ListItemText>
                </ListItemButton>
            </List>
        </Box>
    </Box>
</div>

)
 
export default SideNav;