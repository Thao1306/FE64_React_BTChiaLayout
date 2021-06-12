import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2>Iphone</h2>
            <img src="" />
          </div>
          <div className="col-8">
            <h2>Thông số kỹ thuật</h2>
            <table className="table">
              <tr>
                <td>Màn hình</td>
                <td>Full HD</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>Androi</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>20MP</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>40MP</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
