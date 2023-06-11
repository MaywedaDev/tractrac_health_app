import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { illnessData } from '../utils/data'
import { patientData } from "../utils/data";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Pie, Doughnut } from "react-chartjs-2";
import userThemeContext from "../stores/userThemeContext";
import { useContext } from "react";
import RadarChart from "./Charts/RadarChart";
import MapChart from "./Charts/MapChart";



const pallette = {
  borderColor: "none",
  borderWidth: 0,
  weight: 0.2,
  cutout: '70%',
  radius: 60
}

Chart.register(CategoryScale);

const CardStyles = {width: {xs: '100%', sm: 240} , minHeight: {xs: 'auto', sm: 210}, borderRadius: 3, }

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

      const userTheme = useContext(userThemeContext)

      const options = {
        plugins: {
          legend: {
            labels: {
              pointStyle: 'circle',
              usePointStyle: true,
              boxHeight: 6,
              color: userTheme.theme ? "#ffffff" : "#000000",
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


      
    return ( <div className="flex flex-wrap gap-5">

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

            <Card color="primary" variant="outlined" sx={CardStyles}>
                <CardContent >
                    <Typography fontSize={12} fontWeight={'bold'} variant="p" textTransform={'uppercase'}>Health Index</Typography>
                </CardContent>
            </Card>

            <Card color="primary" variant="outlined" sx={{...CardStyles, width: "auto", flexGrow: 1, height: {xs: 'auto', sm: 270}, minWidth: 300}}>
                <CardContent sx={{display: 'flex', flexDirection: "column", maxHeight: '100%'}}>
                    <Typography fontSize={12} fontWeight={'bold'} variant="p" textTransform={'uppercase'}>Covid-19 Pandemic</Typography>
                     <MapChart />
                </CardContent>
            </Card>

            <Card color="primary" variant="outlined" sx={{...CardStyles, height: {xs: 'auto', sm: 270}}}>
                <CardContent >
                    <Typography fontSize={12} fontWeight={'bold'} variant="p" textTransform={'uppercase'}>Causes Range</Typography>
                     <RadarChart />
                </CardContent>
            </Card>

        </div> );
}
 
export default StatCharts;