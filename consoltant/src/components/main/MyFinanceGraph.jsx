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

function MyFinanceGraph({ graphInfo, currIndex, color }) {
  console.log(graphInfo);

  const labelData = graphInfo.data.map((item) => item.age);
  const savingData = graphInfo.data.map((item) => item.totalAssetValue / 10000);

  const data = {
    labels: labelData,
    datasets: [
      {
        label: "전체자산",
        data: savingData,
        fill: true, // 선 아래 영역에 색을 채우도록 설정
        backgroundColor: "rgba(0, 70, 225, 0.2)", // 선 아래 색상 설정
        // borderColor: "rgba(0, 70, 225, 1)",
        borderColor: `${color}`,
        borderWidth: 5,
        pointRadius: 5,
        pointBackgroundColor: "rgba(255, 255, 255, 1)", // 포인트 내부 색상
        pointBorderColor: "rgba(54, 162, 235, 1)", // 포인트 테두리 색상
        pointBorderWidth: 2, // 포인트 테두리 굵기 설정
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    aspectRatio: 3,
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
        const activeIndex = graphInfo.data[currIndex]
          ? labelData.indexOf(graphInfo.data[currIndex].age)
          : 0;

        chart.tooltip.setActiveElements(
          [
            {
              datasetIndex: 0,
              index: activeIndex,
            },
          ],
          { x: 0, y: 0 }
        );
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
        backgroundColor: (context) => {
          // 3년차일 때 툴팁 배경 색상을 변경
          const index = context.tooltip.dataPoints[0].dataIndex;
          if (graphInfo.data[currIndex]) {
            return labelData[index] === graphInfo.data[currIndex].age
              ? `${color}`
              : "rgba(0, 0, 0, 0.3)";
          } else {
            return "rgba(0, 0, 0, 0.3)";
          }
        },
        borderColor: (context) => {
          // 3년차일 때 툴팁 보더 색상을 변경
          const index = context.tooltip.dataPoints[0].dataIndex;
          if (graphInfo.data[currIndex]) {
            return labelData[index] === graphInfo.data[currIndex].age
              ? `${color}`
              : "rgba(0, 0, 0, 0.3)";
          } else {
            return "rgba(0, 0, 0, 0.3)";
          }
        },
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
        ticks: {
          stepSize: 200,
        },
      },
    },
  };

  return (
    <div className="h-[20rem] w-[100%] flex justify-center">
      <Line data={data} options={options} />
    </div>
  );
}

export default MyFinanceGraph;
