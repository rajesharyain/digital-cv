import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { retrieveContributionData } from './github/githubApi';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, BarElement,PointElement, Title, Tooltip, Legend } from 'chart.js';
import { makeStyles } from '@material-ui/core';
//import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

//ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
ChartJS.register(CategoryScale,LineElement, LinearScale, BarElement,PointElement, Title, Tooltip, Legend);

const useStyles = makeStyles((theme) => ({
  section: {
      marginTop: theme.spacing(2),
  },
}));

interface ChartProps {
  userName: string;
}

const ReactChart: React.FC<ChartProps> = ({ userName }) => {
  const [chartData, setChartData] = useState<any>(null);
  const [barChartData, setBarChartData] = useState<any>(null);
  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      try{
        const data = await retrieveContributionData(userName);
        const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
        const labels = weeks.flatMap(week => week.contributionDays.map(day => day.date));
        const contributions = weeks.flatMap(week => week.contributionDays.map(day => day.contributionCount));
      
        setChartData({
          labels,
          datasets: [
            {
              label: 'Contributions',
              data: contributions,
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.6)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
            },
          ],
        });

        setBarChartData({
          type:"bar",
          labels,
          datasets: [
            {
              label: 'Contributions',
              data: contributions,
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.6)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
            },
          ],
        });
      }catch(e){
        console.log("Error fetching data")
      }
    }

    fetchData();
  }, [userName]);

  if (!chartData) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <Line data={chartData} />
     {/*  <Bar data={barChartData} />  */}
    </div>
  );
};

export default ReactChart;
