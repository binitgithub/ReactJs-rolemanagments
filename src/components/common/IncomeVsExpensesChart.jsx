import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';


// Register components for chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const IncomeVsExpensesChart = () => {
  const incomdata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Income',
        data: [5000, 6000, 8000, 7000, 6500, 7200],
        backgroundColor: '#4ade80', // Tailwind's green-400
      },
      {
        label: 'Expenses',
        data: [4000, 4500, 5500, 5000, 4800, 5300],
        backgroundColor: '#f87171', // Tailwind's red-400
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Income vs Expenses',
      },
    },
  };

  return (
    <div >
      <h2 className="text-2xl font-semibold text-center mb-4">Income vs Expenses Chart</h2>
      <Bar data={incomdata} options={options} />
    </div>
  );
};

export default IncomeVsExpensesChart;
