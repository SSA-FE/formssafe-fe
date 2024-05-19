import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import React from 'react';
import { useRef } from 'react';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export interface ChartData {
  labels: string[];
  values: number[];
}

interface ChartProps {
  data: ChartData;
}

const Chart = ({ data: { labels, values } }: ChartProps) => {
  const maxValue = Math.max(...values);
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
      datalabels: {
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
        max: Math.max(...values),
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
        afterDataLimits: (scale: { max: number }) => {
          scale.max = scale.max * 1.3;
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

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: values.map((value: number) => {
          if (maxValue === value) {
            return '#489bff';
          } else {
            return '#CBD5E1';
          }
        }),
        datalabels: {
          display: true,
          align: 'end',
          anchor: 'end',
          color: values.map((value: number) => {
            if (maxValue === value) {
              return '#489bff';
            } else {
              return '#CBD5E1';
            }
          }),
          font: {
            weight: 'bold',
          },
          formatter: (
            value: number,
            context: { dataIndex: string | number }
          ) => {
            const label = labels[context.dataIndex as number];
            return `${value} - ${label.length >= 100 ? `${label.substring(0, 4)}...` : label}`;
          },
        },
      },
      {
        data: new Array(values.length).fill(0).map(() => maxValue * 3),
        backgroundColor: '#ffffff',
        datalabels: {
          display: false,
        },
      },
    ],
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chartRef = useRef<any>();
  const testRef = useRef<number | null>(null);

  const handleClickChart = (
    e: React.MouseEvent<HTMLCanvasElement, globalThis.MouseEvent>
  ) => {
    const chart = chartRef.current;
    if (!chart) return;
    const click_result = getElementAtEvent(chart, e);

    if (click_result[0]) {
      const clickedDatasetIndex = click_result[0].datasetIndex;
      const clickedElementIndex = click_result[0].index;

      if (testRef.current !== null && testRef.current !== undefined) {
        if (
          data.datasets[clickedDatasetIndex].data[testRef.current] ===
          Math.max(...data.datasets[clickedDatasetIndex].data)
        ) {
          (data.datasets[clickedDatasetIndex].backgroundColor as string[])[
            testRef.current
          ] = '#489bff';
        } else {
          (data.datasets[clickedDatasetIndex].backgroundColor as string[])[
            testRef.current
          ] = '#CBD5E1';
        }
      }
      (data.datasets[clickedDatasetIndex].backgroundColor as string[])[
        clickedElementIndex
      ] = '#95b7e0';

      testRef.current = clickedElementIndex;
      chart.update();
    }
  };

  return (
    <div className="flex">
      <div className="w-[60vw] h-[auto] max-w-[1000px]">
        <div className="h-[300px] bg-blue-50 pb-7">
          <Bar
            ref={chartRef}
            options={options}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data={data as any}
            onClick={handleClickChart}
            plugins={[ChartDataLabels]}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Chart, (prevProps, nextProps) => {
  return prevProps.data.labels[0] === nextProps.data.labels[0];
});
