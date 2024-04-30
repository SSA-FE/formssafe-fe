/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
// import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  interaction: {
    mode: 'point' as const,
    axis: 'x' as const,
  },
  indexAxis: 'y' as const,
  elements: {
    rectangle: {
      color: 'white',
    },
    bar: {
      borderWidth: 0,
    },
  },
  maintainAspectRatio: false,
  plugins: {
    // datalabels: {
    //   anchor: 'end',
    //   align: 'end',
    //   color: '#7db1e6',
    //   font: {
    //     weight: 'bold',
    //   },
    // },
    filler: {
      propagate: true,
    },
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      padding: 15,
      caretPadding: 10,
      titleMarginBottom: 10,
      titleSpacing: 10,
      bodySpacing: 10,
      events: ['click'],
    },
  },
  scales: {
    x: {
      stacked: true,
      max: 1000,
      beginAtZero: true,
      grid: {
        display: false,
        drawBorder: false,
      },
      afterDataLimits: (scale: { max: number }) => {
        scale.max = scale.max * 1.1;
      },
    },
    y: {
      stacked: true,
      ticks: {
        display: false,
      },
      grid: {
        display: true,
        color: '#ebebeb',
      },
    },
  },
};

const Chart = ({ data: { labels, values } }: any) => {
  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: '#CBD5E1',
      },
      {
        data: [1100, 1100, 1100, 1100, 1100, 1100, 1100],
        backgroundColor: '#ffffff',
      },
    ],
  };

  const chartRef = useRef<any>(null);

  return (
    <>
      <div className="w-[60vw] h-[auto] max-w-[1000px]">
        <div className="h-[300px] bg-[#F2F6F9] pb-4">
          <Bar
            ref={chartRef}
            options={options}
            data={data}
            // plugins={[ChartDataLabels]}
          />
        </div>
      </div>
    </>
  );
};

export default Chart;
