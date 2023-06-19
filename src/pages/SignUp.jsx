import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../assets/Group-53.png'
import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { signUpUser } from '../hooks/firebaseAuth';
import { useState} from 'react';
import userContext from '../stores/userContext';
import { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { VisibilityOff } from '@mui/icons-material';


const SignUp = () => {

    const history = useHistory()
    const user = useContext(userContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [response, setResponse] = useState({
        message: '',
        status: ''
    })
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const createUser = async () => {
        setResponse({
            message: '',
            status: ''
        })
        setLoading(true)
        const isRegistered = await signUpUser(email, password)

        if(isRegistered.success){
            setLoading(false)
            setResponse({message: isRegistered.message, status: 'success'})
            user.setEmail(isRegistered.user.email)
            if(isRegistered.user?.displayName){
                user.setName(isRegistered.user.displayName)
            }
            user.setIsLoggedIn(true)
            console.log(user)
            // history.push('/dashboard')
        }
        else{
            setLoading(false)
            setResponse({message: isRegistered.message, status: 'error'})
        }
    }


    return ( <div className='flex justify-center items-center min-h-screen py-20 bg-primary dark:bg-[#050517] font-body'>
        <Card sx={{maxWidth: '500px', width: '90%', p: 4, borderRadius: 4}} variant='outlined'>
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={logo} alt="" className='mb-6'/>
                <Typography variant='h6'  component='span' sx={{display: 'inline', fontWeight: 700, textTransform: 'uppercase'}} mb={4}>
                    Create Account
                </Typography>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 3, width: '100%'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <label className='mb-2 text-[14px]'>Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} className='w-full py-4 px-3 border rounded-3xl dark:bg-dark-accent text-[14px] border-slate-200' type="text" placeholder='Ola Boluwatife'/>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <label className='mb-2 text-[14px]'>Email</label>
                        <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full py-4 px-3 border dark:bg-dark-accent rounded-3xl text-[14px] border-slate-200' type="text" placeholder='olaboluwatofezzy@gmail.com'/>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <label className='mb-2 text-[14px]'>Password</label>
                        <div className='relative'><input type={showPassword ? "text" : "password"} name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full py-4 dark:bg-dark-accent px-3 border rounded-3xl text-[14px] border-slate-200' placeholder='XXXXXXXXXXX'/>
                        <div onClick={() => setShowPassword(!showPassword)} className='absolute right-0 top-0 p-4 text-primary dark:text-[#fff]'>{showPassword ? <VisibilityIcon /> :<VisibilityOff /> }</div>
                        </div>
                        </Box>
                </Box>
                
                <Box sx={{display: 'flex', alignItems: 'center', width: '100%', my: 2}}>
                    <Checkbox sx={{p: 0}} color='secondary'/>
                    <p className='text-[14px] ml-1'>I accept the <span  className='text-primary underline'>Terms & Conditions</span></p>
                </Box>
                <Button disabled={loading} onClick={createUser} sx={{width: '100%', borderRadius: 6, py: '13px', my: 4, backgroundColor: '#100DB1'}} variant='contained' disableElevation >SignUp</Button>
                {response.message && <p className={response.status === 'success' ? 'text-primary': 'text-[#ff0000]'}>{response.message}</p>}
                <p className='text-[14px] pb-0'>Already have an account? <Link to='/login' className='text-primary underline'>Login</Link></p> 
            </CardContent>
        </Card> 
    </div> );
}
 
export default SignUp;