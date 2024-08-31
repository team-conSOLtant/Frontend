import React from "react";
import { Bar } from "react-chartjs-2";
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

function CombinedChartExample({ graph }) {
  const labelData = [];
  const totalData = [];
  const depositData = [];
  const savingData = [];
  const loanData = [];
  const depositDemandData = [];

  for (var prop in graph) {
    labelData.push(graph[prop].age + "세");
    totalData.push(graph[prop].totalAssetValue);
    depositData.push(graph[prop].depositAssetValue);
    savingData.push(graph[prop].savingAssetValue);
    loanData.push(graph[prop].loanAssetValue);
    depositDemandData.push(
      graph[prop].totalAssetValue -
        graph[prop].depositAssetValue -
        graph[prop].savingAssetValue -
        graph[prop].loanAssetValue
    );
  }

  const data = {
    labels: labelData,
    datasets: [
      {
        type: "line", // 꺾은선 그래프로 설정
        label: "전체자산",
        data: totalData,
        fill: false, // 선 아래 영역에 색을 채우지 않도록 설정
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderWidth: 2,
        pointRadius: 2,
        tension: 0.1,
      },
      {
        type: "bar", // 막대그래프로 설정
        label: "대출",
        data: loanData,
        backgroundColor: "rgba(212, 246, 236, 0.8)",
        stack: "stack1", // 누적을 위해 동일한 stack 값 사용
      },
      {
        type: "bar", // 막대그래프로 설정
        label: "예금",
        data: depositData,
        backgroundColor: "rgba(202, 217, 255, 0.8)",
        stack: "stack1", // 누적을 위해 동일한 stack 값 사용
      },
      {
        type: "bar", // 막대그래프로 설정
        label: "적금",
        data: savingData,
        backgroundColor: "rgba(57, 196, 192, 0.8)",
        stack: "stack1", // 누적을 위해 동일한 stack 값 사용
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
        },
        stacked: true, // x축에 누적 옵션 설정
      },
      y: {
        title: {
          display: true,
          text: "금액(원)",
        },
        stacked: true, // y축에 누적 옵션 설정
      },
    },
  };

  return (
    <div className="h-[30rem] flex items-center">
      <Bar data={data} options={options} />
    </div>
  );
}

export default CombinedChartExample;
