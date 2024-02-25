import React from 'react';
import './home.scss';
import header from '../images/header.png';
import { Clock } from '../components/Clock';
import { Icon } from '../components/Icon';

export const Home = () => {
  return (
    <div className="home">
      <header>
        <Clock />
        <span>国家公安合成作战平台</span>
        <div className="info">
          <Icon name="position" /> Jilin, China
          <Icon name="weather" /> -10℃ snowing
        </div>
      </header>
      <main>
        <section className="section1"></section>
        <section className="section2"></section>
        <section className="section3"></section>
      </main>
    </div>
  );
};
