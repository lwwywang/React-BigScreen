import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import { Title } from '../shared/Title';


const px = n => n / 800 * (window as any).pageWidth;
export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption({
      textStyle: {
        fontSize: px(6),
        color: '#79839E'
      },
      title: {show: false},
      legend: {show: false},
      xAxis: {
        data: ['大南山镇', '下架山镇', '池尾街道', '大坝镇', '洪阳镇', '麒麟镇', '里湖镇', '燎原镇'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(6),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },
      grid: {
        x: px(20),
        y: px(20),
        x2: px(10),
        y2: px(20),
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(6)
        }
      },
      series: [{
        type: 'bar',
        data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
      }]
    });
  }, []);
  return (
    <div className="chart1">
      <Title title="案发派出所管辖统计"></Title>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};