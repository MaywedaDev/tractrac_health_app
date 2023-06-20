import Layout from "../components/Layout";
import userContext from "../stores/userContext";
import { useContext } from "react";
import logo from '../assets/Group-53.png'
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Logout = () => {
    const user = useContext(userContext)
    // const history = useHistory()
    const logoutUser = () => {
        localStorage.removeItem('user')
        window.location.href = '/'
    }
    return ( 
        <Layout>
            <div className="w-full rounded-xl h-full my-3 px-5 flex justify-center items-center flex-col border border-slate-400">
                <img src={logo} alt="" />
                <input  name='email' value={user.email} className='w-full max-w-[400px] py-4 px-3 border rounded-3xl text-[14px] border-slate-200' type="text" placeholder='XXXXXXXXXXX'/>
                <Button onClick={logoutUser} sx={{width: '100%', maxWidth: '400px', borderRadius: 6, py: '13px', my: 4, backgroundColor: '#100DB1'}} variant='contained' disableElevation >Logout</Button>
            </div>
        </Layout>
     );
}
 
export default Logout;