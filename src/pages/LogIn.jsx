import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../assets/Group-53.png'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { logInUser } from '../hooks/firebaseAuth';

const LogIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState({
        message: '',
        status: ''
    })

    const logUser = async () => {
        
        setResponse({
            message: '',
            status: ''
        })
        const isRegistered = await logInUser(email, password)

        if(isRegistered.success){
            setResponse({message: isRegistered.message, status: 'success'})
        }
        else{
            setResponse({message: isRegistered.message, status: 'error'})
        }
    }

    return ( <div className='flex justify-center items-center min-h-screen py-20 dark:bg-[#050517] bg-primary font-body'>
        <Card color='primary' sx={{maxWidth: '500px', width: '90%', p: 4, borderRadius: 4}} variant='outlined'>
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={logo} alt="" className='mb-6'/>
                <Typography color='myText' variant='h6'  component='span' sx={{display: 'inline', fontWeight: 700, textTransform: 'uppercase'}} mb={4}>
                    Create Account
                </Typography>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 3, width: '100%'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <label className='mb-2 text-[14px]'>Email</label>
                        <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full py-4 px-3 border rounded-3xl text-[14px] border-slate-200' type="text" placeholder='olaboluwatofezzy@gmail.com'/>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <label className='mb-2 text-[14px]'>Password</label>
                        <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full py-4 px-3 border rounded-3xl text-[14px] border-slate-200' type="text" placeholder='XXXXXXXXXXX'/>
                    </Box>
                </Box>
                
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', my: 2}}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Checkbox sx={{p: 0}}/>
                        <p className='text-[14px] ml-1'>Remember Me</p>
                    </Box>
                    <Box>
                        <p className='text-[14px] ml-1 text-primary underline'>Forgot password?</p>
                    </Box>
                </Box>
                <Button onClick={logUser} sx={{width: '100%', borderRadius: 6, py: '13px', my: 4, backgroundColor: '#100DB1'}} variant='contained' disableElevation >Login</Button>
                {response.message && <p className={response.status === 'success' ? 'text-primary': 'text-[#ff0000]'}>{response.message}</p>}
                <p className='text-[14px] pb-0'>Don't have an account? <Link to='/' className='text-primary underline'>Create an account</Link></p> 
            </CardContent>
        </Card> 
    </div> );
}
 
export default LogIn;