import SideNav from "../components/SideNav";
import SearchBar from "../components/SearchBar";
const Dashboard = () => {
    return ( <div className="flex dark:bg-dark-accent min-h-screen">
        <SideNav />
        <SearchBar />
    </div> );
}
 
export default Dashboard;