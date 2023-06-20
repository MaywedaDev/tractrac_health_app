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
import AreaChart from "./Charts/AreaChart";



const pallette = {
  borderColor: "none",
  borderWidth: 0,
  weight: 0.2,
  cutout: '70%',
  radius: 60
}

Chart.register(CategoryScale);

const CardStyles = { minHeight: {xs: 'auto', sm: 240}, borderRadius: 3, }

// width: {xs: '100%', sm: 240}

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
        maintainAspectRatio: false,
        aspectRatio: 1.2,
        rotation: 220
      }


      
    return ( <div className="grid grid-cols-6 gap-4">
      {/* flex flex-wrap gap-5 */}

            <Card className="col-span-6 xs:col-span-3 xl:col-span-2 order-1" sx={CardStyles} color="primary" variant="outlined">
                <CardContent sx={{display: 'flex', flexDirection: 'column', height: "100%"}} >
                   <Typography fontSize={12} fontWeight={'bold'} variant="p" textTransform={'uppercase'} >Diagnostics</Typography>
                   <div className="w-full h-full relative">
                      <div className="absolute top-[calc((100%-82px)/2)] right-[calc((100%-52px)/2)] dark:text-white text-black">
                        <p className="text-lg font-semibold">187.2k</p>
                        <span className="text-xs uppercase">Patients</span>
                      </div>
                    <Doughnut
                      data={chartData}
                      options={options}
                    />
                   </div>
                </CardContent>
            </Card>

            <Card className="col-span-6 xs:col-span-3 xl:col-span-2 order-2" color="primary" variant="outlined" sx={CardStyles}>
                <CardContent sx={{display: 'flex', flexDirection: 'column', height: "100%"}} >
                    <Typography fontSize={12} fontWeight={'bold'} variant="p" textTransform={'uppercase'} >Patients</Typography>
                    <div className="w-full h-full relative text-center">
                      <div className="absolute top-[calc((100%-78px)/2)] right-[calc((100%-52px)/2)] dark:text-white text-black">
                        <p className="text-lg font-semibold">11M</p>
                        <span className="text-xs uppercase">Patients</span>
                      </div>
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
                    </div>
                </CardContent>
            </Card>

            <Card className="col-span-6 xs:col-span-3 xl:col-span-2 order-4 xl:order-3" color="primary" variant="outlined" sx={CardStyles}>
                <CardContent sx={{display: 'flex', flexDirection: 'column', height: "100%"}} >
                    <Typography fontSize={12} fontWeight={'bold'} variant="p" textTransform={'uppercase'}>Health Index</Typography>
                      <div className="w-full h-full relative">
                        {/* <div className="absolute left-4 top-2">
                          <p className="font-semibold text-3xl">75%</p>
                          <span className="uppercase text-[10px]">Patient health rate</span>
                        </div> */}
                        <AreaChart />
                      </div>
                </CardContent>
            </Card>

            <Card className="col-span-6 xl:col-span-4 order-3 xl:order-4" color="primary" variant="outlined" sx={{...CardStyles, width: "auto", flexGrow: 1, height: {xs: 'auto', sm: 270}, minWidth: 300}}>
                <CardContent sx={{display: 'flex', flexDirection: "column", maxHeight: '100%', position: "relative"}}>
                    <Typography fontSize={12} fontWeight={'bold'} variant="p" textTransform={'uppercase'}>Covid-19 Pandemic</Typography>
                     <MapChart />
                </CardContent>
            </Card>

            <Card className="col-span-6 xs:col-span-3 xl:col-span-2 order-5" color="primary" variant="outlined" sx={{...CardStyles, height: {xs: 'auto', sm: 270}}}>
                <CardContent sx={{display: 'flex', flexDirection: "column", height: '100%', position: "relative"}}>
                    <Typography fontSize={12} fontWeight={'bold'} variant="p" textTransform={'uppercase'}>Causes Range</Typography>
                     <RadarChart />
                </CardContent>
            </Card>

        </div> );
}
 
export default StatCharts;