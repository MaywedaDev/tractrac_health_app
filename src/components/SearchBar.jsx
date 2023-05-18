import icon from '../assets/NotificationIcon.svg'

const SearchBar = () => {
    return ( <div className="items-center m-5 w-full p-5 rounded-2xl dark:bg-[#0C0C35] h-[80px] flex">
        <div className="flex items-center w-full h-full px-3 gap-2">
            <input className="w-full rounded-lg h-full py-3 px-4 text-[14px]" type="text" placeholder='Search pathology results'/>
            <div className='border-slate-700 border bg-white p-1 rounded-full'>
                <img src={icon} alt="" />
            </div>
            
        </div>
        <div className="flex px-3 items-center gap-x-4 before:h-[50%] before:w-px before:absolute relative before:left-0 before:bg-slate-700">
            <div className="h-12 w-12 bg-slate-700 rounded-[50%]"></div>
            <div>
                <h6 className="dark:text-white whitespace-nowrap font-bold">Ola Boluwatife</h6>
                <p className="uppercase text-primary dark:text-white font-medium">Patient</p>
            </div>
        </div>

    </div> );
}
 
export default SearchBar;