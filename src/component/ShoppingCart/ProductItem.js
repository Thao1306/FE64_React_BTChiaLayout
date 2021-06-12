import React, { Component } from "react";

class ProductItem extends Component {
  render() {
      const {img, name} = this.props.prod
    return (
      <div className="card">
        <img src={img} alt="" />
        <h4>{name}</h4>
        <button className="btn btn-success">Xem chi tiết</button>
        <button className="btn btn-info">Thêm giỏ hàng</button>
      </div>
    );
  }
}

export default ProductItem;
