"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const ApexChart = () => {
  const height=300;
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'series1',
        data: [100, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'series2',
        data: [140, 32, 45, 150, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: height,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        labels: {
          show: true,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },

      yaxis:{
        tickAmount: 3,
        labels:{
          show:false,
        }
      },

      grid: {
        show: true,
        // borderColor: '#f0f0f0', // Optional: You can set a border color for the grid lines
        strokeDashArray: 6, // Set the dash length for the dotted grid
        position: 'back',
      },

      // tooltip: {
      //   x: {
      //     format: 'dd/MM/yy HH:mm',
      //   },
      // },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={height} width={'100%'}/>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
