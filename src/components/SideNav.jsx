import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import logo from '../assets/Group-53.png'
import { Home } from "@mui/icons-material";
import icons from '../assets/icons'
// import { makeStyles } from "@mui/material"; 
const drawerWidth = 270

// const useStyles = makeStyles({
//     drawerPaper: {
//         width: drawerWidth
//     }
// })

const tabs = [{title: 'Overview', src: 'overview'}, {title: 'Appointments', src: 'apt'},
 {title: 'Doctors', src: 'doctors'}, {title: 'Pathology Results', src: 'path'}, {title: 'Chats', src: 'chat'}]
const accountTabs = [{title: 'Settings', src: 'search'}, {title: 'Logout', src: 'logout'}]
const SideNav = () => {
    // const classes = useStyles()
    // classes={{paper: classes.drawerPaper}}
    return ( <div>
        <Drawer anchor="left"  variant="permanent" sx={{ width: drawerWidth}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: drawerWidth, minHeight: '100vh'}}>
                <Box sx={{ position: 'relative'}} className="py-4">
                    <Box sx={{ display: 'flex', px: 3,  alignItems: 'center' }}>
                        <img width={45} height={45} src={logo} alt="" className="mr-2" />
                        <Typography variant='h5'>
                            Iwosan
                        </Typography>
                        <img src={icons.expand} className="ml-auto" alt="" />
                    </Box>
                    <div className="absolute w-full h-px bottom-0 dark:bg-slate-300"></div> 
                </Box>
                <List>
                    {tabs.map((item, i) => (
                        <ListItemButton sx={{py: '12px'}} key={i}>
                            <ListItemIcon >
                                <img src={icons[item.src]} alt="" />
                            </ListItemIcon>
                            <ListItemText >
                                <p className="text-[14px]">{item.title}</p>
                            </ListItemText>
                        </ListItemButton>
                    ))}
                </List>
                <List
                subheader={
                    <Typography id="nested-list-subheader" sx={{ml: 2, fontSize: '14px'}}>
                        ACCOUNT
                    </Typography>
                }>
                {accountTabs.map((item, i) => (
                        <ListItemButton sx={{py: '12px'}} key={i}>
                            <ListItemIcon >
                                <img src={icons[item.src]} alt="" />
                            </ListItemIcon>
                            <ListItemText >
                                <p className="text-[14px]">{item.title}</p>
                            </ListItemText>
                        </ListItemButton>
                    ))}
                </List>
                <Box sx={{position: 'relative', mt: 'auto'}}>
                <div className="absolute w-full h-px top-0 dark:bg-slate-300"></div> 
                    <List>
                        <ListItemButton>
                            <ListItemIcon>
                                <Home color='' />
                            </ListItemIcon>
                            <ListItemText >
                                <p  className="text-[#ff0000] text-[12px]">Emergency Hotlines</p>
                                <span className="text-[10px]">+234 92 928 2891  +234 60 621 2098</span>
                            </ListItemText>
                        </ListItemButton>
                    </List>
                </Box>
            </Box>
        </Drawer>
    </div> );
}
 
export default SideNav;