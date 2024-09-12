import { useState, useEffect } from 'react';
"use client";
import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { employees } from "@/data";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const chartData = {
    labels: employees.map((employee) => employee.name),
    datasets: [
      {
        label: 'Attendance',
        data: employees.map((employee) => employee.attendance),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Delivery',
        data: employees.map((employee) => employee.delivery),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div >
      <h1>Employee Dashboard</h1>
      <Bar data={chartData} className='w-5'  />
    </div>
  );
};

export default Dashboard;
