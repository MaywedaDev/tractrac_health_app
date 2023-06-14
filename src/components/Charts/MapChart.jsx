import globe from '../../assets/globe.png'
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
    plugins: {
        legend: {
            display: false
          }
    },
    responsive: true,
}

const data = {
    datasets: [{
        label: 'Scatter Dataset',
        data: [{
          x: -10,
          y: 0
        }, {
          x: 0,
          y: 10
        }, {
          x: 10,
          y: 5
        }, {
          x: 0.5,
          y: 5.5
        }],
        backgroundColor: '#FFFB00'
      },
      {
        label: 'Normal Dataset',
        data: [{
          x: -25,
          y: 10
        }, {
          x: 15,
          y: 5
        }, {
          x: 30,
          y: 0
        }, {
          x: 10,
          y: 15
        }],
        backgroundColor: '#0000FF'
      },
      {
        label: 'Abnormal Dataset',
        data: [{
          x: -25,
          y: 15
        }, {
          x: 15,
          y: 20
        }, {
          x: -30,
          y: -10
        }, {
          x: 20,
          y: 25
        }],
        backgroundColor: '#2a71d0'
      },
      {
        label: 'paranormal Dataset',
        data: [{
          x: -5,
          y: 45
        }, {
          x: 35,
          y: -20
        }, {
          x: -30,
          y: -10
        }, {
          x: 45,
          y: 45
        }],
        backgroundColor: '#FF0000'
      },
    ]
    // "#0000FF",
    //           '#FFFB00',
    //           "#2a71d0",
    //           "#FF0000"
}

const MapChart = () => {
    return ( <>
        <div className="w-full h-[236px] relative">
            <div className='left-0 right-0 xs:right-[140px] top-0 bottom-[30px] opacity-50 absolute'>
                <img className='w-full h-full' src={globe} alt="" />
            </div>
            <div className='h-[calc(100%-30px)] w-full xs:w-[calc(100%-140px)] relative'>
                <Scatter options={{
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            display: false
                        },
                        x: {
                            display: false
                        }
                    }
                }} data={data}/>
            </div>
        </div>
        <div className='absolute h-[30px] px-4 text-[12px] left-0 right-0 xs:right-[140px] bottom-0 flex justify-between items-center gap-4 border-t border-borderLight dark:border-borderDark'>
            <p className='text-[#0000FF] font-bold whitespace-nowrap'>Select the countries</p>
            <div className="flex gap-2 overflow-hidden">
                <span className='text-[#0000FF] font-semibold relative before:absolute before:bg-[#0000FF] before:h-px before:w-full before:-top-2'>All</span>
                <span>USA</span>
                <span>China</span>
                <span>Australia</span>
                <span>Botswana</span>
            </div>
        </div>
        <div className='hidden xs:block absolute w-[140px] text-[12px] h-full top-0 right-0 bottom-0 border-l p-4 border-borderLight dark:border-borderDark'>
            <div className='flex flex-col justify-around h-full uppercase'>
                <div>
                    <p>Recovery Zones</p>
                    <p className='text-[#0000FF] before:-bottom-[2px] before:h-px before:w-14 before:absolute relative before:bg-[#0000FF]'>12M</p>
                </div>
                <div>
                    <p>Neutral Zones</p>
                    <p className='text-[#FFFB00] before:-bottom-[2px] before:h-px before:w-14 before:absolute relative before:bg-[#FFFB00]'>12M</p>
                </div>
                <div>
                    <p>Affected Zones</p>
                    <p className='text-[#FF0000] before:-bottom-[2px] before:h-px before:w-14 before:absolute relative before:bg-[#FF0000]'>12M</p>
                </div>
                <div>
                    <p>Safe Zone</p>
                    <p className='text-[#0000FF] before:-bottom-[2px] before:h-px before:w-14 before:absolute relative before:bg-[#0000FF]'>12M</p>
                </div>
            </div>
        </div>
    </> );
}
 
export default MapChart;