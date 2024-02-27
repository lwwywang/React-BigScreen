import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Title } from '../shared/Title';
import { createEchartsOptions } from '../shared/createEchartsOptions';


const px = (n) => n / 800 * (window as any).pageWidth;
export const Chart2 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            legend: {
                bottom: px(0),
                textStyle: { color: 'white' },
                itemWidth: px(6),
                itemHeight: px(6)
            },
            grid: {
                x: px(0),
                x2: px(15),
                y: px(10),
                y2: px(14),
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
                splitLine: { show: true, lineStyle: { color: '#073E78' } },
                axisTick: { show: false },
                axisLine: { show: false },
            },
            yAxis: {
                type: 'value',
                splitLine: { lineStyle: { color: '#073E78' } },
                axisLabel: {
                    formatter(val) {
                        return val * 100 + '%';
                    }
                }
            },
            series: [
                {
                    name: '抢劫',
                    type: 'line',
                    data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09].reverse()
                },
                {
                    name: '醉驾',
                    type: 'line',
                    data: [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10].reverse()
                },
                {
                    name: '盗窃',
                    type: 'line',
                    data: [0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11].reverse()
                },
                {
                    name: '故意杀人',
                    type: 'line',
                    data: [0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12].reverse()
                }
            ].map(obj => ({
                ...obj,
                symbol: 'circle',
                symbolSize: px(5),
                lineStyle: { width: px(1) }
            }))
        }));
    }, []);
    return (
        <div className="chart1">
            <Title title="发案趋势统计"></Title>
            <div ref={divRef} className="chart"></div>
        </div>
    );
};