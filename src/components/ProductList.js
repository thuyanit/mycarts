import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        let {productList,addToCart} = this.props;
        return (
            <div className="row mt-4">
                {productList!==""?productList.map((item,index)=>{
                    return <Product key={index} addToCart={addToCart} product = {item}/>
                }):'Không tìm thấy sản phẩm mà bạn yêu cầu!'}
                
            </div>
        )
    }
}

export default ProductList;