import React from 'react';
import './Loading.css';
import { Rings } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='Loading'>
            <Rings type='puff' color='#00BFFF' height={550} width={100} />
        </div>
    )
}

export default Loading;