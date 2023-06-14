import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Radar } from 'react-chartjs-2';
import userThemeContext from '../../stores/userThemeContext';
import { useContext } from 'react';
  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  const data = {
    labels: ['Malaria', 'Cold', 'Thyphoid', 'Severe Headache', 'Cough', 'Fever'],
    datasets: [
      {
        data: [1000, 3000, 2000, 2000, 1000, 3000],
        backgroundColor: 'rgba(42, 113, 208, 0.2)',
        borderColor: 'rgba(42, 113, 208, 1)',
        borderWidth: 1,
        tension: 0.4
      },
    ],
  };

const RadarChart = () => {

  const userTheme = useContext(userThemeContext)
    return ( <div className='w-full h-full relative'>
        <Radar data={data} options={{
          aspectRatio: 1,
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              display: false,
              labels: {
              
              }
            }
          },
          scales: {
            r: {
              beginAtZero: true,
              angleLines: {
                  display: false
              },
              pointLabels: {
                color: userTheme.theme ? '#fff' : '#000'
              },
              ticks:{
                count: 5,
                display: false
              },
              grid: {
                color: userTheme.theme ? '#fff' : '#0000001f'
              }
            }
          }
        }}/>
    </div> );
}
 
export default RadarChart;