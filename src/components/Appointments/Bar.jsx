import Section from "./Section";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar as BarChart } from 'react-chartjs-2';
import { appointmentsData } from "../../utils/data";
import userThemeContext from "../../stores/userThemeContext";
import { useContext } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


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

    const userTheme = useContext(userThemeContext)

    const options = {
        plugins: {
            legend: {
                labels: {
                  pointStyle: 'circle',
                  usePointStyle: true,
                  boxHeight: 6,
                  color:  userTheme.theme ? "#ffffff" : "#000000",
                  font: {
                    size: 10,
                    lineHeight: 0.8,
                    weight: 'bold',
                    family: 'Poppins'
                  }
                },
                position: 'bottom'
              },
        },
        // responsive: true,
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            display: false
          }
        },
        aspectRatio: 1,
        borderRadius: 5,
        barThickness: 10
    }
    return ( 
        <div style={{minWidth: 290}} className="rounded-lg border hidden lg:block  dark:border-borderDark border-borderLight">
        <Section title="Overall appointments" divider={true}>
            <BarChart options={options} data={{
                labels: ['Apr', 'May', "Jun", 'Jul', 'Aug', 'Sep', 'Oct', "Nov", "Dec"],
                datasets: appointmentsData
            }}/>
        </Section>
        
        <Section title="Upcoming appointments" divider={true}>
            
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
    <div className="flex gap-x-2 w-full">
        <div style={{minWidth: "2.5em"}} className="rounded-full h-10 w-10 dark:bg-slate-700 bg-slate-300"></div>
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