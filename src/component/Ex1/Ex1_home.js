import React from 'react';
import './Ex1_home.css'
import Ex1_header from './Ex1_header';
import Ex1_content from './Ex1_content';
import Ex1_sidebar from './Ex1_sidebar';
import Ex1_footer from './Ex1_footer';

class Ex1_home extends React.Component {
    render() {
        return (
            <div >
                <Ex1_header />
                <div className='container'>
                <Ex1_content />
                <Ex1_sidebar />
                </div>
                <Ex1_footer />
            </div>
          
        )
    }
}

export default Ex1_home;