import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { illnessData } from '../utils/data'
import { patientData } from "../utils/data";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Pie, Doughnut } from "react-chartjs-2";

const options = {
  plugins: {
    legend: {
      labels: {
        pointStyle: 'circle',
        usePointStyle: true,
        boxHeight: 6,
        color: '#ffffff',
        font: {
          size: 10,
          lineHeight: 0.8,
          weight: 'bold',
          family: 'Poppins'
        }
      },
      position: 'bottom'
    }
  },
  responsive: true,
  aspectRatio: 1.2,
  rotation: 220
}

const pallette = {
  borderColor: "none",
  borderWidth: 0,
  weight: 0.2,
  cutout: '70%',
  radius: 60
}

Chart.register(CategoryScale);

const CardStyles = {width: 250 , height: 220, borderRadius: 3}

const StatCharts = () => {
    const [chartData, setChartData] = useState({
        labels: illnessData.map((data) => data.illness), 
        datasets: [
          {
            label: "Users Gained ",
            data: illnessData.map((data) => data.userGain),
            backgroundColor: [
              "#0000FF",
              '#FFFB00',
              "#2a71d0",
              "#FF0000"
            ],
            ...pallette
          }
        ]
      });
      
    return ( <div className="flex flex-wrap gap-x-5">
            <Card sx={CardStyles} color="primary" variant="outlined">
                <CardContent >
                   <Typography fontSize={12} fontWeight={'bold'} variant="p" textTransform={'uppercase'} >Diagnostics</Typography>
                   <Doughnut
                    data={chartData}
                    options={options}
                   />
                </CardContent>
            </Card>
            <Card color="primary" variant="outlined" sx={CardStyles}>
                <CardContent >
                    <Typography fontSize={12} fontWeight={'bold'} variant="p" textTransform={'uppercase'} >Patients</Typography>
                    <Doughnut 
                     data={{
                      labels: patientData.map((data) => data.category),
                      datasets: [
                        {
                          label: 'Users ',
                          data: patientData.map((data) => data.amount),
                          backgroundColor: [
                            "#0000FF",
                            "#FF0000",
                            '#FFFB00'
                          ],
                          ...pallette
                        }
                      ]
                     }}
                     options={options}
                    />
                </CardContent>
            </Card>
        </div> );
}
 
export default StatCharts;