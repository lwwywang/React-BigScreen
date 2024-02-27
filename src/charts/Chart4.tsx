import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/createEchartsOptions';
// @ts-ignore
import china from '../geo/china.json';

export const Chart4 = () => {
    const divRef = useRef(null);
    const colors = { '青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE' };
    useEffect(() => {
        const myChart = echarts.init(divRef.current);
        // @ts-ignore
        echarts.registerMap('CN', china);
        myChart.setOption(createEchartsOptions({
            color: ['#4ba2a7', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059', '#fdfdfd'],
            xAxis: { show: false },
            yAxis: { show: false },
            series: [
                {
                    type: 'map',
                    mapType: 'CN',
                    label: { show: false, color: 'white' },
                    itemStyle: {
                        areaColor: 'rgba(56, 105, 112, 0.6)',
                        borderColor: '#376c78',
                        emphasis: {
                            label: { color: 'white' },
                            areaColor: '#3597d4',
                        },
                    }
                },
            ]
        }));
    }, []);
    return (
        <>
            <div ref={divRef} className="chart" />
            <p>该地图仅显示中国部分地区</p>
        </>
    );
};