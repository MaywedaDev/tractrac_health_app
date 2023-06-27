import Layout from "../components/Layout";

const Pathology = () => {
    return ( 
        <Layout name="pathology">

            <div className="flex mx-2 gap-4 flex-wrap md:flex-nowrap items-center justify-end dark:text-[#fff]">
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
        </Layout>
     );
}
 
export default Pathology;