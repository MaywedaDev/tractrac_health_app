import SideNav from "../components/SideNav";
import SearchBar from "../components/SearchBar";
import { WbSunny } from "@mui/icons-material";
import { Switch } from "@mui/material";
import { useContext, useState } from 'react';
import userThemeContext from "../stores/userThemeContext";
import userContext from "../stores/userContext";
const Layout = ({children}) => {
    const userTheme = useContext(userThemeContext)
    const user = useContext(userContext)

    console.log(user)

    const handleTheme = () => {
        userTheme.switchTheme()
        console.log(userTheme.theme)
    }


    return ( 
        <div className="flex dark:bg-dark-accent min-h-screen pb-4">
            <SideNav />
            <div className="min-h-full w-full flex flex-col">
                <SearchBar />
                <div className="flex flex-col px-2 w-full text-[14px] h-full">
                    <div className="flex justify-between mb-4 px-1">
                        <div className="mx-1">
                            <p className="text-[#ff0000] font-semibold">Welcome {user.name == 'Unknown' ? user.email : user.name}</p>
                            <span className="dark:text-white">How are you feeling today</span>
                        </div>
                        <div className="flex items-center">
                            <WbSunny  color="secondary"/>
                            <Switch checked={userTheme.theme} onChange={handleTheme} color="secondary"/>
                            <span className="dark:text-white text-[14px] hidden md:inline">Apply {userTheme.theme ? 'Light': 'Dark'} theme</span>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        
        </div>
     );
}
 
export default Layout;