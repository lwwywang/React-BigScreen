import React, { useEffect, useRef } from 'react';
import './home.scss';
import header from '../images/header.png';
import { Clock } from '../components/Clock';
import { Icon } from '../components/Icon';
import * as echarts from 'echarts';
import { Chart1 } from '../charts/Chart1';
import { Chart2 } from '../charts/Chart2';
import { Chart3 } from '../charts/Chart3';
import { Chart4 } from '../charts/Chart4';
import { Chart5 } from '../charts/Chart5';
import { Chart6 } from '../charts/Chart6';
import { Chart7 } from '../charts/Chart7';
import { Statistic } from '../components/Statistic';

export const Home = () => {
  return (
    <div className="home">
      <header>
        <Clock />
        <span>国家公安作战平台</span>
        <div className="info">
          <Icon name="position" /> Jilin, China
          <Icon name="weather" /> -10℃ snowing
        </div>
      </header>
      <main>
        <section className="section1">
          <Chart1 />
          <Chart2 />
          <Chart3 />
        </section>
        <section className="section2">
          <Chart4 />
          <Statistic/>
        </section>
        <section className="section3">
          <Chart5/>
          <Chart6/>
          <Chart7/>
        </section>
      </main>
    </div>
  );
};
