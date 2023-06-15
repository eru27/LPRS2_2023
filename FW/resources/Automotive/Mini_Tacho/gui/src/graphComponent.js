import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const GraphComponent = () => {
  const [chartData, setChartData] = useState(null);
  const jsonFilePath = '\\wsl.localhost\Ubuntu\home\anja\LPRS2\LPRS2_2023\FW\resources\Automotive\Mini_Tacho\PC_Handler\data.json';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(jsonFilePath);
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  const { labels, values } = chartData;
  const data = {
    labels,
    datasets: [
      {
        label: 'Example Chart',
        data: values,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default GraphComponent;