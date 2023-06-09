import Layout from "../components/Layout";
import asset from '../assets/Patient-Dashboard-Overview-Light-Theme.jpg'
import darkAsset from '../assets/Section67.jpg'
import userThemeContext from "../stores/userThemeContext";
import StatCharts from "../components/StatCharts";
import { useContext } from "react";
import DoctorBar from "../components/DoctorsBar";
import AppointmentsBar from '../components/Appointments/Bar'
const Dashboard = () => {
    const user = useContext(userThemeContext)
    return (  
        <Layout>
            <div className="flex">

                <div className="px-2 w-full h-full flex flex-col gap-y-6">
                    <StatCharts />
                    {/* <img className="w-full h-full" src={user.theme ? darkAsset : asset} alt="" /> */}
                    <DoctorBar />
                </div>

                <AppointmentsBar />
            </div>
            
            
        </Layout>
    );
}
 
export default Dashboard;