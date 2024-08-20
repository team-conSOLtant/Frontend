import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

// 차트 구성 요소를 수동으로 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function LineChartExample() {

  const labelData = ['1년', '2년', '3년', '4년', '5년', '6년'];
  const savingData = [10, 20, 30, 40, 50, 100];
  const loanData = [60, 70, 72, 80, 85, 87];

  const data = {
    labels: labelData,
    datasets: [
      {
        label: '전체자산',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderWidth: 2,
        pointRadius: 2,
        tension: 0.1
      },
      {
        label: '예금',
        data: [65, 59, 80, 10, 56, 55],
        fill: false,
        backgroundColor:'rgb(255, 175, 0.5)',
        borderColor: 'rgb(255, 175, 0.5)',
        borderWidth: 2,
        pointRadius: 2,
        tension: 0.1
      },
      {
        label: '적금',
        data: savingData,
        fill: true,
        backgroundColor: 'rgb(245, 50, 85, 0.5)',
        borderColor: 'rgb(245, 50, 85, 0.5)',
        borderWidth: 2,
        pointRadius: 2,
        tension: 0.1,
      },
      {
        label: '대출',
        data: loanData,
        fill: false,
        backgroundColor:'rgb(245, 110, 39, 0.5)',
        borderColor: 'rgb(245, 110, 39, 0.5)',
        borderWidth: 2,
        pointRadius: 2,
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#000000',
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    },
    elements: {
      line: {
        borderRadius: 10,
      }
    },
    scales: {
      x: {
        title: {
          display: false,
          text: '년'
        }
      },
      y: {
        title: {
          display: true,
          text: '금액(만원)'
        }
      }
    }
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChartExample;
