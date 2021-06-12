import React, { Component } from 'react';
import RedCar from '../../assets/img/red-car.jpg';
import BlackCar from '../../assets/img/black-car.jpg';
import SilverCar from '../../assets/img/silver-car.jpg';
import SteelCar from '../../assets/img/steel-car.jpg';

class Car extends Component {
    state = {
        imgSrc: RedCar,
    }
    changeImg = (img) => {
        return () => {
            this.setState({
                imgSrc: img,
            })
        }
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <img src={this.state.imgSrc} alt='Car' />
                    </div>
                    <div className='col-5'>
                        <h3>Change Color</h3>
                        <button onClick={this.changeImg(RedCar)}>Red</button>
                        <button onClick={this.changeImg(SilverCar)} > Silver</button>
                        <button onClick={this.changeImg(SteelCar)} > Steel</button>
                        <button onClick={this.changeImg(BlackCar)} > Black</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Car;