import Layout from "../components/Layout";
import asset from '../assets/Patient-Dashboard-Overview-Light-Theme.jpg'
import darkAsset from '../assets/Section67.jpg'
import userThemeContext from "../stores/userThemeContext";
import StatCharts from "../components/StatCharts";
import { useContext } from "react";
import DoctorBar from "../components/DoctorsBar";
const Dashboard = () => {
    const user = useContext(userThemeContext)
    return (  
        <Layout>
            <div className="px-6 w-full h-full flex flex-col gap-4">
                <StatCharts />
                {/* <img className="w-full h-full" src={user.theme ? darkAsset : asset} alt="" /> */}
                <DoctorBar />
            </div>
            
        </Layout>
    );
}
 
export default Dashboard;