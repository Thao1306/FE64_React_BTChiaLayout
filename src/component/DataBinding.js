import React, { Component } from 'react';
//react có chế độ 'use stric mode' nên this sẽ ko trỏ về windown nữa mà bị undefine -> trong react nên sử dụng hàm arrow để tránh những lỗi với this
class DataBinding extends Component {
    fullName = 'Le Phuong Thao'; //không đặt kiểu biến do ko phải trong function mà là đặt tên thuộc tính
    age = 12;
    state = {
        movieType: 'showing',
        islogin: true,
    }
    showInfo = () => {
        return `hello ${this.fullName}`;
    }
    showName = () => {
        alert('hello' + this.fullName)
    }
    //closure: function x => function y là function y được return từ function x thì function y đc gọi là closure
    showNameWithParams = (name) => {
        return function () {
            alert('hello, my name is' + name);
        }
    }

    showMovies = () => {
        if (this.state.movieType === 'showing') {
            return (<div>
                <h1>Danh sách phim đang chiếu</h1>
            </div>
            );
        }
        if (this.state.movieType === 'coming') {
            return (
                <div>
                    <h1>Danh sách phim sắp chiếu</h1>
                </div>
            )
        }
    }
    changeMovieType = (type) => {
        return () => {
            //thay đổi state
            this.setState({
                movieType: type,
            })
            console.log(this.state.movieType);
        }
    }
    showMessege = () => {
        if(this.state.islogin == true) {
            return <p>welcome</p>
        }
        if(this.state.islogin == false) {
            return <p>please login</p>
        }
    }
    //dataBiding cho phép hiển thị biến/hàm/phép tính (trong dấu ngoặc nhọn) trong giao diện
    //TH1: nếu gắn sự kiện thì sẽ ko gắn hàm do react sẽ hiểu là hàm và chạy luôn rồi mới trả về cho sự kiện->onClick trả về giá trị undefine ->nên khi gắn sự kiện thì chỉ gọi tên hàm thôi (không có dấu ngoặc tròn của hàm)
    //TH2: nếu muốn gắn hàm có tham số thì sử dụng closure để khi gắn sự kiện thì return về 1 hàm khác để click vào thì hàm closure sẽ chạy
    render() {
        return (
            <div>
                {/* <h1> demo DataBinding</h1>
                <button onClick={this.showName}>Show name</button>
                <button onClick={this.showNameWithParams('Thảo')}>Show name with params</button>
                <p>{this.fullName}</p>
                <p>{this.age}</p>
                <p>{this.showInfo()}</p> */}

                <button onClick={this.changeMovieType('showing')}>Phim đang chiếu</button>
                <button onClick={this.changeMovieType('coming')}>Phim sắp chiếu</button>
                {this.showMovies()}
                =======================
                {/* {this.showMessege()} */}
                {this.state.islogin ? <p>welcome</p> : <p>please login</p>}
            </div>
        );
    }
}
//state là 1 cái object có sẵn trong class component (ko có trong function) mà chỉ khi state thay đổi thì component mới load lại hàm render

export default DataBinding;