import Layout from "../components/Layout";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Pathology = () => {
    return ( 
        <Layout name="pathology">

            <div className="mx-2 dark:text-[#fff]">
                <div className="flex gap-4 flex-wrap md:flex-nowrap items-center justify-end mb-6">
                    <p className="uppercase font-semibold">Show</p>
                    <div className="w-[150px] shrink-0">
                        <select defaultValue={1} type="text" className="text-[12px] rounded-lg border dark:border-borderDark border-borderLight dark:bg-dark-accent h-full py-3 px-4 w-full" >
                            {[...Array(12)].map((el, i) => <option value={i} key={i}>{ i + 1}</option>)}
                        </select>
                    </div>
                    <div className="grow">
                        <select defaultValue={1} type="text" className="text-[12px] rounded-lg border dark:border-borderDark border-borderLight dark:bg-dark-accent h-full py-3 px-4 w-full" >
                            {[...Array(12)].map((el, i) => <option value={i} key={i}>This month: October</option>)}
                        </select>
                    </div>
                    <div className="rounded-md border dark:border-borderDark border-borderLight overflow-hidden h-[47px] min-w-[fit-content]">
                        <button className="hover:bg-[#ff0000] h-full px-4 uppercase">All</button>
                        <button className="hover:bg-[#ff0000] border border-y-0 dark:border-x-borderDark border-x-borderLight h-full px-4 uppercase">Men</button>
                        <button className="hover:bg-[#ff0000] h-full px-4 uppercase">Women</button>
                    </div>
                </div>

                <DoctorsBar />

            <div className="flex justify-between my-2 items-center">
                <p>Showing 1 to 8 of 40 items</p>
                <div className="p-2 border dark:border-borderDark border-borderLight rounded-3xl">
                    <Pagination
                         renderItem={(item) => (
                            <PaginationItem
                            slots={{previous: ArrowCircleLeftOutlinedIcon, next: ArrowCircleRightOutlinedIcon}}
                            {...item}
                            />
                          )}
                     count={10} color="primary" />
                </div>
            </div>

            </div>
        </Layout>
     );
}

const DoctorsBar = () => {

    const results = [
        {name: "Dr. Ibrahim Yekini", file: "Malaria Infection Treatment", time: '2:00PM'},
        {name: "Dr. Ebuka Kelechi", file: "Transcend", time: '5:00AM'},
        {name: "Dr. Kemi Olowojeje", file: "Covid 19 Test", time: '4:00PM'},
        {name: "Dr. Micheal Stewart", file: "Pregnancy", time: '8:00PM'},
        {name: "Dr. Scut Tom", file: "Bacteria Infection Treatment", time: '11:00AM'},
        {name: "Dr. Amina Ahmed", file: "Heart Test", time: '3:00PM'},
        {name: "Dr. Barnabas Paul", file: "Blood Pressure", time: '10:40AM'},
        {name: "Dr. Ayo Jones", file: "Sugar Test", time: '8:30AM'}
    ]

    return (<div className="w-full text-[12px] min-w-[720px] md:min-w-full border dark:border-borderDark border-borderLight rounded-xl p-4">
    <div className="mb-2">
        <ul className="w-full text-[11px] grid grid-cols-[repeat(4,_1fr)] font-semibold">
            <li className="uppercase grow">Doctor</li>
            <li className="uppercase grow text-center">File</li>
            <li className="uppercase grow text-center">Time</li>
            <li className="uppercase grow text-center">Action</li>
        </ul>
    </div>
    <div>
        {results.map((result, i) => (
            <ul className="grid grid-cols-[repeat(4,_1fr)] border border-borderLight dark:border-borderDark rounded-xl  mb-3 relative  px-4 items-center py-1" key={i}>
                <li className="flex items-center font-semibold gap-2">
                    <div style={{minWidth: "2.5em"}} className="rounded-full h-10 w-10 dark:bg-slate-700 bg-slate-300"></div>
                    <p>{result.name}</p></li>
                <li className="px-2 py-4 text-center">{result.file}</li>
                <li className="px-2 py-4 text-center text-[#ff0000] font-semibold">{result.time}</li>
                <li className="px-2 py-4 text-center"><button className=' hover:bg-primary hover:text-white py-1 px-3 uppercase rounded-3xl border border-borderLight dark:border-borderDark font-semibold' >View Result</button></li>
                <div className="absolute top-[calc((100%-24px)/2)] right-4">
                    <MoreHorizIcon />
                </div>
            </ul>
        ))}
    </div>
</div>)
}
 
export default Pathology;