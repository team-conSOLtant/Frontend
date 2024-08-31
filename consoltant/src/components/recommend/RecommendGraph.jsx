import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

// 차트 구성 요소를 수동으로 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function CombinedChartExample(props) {
  const labelData = [];
  const totalData = [];
  const depositData = [];
  const savingData = [];
  const loanData = [];
  const depositDemandData = [];

  for (var prop in props.graph) {
    labelData.push(props.graph[prop].age);
    totalData.push(props.graph[prop].totalAssetValue);
    depositData.push(props.graph[prop].depositAssetValue);
    savingData.push(props.graph[prop].savingAssetValue);
    loanData.push(props.graph[prop].loanAssetValue);
    depositDemandData.push(
      props.graph[prop].totalAssetValue -
        props.graph[prop].depositAssetValue -
        props.graph[prop].savingAssetValue -
        props.graph[prop].loanAssetValue
    );
  }

  const data = {
    labels: labelData,
    datasets: [
      {
        type: "line",
        label: "전체자산",
        data: totalData,
        fill: false,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderWidth: 2,
        pointRadius: 2,
        tension: 0.1,
      },
      {
        type: "bar",
        label: "대출",
        data: loanData,
        backgroundColor: "rgba(212, 246, 236, 0.8)",
        stack: "stack1",
      },
      {
        type: "bar",
        label: "예금",
        data: depositData,
        backgroundColor: "rgba(202, 217, 255, 0.8)",
        stack: "stack1",
      },
      {
        type: "bar",
        label: "적금",
        data: savingData,
        backgroundColor: "rgba(57, 196, 192, 0.8)",
        stack: "stack1",
      },
      {
        type: "bar",
        label: "입 출금",
        data: depositDemandData,
        backgroundColor: "rgba(78, 89, 195, 0.8)",
        stack: "stack1",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#000000",
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "나이",
        },
      },
      y: {
        title: {
          display: true,
          text: "금액(원)",
        },
        stacked: true,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default CombinedChartExample;
