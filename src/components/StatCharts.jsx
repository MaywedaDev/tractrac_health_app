import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from '../utils/data'
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Pie } from "react-chartjs-2";

Chart.register(CategoryScale);

const StatCharts = () => {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              '#ffffff',
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });
    return ( <div className="flex flex-wrap gap-x-5">
            <Card sx={{width: 250 , height: 210, borderRadius: 3}} color="primary" variant="outlined">
                <CardContent >
                   <Typography variant="p" textTransform={'uppercase'} >Diagnostics</Typography>
                   <Pie
                    data={chartData}
                    options={{
                    plugins: {
                        title: {
                        display: true,
                        text: "Users Gained between 2016-2020"
                        }
                    }
                    }}
                   />
                </CardContent>
            </Card>
            <Card color="primary" variant="outlined" sx={{width: 250 , height: 210, borderRadius: 3}}>
                <CardContent >
                    <Typography variant="p" textTransform={'uppercase'} >Patients</Typography>
                </CardContent>
            </Card>
        </div> );
}
 
export default StatCharts;