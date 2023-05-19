import Layout from "../components/Layout";
import asset from '../assets/Patient-Dashboard-Overview-Light-Theme.jpg'
import darkAsset from '../assets/Section67.jpg'
import userThemeContext from "../stores/userThemeContext";
import { useContext } from "react";
const Dashboard = () => {
    const user = useContext(userThemeContext)
    return (  
        <Layout>
            <div className="px-6 w-full h-full">
                <img className="w-full h-full" src={user.theme ? darkAsset : asset} alt="" />
            </div>
            
        </Layout>
    );
}
 
export default Dashboard;