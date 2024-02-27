const px = (n) => n / 800 * (window as any).pageWidth;

export const baseEchartOptions = {
    textStyle: {
        fontSize: px(6),
        color: '#79839E'
    },
    title: { show: false },
    legend: { show: false },
    grid: {
        x: px(0),
        y: px(15),
        x2: px(10),
        y2: px(0),
        containLabel: true
    },
};