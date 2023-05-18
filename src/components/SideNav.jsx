import { Drawer } from "@mui/material";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import logo from '../assets/Group-53.png'
import Divider from "@mui/material/Divider";
// import { makeStyles } from "@mui/material"; 
const drawerWidth = 270

// const useStyles = makeStyles({
//     drawerPaper: {
//         width: drawerWidth
//     }
// })
const SideNav = () => {
    // const classes = useStyles()
    // classes={{paper: classes.drawerPaper}}
    return ( <div>
        <Drawer anchor="left"  variant="permanent" sx={{ width: drawerWidth}}>
            <Box sx={{ width: drawerWidth, position: 'relative'}} className="py-4">
                <Box sx={{ display: 'flex', px: 3,  alignItems: 'center' }}>
                    <img width={48} height={48} src={logo} alt="" className="mr-2" />
                    <Typography variant='h4'>
                        Iwosan
                    </Typography>
                </Box>
            <div className="absolute w-full h-px bottom-0 dark:bg-slate-300"></div> 
            </Box>
        </Drawer>
    </div> );
}
 
export default SideNav;