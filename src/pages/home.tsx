import React from 'react';
import './home.scss';
import header from '../images/header.png';

export const Home = () => {
  return (
    <div className="home">
      <header>
        <img src={header} />
      </header>
      <main>
        <section className="section1"></section>
        <section className="section2"></section>
        <section className="section3"></section>
      </main>
    </div>
  );
};
