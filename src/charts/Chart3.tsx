import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Title } from '../shared/Title';
import { createEchartsOptions } from '../shared/createEchartsOptions';

const px = (n) => n / 800 * (window as any).pageWidth;
export const Chart3 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
  const data = {
    1: [
      0.15, 0.13, 0.11,
      0.13, 0.14, 0.15,
      0.16, 0.18, 0.21,
      0.19, 0.17, 0.16,
      0.15
    ],
    2: [
      0.11, 0.15, 0.16,
      0.22, 0.19, 0.17,
      0.16, 0.14, 0.18,
      0.17, 0.20, 0.17,
      0.18
    ],
    3: [
      0.13, 0.14, 0.17,
      0.20, 0.17, 0.21,
      0.19, 0.16, 0.15,
      0.13, 0.15, 0.17,
      0.16
    ]
  };
  const render = data => {
    myChart.current.setOption(createEchartsOptions({
            color: ['#3597d4', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059', '#fdfdfd'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
                splitLine: { show: true, lineStyle: { color: '#1e393d' } },
                axisTick: { show: false },
                axisLine: { show: false },
            },
            yAxis: {
                type: 'value',
                splitLine: { lineStyle: { color: '#1e393d' } },
                axisLabel: {
                    formatter(val) {
                        return val * 100 + '%';
                    }
                }
            },
            series: [{
                type: 'line',
                data: data,
                symbol: 'circle',
                symbolSize: px(4),
                lineStyle: { width: px(1) },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3559a7'
                    }, {
                        offset: 1,
                        color: '#1b1d52'
                    }]),
                }
            }]
        }));
    };
    useEffect(() => {
      myChart.current = echarts.init(divRef.current);
      render(data[1]);
      setInterval(() => {
        render(data[Math.ceil(Math.random() * 3)]);
      }, 1500);
    }, []);
    return (
        <div className="chart1">
            <Title title="案发时段分析"></Title>
            <div ref={divRef} className="chart"></div>
        </div>
    );
};