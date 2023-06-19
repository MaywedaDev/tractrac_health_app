import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Bar as BarChart } from 'react-chartjs-2';
import userThemeContext from '../../stores/userThemeContext';
import { useContext } from 'react';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

const options = {
    responsive: true,
    elements: {
        point: {
            pointStyle: false
        }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
        y: {
            beginAtZero: true, 
            display: false
        },
        x: {
            display: false
        }
    },
    maintainAspectRatio: false,
  };


const labels = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const lineData = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        borderColor: "transparent",
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
        tension: 0.4
      },
    ],
  };


const AreaChart = () => {
    const userTheme = useContext(userThemeContext)

    return ( <>
            <Line options={options} data={lineData}></Line>
            <div className='absolute w-[calc(100%+10px)] h-[calc(100%-64px)] bottom-4 top-16 -left-[5px]'>
                <BarChart options={{
                    plugins: {
                        legend: {
                            display: false,
                            position: 'bottom'
                          },
                    },
                    responsive: true,
                    aspectRatio: 1.2,
                    maintainAspectRatio: false,
                    interaction: {
                      intersect: false,
                    },
                    scales: {
                      x: {
                        stacked: false,
                        ticks: {
                            color: userTheme.theme ? "#ffffff" : "#000000"
                        }
                      },
                      y: {
                        stacked: false,
                        display: false,
                      }
                    },
                    borderRadius: 5,
                    barThickness: 7
                }} data={{
                    labels,
                    datasets: [{
                        data: lineData.datasets[0].data,
                        backgroundColor: 'rgba(0, 0, 255, 1)'
                    }]
                }}/>
            </div>
    </> );
}
 
export default AreaChart;