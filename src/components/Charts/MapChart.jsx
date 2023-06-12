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
            <img className='left-0 right-0 top-0 bottom-0 opacity-50 absolute' src={globe} alt="" />
            <Scatter options={{
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }} data={data}/>
        </div>
    </> );
}
 
export default MapChart;