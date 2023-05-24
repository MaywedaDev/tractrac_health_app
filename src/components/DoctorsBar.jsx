import { Box, Card, CardContent, Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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
                        <input type="text" className="rounded-lg border dark:border-borderDark border-borderLight dark:bg-dark-accent h-full py-3 px-4 w-full max-w-[350px] text-[14px]" />
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
        <table className="w-full">
            <thead>
                <tr className=" w-full">
                    <th className="uppercase grow">Name</th>
                    <th className="uppercase grow">Role</th>
                    <th className="uppercase grow">Booked Appointments</th>
                    <th className="uppercase grow">Chat</th>
                    <th className="uppercase grow">Book new appointments</th>
                </tr>
            </thead>
            <tbody>
                {doctors.map((doctor, i) => (
                    <tr className="before:rounded-2xl relative before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0  before:dark:border-borderDark before:border" key={i}>
                        <td className=" py-4">{doctor.name}</td>
                        <td className="px-2 py-4">{doctor.role}</td>
                        <td className="px-2 py-4">{doctor.appointments}</td>
                        <td className="px-2 py-4"><MailOutlineIcon /></td>
                        <td className="px-2 py-4">True</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}


 
export default DoctorBar;