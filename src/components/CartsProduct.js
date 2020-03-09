import React, { Component } from 'react'

export default class CartsProduct extends Component {
    render() {
        let {id, image, name, price,  qty} = this.props.product;
        let {changeQty,removeProduct} = this.props;
        return (
            <tr>
                <td><img style={{ width: 200 }} src={image} alt="" /></td>
                <td style={{ fontSize: 15 }}>{name}</td>
                <td>{price}$</td>
                <td>
                    {qty}
                    <div className="btn-group  ml-2">
                        <button className="btn btn-info border-right"onClick={()=>changeQty(id,false)}>-</button>
                        <button className="btn btn-info border-left" onClick={()=>changeQty(id,true)}>+</button>
                    </div>
                </td>
                <td>{qty*price}$</td>
                <td>
                    <button className="btn btn-info" onClick={()=>removeProduct(id)}>x</button>
                </td>
            </tr>
        )
    }
}
