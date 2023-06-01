import Section from "./Section";


const upcoming =  [
    {name: "Dr. Ibrahim Yekeni", date: "Tuesday, October 24", color: "#100DB1", type: "Emergency"},
    {name: "Dr. Ebuka Kelechi", date: "Monday, November 2", color: '#FFFB00', type: "Examination"},
    {name: "Dr. Bridget Olowojeje", date: "Friday November 13", color: "#2a71d0", type: "Consultation" },
    {name: "Dr. Micheal Stwart", date: "Thursday, December 9", color: "#ff0000", type: "Routine Checkup"}
]

const prev = [
    {name: "Dr. Scut Tom", date: "Friday, August 11", color: "#0000ff", type: "SICK VISIT"},
    {name: "Dr. Amina Ahmed", date: "Tuesday, July 30", color: '#2a71d0', type: "Consultation"},
    {name: "Dr. Ibrahim Yekeni", date: "Wednesday, July 10", color: "#FFFB00", type: "Examination" },
    {name: "Dr. Barnabas Paul", date: "Monday, June 14", color: "#100DB1", type: "Emergency"}
]

const Bar = () => {
    return ( 
        <div style={{minWidth: 290}} className="rounded-lg border hidden lg:block  dark:border-borderDark border-borderLight">
        <Section title="Upcoming appointments">
            
               {upcoming.map((item, i) => (<Tile key={i} {...item}/>) )}
        </Section>

        <Section title="Previous appointments">
            <div>
                <div className="flex rounded-md mb-4 border h-12 dark:border-borderDark border-borderLight overflow-hidden">
                    <button className="hover:bg-[#ff0000] h-full w-full px-4 uppercase">All</button>
                    <button className="hover:bg-[#ff0000] border w-full border-y-0 dark:border-x-borderDark border-x-borderLight h-full px-4 uppercase">Men</button>
                    <button className="hover:bg-[#ff0000] h-full w-full px-4 uppercase">Women</button>
                </div>
                {prev.map((item, i) => <Tile key={i} {...item}/>)}
            </div>
        </Section>
    </div> );
}

const Tile = ({name, type, color, date}) => {
    return (<div className="flex mb-2 rounded-lg justify-between border p-3 text-[10px] dark:border-borderDark border-borderLight">
    <div className="flex justify-between w-full">
        <div style={{minWidth: "2.5em"}} className="rounded-full h-10 w-10 mr-1 dark:bg-slate-700 bg-slate-300"></div>
        <div>
            <p className="text-[11px] font-semibold">{name}</p>
            <p className="font-semibold" style={{color: color}}>{type}</p>
        </div>
        <div>
            <p className="text-right">{date}</p>
        </div>
    </div>
   </div>)
}
 
export default Bar;