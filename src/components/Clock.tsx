import React, { useEffect } from 'react';

export const Clock = () => {
    useEffect(() => {
        const clock = document.querySelector('.clock');
        const timer = document.createElement('div');
        const dater = document.createElement('div');
        clock.appendChild(timer);
        clock.appendChild(dater);
        const step = () => {
            setTimeout(() => {
                const time = new Date();
                const hour = time.getHours();
                const minute = time.getMinutes();
                const second = time.getSeconds();
                const year = time.getFullYear();
                const month = time.getMonth() + 1;
                const date = time.getDate();
                const day = time.getDay();
                const monthMap = {
                    1: 'January',
                    2: 'February',
                    3: 'March',
                    4: 'April',
                    5: 'May',
                    6: 'June',
                    7: 'July',
                    8: 'August',
                    9: 'September',
                    10: 'October',
                    11: 'November',
                    12: 'December'
                };
                const dayMap = {
                    1: 'Monday',
                    2: 'Tuesday',
                    3: 'Wednesday',
                    4: 'Thursday',
                    5: 'Friday',
                    6: 'Saturday',
                    0: 'Sunday'
                };
                minute < 10
                    ? second < 10
                        ? (timer.innerHTML = hour + ':0' + minute + ':0' + second)
                        : (timer.innerHTML = hour + ':0' + minute + ':' + second)
                    : second < 10
                        ? (timer.innerHTML = hour + ':' + minute + ':0' + second)
                        : (timer.innerHTML = hour + ':' + minute + ':' + second);
                dater.innerHTML = dayMap[day] + ', ' + monthMap[month] + ' ' + date + ', ' + year;
                step();
            }, 1000);
        };
        step();
    }, []);
    return (
        <div className="clock" />
    );
};