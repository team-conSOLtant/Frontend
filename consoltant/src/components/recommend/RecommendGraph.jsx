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

function LineChartExample(props) {
  const labelData = [];
  const totalData =[];
  const depositData = [];
  const savingData = [];
  const loanData = [];
  
  for(var prop in props.graph) {
    labelData.push(props.graph[prop].age);
    totalData.push(props.graph[prop].totalAssetValue);
    depositData.push(props.graph[prop].depositAssetValue);
    savingData.push(props.graph[prop].savingAssetValue);
    loanData.push(props.graph[prop].loanAssetValue); 
  }


  const data = {
    labels: labelData,
    datasets: [
      {
        label: '전체자산',
        data: totalData,
        fill: false,
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderWidth: 2,
        pointRadius: 2,
        tension: 0.1
      },
      {
        label: '예금',
        data: depositData,
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
          text: '나이'
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
