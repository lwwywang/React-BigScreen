import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Title } from '../shared/Title';
import { createEchartsOptions } from '../shared/createEchartsOptions';

const px = (n) => n / 800 * (window as any).pageWidth;
export const Chart6 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(divRef.current);
        const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
        myChart.setOption(createEchartsOptions({
            color: ['#3597d4', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059', '#fdfdfd'],
            legend: {
                bottom: 0,
                textStyle: { color: 'white' },
                itemWidth: px(6),
                itemHeight: px(6),
                itemGap: px(5)
            },
            xAxis: { show: false },
            yAxis: { show: false },
            series: [
                {
                    bottom: px(15),
                    startAngle: -20,
                    type: 'pie',
                    radius: ['25%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true, position: 'outside', textStyle: { color: 'white', fontSize: px(7) },
                        distanceToLabelLine: 0,
                        formatter(options) {
                            return options.value * 100 + '%';
                        }
                    },
                    labelLine: { show: true, length: 0 },
                    roseType: 'area',
                    itemStyle: {
                        shadowBlur: px(200),
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    data: [
                        { value: 0.36, name: '刑事案件' },
                        { value: 0.20, name: '民事案件' },
                        { value: 0.18, name: '经济案件' },
                        { value: 0.24, name: '其他案件' },
                    ]
                }
            ]
        }));
    }, []);
    return (
        <div className="chartWrapper">
            <Title title="案发类型统计"></Title>
            <div ref={divRef} className="chart"></div>
        </div>
    );
};