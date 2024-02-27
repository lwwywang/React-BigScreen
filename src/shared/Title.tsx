import React from 'react';
import './title.scss';

const Title = (props: { title: string }) => {
    return (
        <div className="title">{props.title}</div>
    );
};

export { Title };