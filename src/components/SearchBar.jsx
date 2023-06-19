import icon from '../assets/NotificationIcon.svg'
import userContext from '../stores/userContext';
import { useContext } from 'react';

const SearchBar = () => {

    const user = useContext(userContext)



    return ( <div className="searchbar items-center m-4 mb-3 p-5 rounded-2xl bg-paper dark:bg-[#0C0C35] h-[80px] flex">
        <div className="flex items-center w-full h-full px-3 gap-2">
            <input className="w-full rounded-lg h-full py-3 px-4 text-[14px]" type="text" placeholder='Search pathology results'/>
            <div className='border-slate-700 border bg-white p-1 rounded-full'>
                <img src={icon} alt="" />
            </div>
            
        </div>
        <div className="flex px-3 items-center gap-x-4 before:h-[50%] before:w-px before:absolute relative before:left-0 before:bg-slate-700">
            <div className="h-12 w-12 dark:bg-slate-700 bg-slate-300 rounded-[50%]"></div>
            <div className='hidden md:block'>
                <h6 className="dark:text-white whitespace-nowrap font-bold">{user.name}</h6>
                <span className='text-[12px] font-normal dark:text-white'>{user.email}</span>
                <p className=" text-[12px] uppercase text-primary dark:text-white font-medium">Patient</p>
            </div>
        </div>

    </div> );
}
 
export default SearchBar;