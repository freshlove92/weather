import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButtonBox = () => {

    return (
        <div>
             <Button variant="warning">현재위치</Button>{' '}
             <Button variant="warning">밀라노</Button>{' '}
             <Button variant="warning">판티엣</Button>{' '}
        </div>
    );{' '}
};

export default WeatherButtonBox;