"use client"
import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const ApexChart = () => {
  const height = 200;
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Inflation',
        data: [2.3, 5, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 1.2, 0.5, 2],
      },
    ],
    options: {
      chart: {
        height: height,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          columnWidth: '30%', // Adjust the width of bars
          borderRadius: 3,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + '%';
        },
        offsetY: -20,
        style: {
          fontSize: '10px',
          colors: ['#304758'],
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          formatter: function (val) {
            return val + '%';
          },
        },
      },
      title: {
        // text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444',
        },
      },
      grid: {
        show: false, // Remove background grid
      },
      colors: ['#ffffff'], // Set the color of the bars to white
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={height} width={'100%'} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
