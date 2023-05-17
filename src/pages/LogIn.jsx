import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../assets/react.svg'
import { TextField }  from '@mui/material';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';

const LogIn = () => {
    return ( <>
        <Card sx={{maxWidth: '500px', width: '90%', p: 3, borderRadius: 4}} variant='outlined'>
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={img} alt="" />
                <Typography variant='h5'  component='span' sx={{display: 'inline'}} mb={2}>
                    Create Account
                </Typography>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 4, width: '100%'}}>
                    {/* <TextField label="Name"/>
                    <TextField label="Email"/>
                    <TextField label="Password"/>
                    <Input value="Hello" /> */}
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <label style={{fontSize: '18px'}}>Name</label>
                        <input style={{width: '100%', padding: '20px 15px', border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: "25px"}} type="text" placeholder='Ola Boluwatife'/>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <label style={{fontSize: '18px'}}>Email</label>
                        <input style={{width: '100%', padding: '20px 15px', border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: "25px"}} type="text" placeholder='Ola Boluwatife'/>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <label style={{fontSize: '18px'}}>Password</label>
                        <input style={{width: '100%', padding: '20px 15px', border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: "25px"}} type="text" placeholder='Ola Boluwatife'/>
                    </Box>
                </Box>
                
                <Box sx={{display: 'flex', alignItems: 'center', width: '100%'}}>
                    <Checkbox />
                    <Typography variant='p' gutterBottom>
                        I accept the terms and conditions
                    </Typography>
                </Box>
                <Button sx={{width: '100%', borderRadius: 6, py: '13px'}} variant='contained' disableElevation color='info'>Login</Button>
                <Typography variant='span'>
                    Already have an account? LogIn
                </Typography>
            </CardContent>
        </Card> 
    </> );
}
 
export default LogIn;