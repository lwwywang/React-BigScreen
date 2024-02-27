import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/createEchartsOptions';
// @ts-ignore
import china from '../geo/china.json';

export const Chart4 = () => {
    const divRef = useRef(null);
    const colors = { '青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE' };
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        // @ts-ignore
        echarts.registerMap('CN', china);
        myChart.setOption(createEchartsOptions({
            xAxis: { show: false },
            yAxis: { show: false },
            series: [
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        { name: '甘肃省', value: 1 },
                    ],
                    label: { show: false, color: 'white' },
                    itemStyle: {
                        areaColor: 'rgba(56, 105, 112, 0.6)',
                        color: colors['甘肃省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: { color: 'white' },
                            areaColor: '#3597d4',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        { name: '四川省', value: 100 },
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['四川省'],
                        borderColor: 'yellow',
                        emphasis: {
                            label: { color: 'white' },
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        { name: '青海省', value: 100 },
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['青海省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: { color: 'white' },
                            areaColor: '#5470C6',
                        },
                    }
                },

            ]
        }));
    }, []);
    return (
        <>
          <div ref={divRef} className="chart"/>
          <p>该地图仅显示中国部分地区</p>
        </>
      );
    };