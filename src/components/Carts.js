import React, { Component } from 'react'
import CartsProduct from './CartsProduct';

class Carts extends Component {
    render() {
        let {myCart,removeProduct, changeQty, clearCart} = this.props;
        return (
            <div className="row">
                <div className="col-12 mt-5">
                    <h1 className="display-4">Giỏ Hàng</h1>
                </div>
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Hình Ảnh</th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {myCart.map((product, index) => {
                                return <CartsProduct key={index} product={product} changeQty={changeQty} removeProduct={removeProduct}/>
                            })}
                            <tr>
                                <td />
                                <td />
                                <td />
                                <td style={{ fontSize: 30 }} className="font-weight-bold">Tổng Tiền</td>
                                <td style={{ fontSize: 30 }} className="font-weight-bold">
                                    {myCart.reduce((total,product,index)=>{
                                        return total += product.qty * product.price;
                                    },0).toLocaleString()
                                    }$
                                </td>
                                <td>
                                    <button style={{ fontSize: 30 }} className="btn btn-info" onClick={()=>clearCart()}>Thanh Toán</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default Carts;
