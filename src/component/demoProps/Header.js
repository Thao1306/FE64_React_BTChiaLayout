import React, { Component } from 'react';

class Header extends Component {
    email = 'aa@gmail.com'
    onEmit = () => {
        this.props.getEmail(this.email);
    }
    render() {
        console.log(this.props);
        return (
            <div>
            <h1 >Header</h1> 
            <p>Hello, {this.props.a}</p>  
            <button onClick={this.onEmit}>Emit</button> 
            </div>
        );
    }
}

export default Header;