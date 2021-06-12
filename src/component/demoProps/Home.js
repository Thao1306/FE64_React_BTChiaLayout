import React, { Component } from 'react';
import Header from './Header';

class Home extends Component {
    name = 'LPT';
    getEmail = (val) => {
        console.log(val);
    }

    render() {
        return (
            <div>
            <Header a={this.name} getEmail={this.getEmail} />
            </div>
        );
    }
}

export default Home;