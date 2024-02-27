import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Title } from '../shared/Title';
import { createEchartsOptions } from '../shared/createEchartsOptions';

const px = (n) => n / 800 * (window as any).pageWidth;
export const Chart5 = () => {
    const divRef = useRef(null);
    const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            legend: {
                left: px(12),
                top: px(4),
                orient: 'vertical',
                textStyle: { color: 'white' },
                itemWidth: px(6),
                itemHeight: px(6),
                itemGap: px(9)
            },
            color: colors,
            xAxis: { show: false },
            yAxis: { show: false },
            series: [
                {
                    left: px(30),
                    top: px(4),
                    type: 'pie',
                    radius: ['75%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true, position: 'inside', textStyle: { color: 'white', fontSize: px(7) },
                        formatter(options) {
                            return (options.value * 100).toFixed(0) + '%';
                        }
                    },
                    labelLine: { show: false },
                    itemStyle: {
                        borderColor: '#0F113A',
                        borderWidth: px(2)
                    },
                    data: [
                        { value: 0.07, name: '10-20' },
                        { value: 0.10, name: '20-30' },
                        { value: 0.23, name: '30-40' },
                        { value: 0.28, name: '40-50' },
                        { value: 0.32, name: '50-60' },
                    ]
                }
            ]
        }));
    }, []);
    return (
        <div className="chartWrapper">
            <Title title="犯罪人员年龄分布"></Title>
            <div ref={divRef} className="chart"></div>
        </div>
    );
};