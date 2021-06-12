import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="cart"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Body</div>
            <table className="table">
              <thead>
                <tr>
                  <th>Mã sp</th>
                  <th>Hình ảnh</th>
                  <th>Tên sp</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>
                          <img src='' alt='product'/>
                      </td>
                      <td>Iphone 12</td>
                      <td>
                          <button className='btn btn-primary'> - </button>
                          <button className='btn btn-primary'> + </button>
                      </td>
                      <td>5700</td>
                      <td>5700</td>
                      <td>
                          <button className='btn btn-danger'>Xóa</button>
                      </td>
                  </tr>
              </tbody>
            </table>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
