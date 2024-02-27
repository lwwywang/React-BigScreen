import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Title } from '../shared/Title';
import { createEchartsOptions } from '../shared/createEchartsOptions';

const px = (n) => n / 800 * (window as any).pageWidth;
export const Chart7 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
  const data = {
    1: [
      {value: 0.06, name: '深圳'},
      {value: 0.08, name: '杭州'},
      {value: 0.13, name: '武汉'},
      {value: 0.06, name: '长沙'},
      {value: 0.13, name: '兰州'},
    ],
    2: [
      {value: 0.08, name: '深圳'},
      {value: 0.06, name: '杭州'},
      {value: 0.11, name: '武汉'},
      {value: 0.09, name: '长沙'},
      {value: 0.12, name: '兰州'},
    ],
    3: [
      {value: 0.11, name: '深圳'},
      {value: 0.09, name: '杭州'},
      {value: 0.10, name: '武汉'},
      {value: 0.10, name: '长沙'},
      {value: 0.09, name: '兰州'},
    ]
  };
  const render = data => {
    myChart.current.setOption(createEchartsOptions({
            color: ['#3597d4', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059'],
            xAxis: { show: false },
            yAxis: { show: false },
            grid: { x: 0, x2: 0, y: 0, y2: 0, containLabel: true },
            legend: {
                orient: 'vertical',
                right: px(10),
                top: 'center',
                textStyle: { color: 'white' },
                itemWidth: px(6),
                itemHeight: px(6),
                itemGap: px(5),
                formatter(name) {
                    const value = data.find(i => i.name === name)?.value * 100 + '%';
                    return name + ' ' + value;
                }
            },
            series: [
                {
                    center: ['35%', '52%'],
                    type: 'pie',
                    radius: '80%',
                    label: { show: false },
                    labelLine: { show: false },
                    data: data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
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
        <div className="chartWrapper">
            <Title title="案发街道统计"></Title>
            <div ref={divRef} className="chart"></div>
        </div>
    );
};