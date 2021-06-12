import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  renderProducts = () => {
    const productsHTML = this.props.products.map((item) => {
      return (
        <div key={item.id} className="col-3">
          <ProductItem prod={item}/>
        </div>
      );
    });
    return productsHTML;
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderProducts()}</div>
      </div>
    );
  }
}

export default ProductList;
