import React, { Component } from 'react';
import Carousel from './Carousel';
import Navbar from './Navbar';
import Smartphone from './Smartphone';
import Laptop from './Laptop';
import Promotion from './Promotion';

class Home extends Component {
    render() {
        return (
            <div className='bg-dark'>
                <Navbar/>
                <Carousel/>
                <Smartphone/>
                <Laptop/>
                <Promotion/>
            </div>
        );
    }
}

export default Home;