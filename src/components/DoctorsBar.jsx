import { Box, Card, CardContent, Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import icons from '../assets/icons'

const doctors = [
    {name: "Dr. Ibrahim Yekini", role: 'Heart Surgeon', appointments: 66, booked: false},
    {name: "Dr. Ebuka Kelechi", role: 'Heart Specilaist', appointments: 66, booked: false},
    {name: "Dr. Bridget Olowojeje", role: 'Family Doctor', appointments: 66, booked: true}
]

const DoctorBar = () => {
    return ( <Box>
            <Card variant="outlined" sx={{borderRadius: 3}}>
                <CardContent>
                    <Box sx={{display: 'flex',gap: 3, mb: 3}}>
                        <Typography variant="h6" fontSize={18} sx={{textTransform: 'capitalize', mr: 'auto'}}>Doctors</Typography>
                        <input type="text" placeholder="Search doctors by name or title" className="rounded-lg border dark:border-borderDark border-borderLight dark:bg-dark-accent h-full py-3 px-4 w-full max-w-[350px] text-[14px]" />
                        <div className="rounded-md border dark:border-borderDark border-borderLight overflow-hidden">
                            <button className="hover:bg-[#ff0000] h-full px-4 uppercase">All</button>
                            <button className="hover:bg-[#ff0000] border border-y-0 dark:border-x-borderDark border-x-borderLight h-full px-4 uppercase">Men</button>
                            <button className="hover:bg-[#ff0000] h-full px-4 uppercase">Women</button>
                        </div>
                    </Box>
                    <TableData />

                </CardContent>
            </Card>
        </Box> );
}

const TableData = () => {

    return (
        <div className="w-full">
            <div>
                <ul className="w-full text-[12px] grid grid-cols-[repeat(4,_1fr)_30%] px-4 text-center">
                    <li className="uppercase grow">Name</li>
                    <li className="uppercase grow">Role</li>
                    <li className="uppercase grow">Booked Appointments</li>
                    <li className="uppercase grow">Chat</li>
                    <li className="uppercase grow">Book new appointments</li>
                </ul>
            </div>
            <div>
                {doctors.map((doctor, i) => (
                    <ul className="grid grid-cols-[repeat(4,_1fr)_30%] text-center before:rounded-2xl mb-3 relative before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0  before:dark:border-borderDark before:border px-4" key={i}>
                        <li className=" py-4">{doctor.name}</li>
                        <li className="px-2 py-4">{doctor.role}</li>
                        <li className="px-2 py-4">{doctor.appointments}</li>
                        <li className="px-2 py-4 grid place-items-center"><img width={20} height={19} src={icons.chat} alt="" /></li>
                        <li className="px-2 py-4">True</li>
                    </ul>
                ))}
            </div>
        </div>
    )
}


 
export default DoctorBar;