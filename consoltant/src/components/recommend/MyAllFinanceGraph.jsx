import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

// 차트 구성 요소를 수동으로 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function LineChartExample({
  graph,
}) {
  const labelData = [];
  const totalData = [];
  const depositData = [];
  const savingData = [];
  const loanData = [];

  for(var prop in graph) {
    labelData.push(graph[prop].age);
    totalData.push(graph[prop].totalAssetValue);
    depositData.push(graph[prop].depositAssetValue);
    savingData.push(graph[prop].savingAssetValue);
    loanData.push(graph[prop].loanAssetValue); 
  }
  const data = {
    labels: labelData,
    datasets: [
      {
        label: "전체자산",
        data: totalData,
        fill: true, // 선 아래 영역에 색을 채우도록 설정
        backgroundColor: "rgba(0, 0, 0, 0.5)", // 선 아래 색상 설정
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderWidth: 4,
        pointRadius: 4,
        pointBackgroundColor: "rgba(255, 255, 255, 1)", // 포인트 내부 색상
        pointBorderColor: "rgba(0, 0, 0, 0.8)", // 포인트 테두리 색상
        pointBorderWidth: 2, // 포인트 테두리 굵기 설정
        tension: 0.1,
      },
      {
        label: "예금",
        data: depositData,
        fill: false,
        backgroundColor: "rgb(255, 175, 0, 0.5)",
        borderColor: "rgb(255, 175, 0, 0.5)",
        borderWidth: 3,
        pointRadius: 3,
        pointBackgroundColor: "rgba(255, 175, 0, 0.5)", // 포인트 내부 색상
        pointBorderColor: "rgba(255, 175, 0, 1)", // 포인트 테두리 색상
        pointBorderWidth: 2, // 포인트 테두리 굵기 설정
        tension: 0.1,
      },
      {
        label: "적금",
        data: savingData,
        fill: true,
        backgroundColor: "rgb(245, 50, 85, 0.5)",
        borderColor: "rgb(245, 50, 85, 0.5)",
        borderWidth: 3,
        pointRadius: 3,
        pointBackgroundColor: "rgba(245, 50, 85, 0.5)", // 포인트 내부 색상
        pointBorderColor: "rgba(245, 50, 85, 1)", // 포인트 테두리 색상
        pointBorderWidth: 2, // 포인트 테두리 굵기 설정
        tension: 0.1,
      },
      {
        label: "대출",
        data: loanData,
        fill: false,
        backgroundColor: "rgb(245, 110, 39, 0.5)",
        borderColor: "rgb(245, 110, 39, 0.5)",
        borderWidth: 3,
        pointRadius: 3,
        pointBackgroundColor: "rgba(245, 110, 39, 0.5)", // 포인트 내부 색상
        pointBorderColor: "rgba(245, 110, 39, 1)", // 포인트 테두리 색상
        pointBorderWidth: 2, // 포인트 테두리 굵기 설정
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    aspectRatio: 2,
    animation: {
      duration: 1000, // 애니메이션 지속 시간 (밀리초)
      easing: "easeInOutQuad", // 애니메이션 효과
      delay: 0, // 애니메이션 지연 시간 (밀리초)
      animations: {
        x: {
          from: 0, // x축의 애니메이션 시작 위치 (왼쪽)
        },
        y: {
          from: 0, // y축의 애니메이션 시작 위치 (아래)
        },
      },
      onComplete: function (animation) {
        const chart = animation.chart;
        chart.update();
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#000000",
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "rgba(0, 0, 0, 0.5)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderWidth: 2,
        mode: "index",
        intersect: false,
      },
    },
    elements: {
      line: {
        borderRadius: 10,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        ticks: {
          autoSkip: false,
          maxTicksLimit: 9,
        },
        grid: {
          display: false,
          tickWidth: 30,
        },
        border: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "금액(만원)",
        },
      },
    },
  };

  return (
    <div className="h-[30rem] flex items-center">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChartExample;
