import React, { Component } from 'react'

class Product extends Component {
    
    render() {
        let {image,name,price} = this.props.product;
        let {addToCart} =  this.props;
        return (
            <div className="col-4 mb-5">
                <div className="card p-2">
                    <img style={{ height: 280 }} src={image} className="w-100" alt=""/>
                    <h3 style={{ fontSize:'1.2rem' }} >{name}</h3>
                    <p className="text-danger">{price}$</p>
                    <button onClick={()=>addToCart(this.props.product)} className="btn btn-success">Cart</button>
                </div>
            </div>
        )
    }
}

export default Product;
