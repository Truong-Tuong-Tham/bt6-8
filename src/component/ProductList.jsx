import React, { Component } from 'react';

export default class ProductList extends Component {
  render() {
    let { shoe, handleXemChiTietSp } = this.props;
    return (
      <div className="card custom-card mb-4">
        <img src={shoe.image} className="card-img-top" alt={shoe.name} />
        <div className="card-body">
          <h5 className="card-title">{shoe.name}</h5>
          <button
            onClick={() => handleXemChiTietSp(shoe)}
            className="btn btn-success"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
