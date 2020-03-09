import React, { Component } from 'react';
import ProductList from './ProductList';
import Carts from './Carts';
import Toolbar from './Toolbar';

class Page extends Component {
    //declare product list
    smartPhone= [
        {
            id: 1,
            name: 'Samsung Galaxy A50',
            type: 'Samsung',
            image: 'https://images.samsung.com/is/image/samsung/p5/vn/home/A50.png',
            description: 'Sản phẩm của china',
            price: 450,
            invetory: 10,
            rating: 3
        },
        {
            id: 2,
            name: 'Iphone 6s Plus',
            type: 'Iphone',
            image: 'https://imgs.viettelstore.vn/Images/Product/ProductImage/2014093690.jpeg',
            description: 'Sản phẩm của US',
            price: 200,
            invetory: 15,
            rating: 5
        }, {
            id: 3,
            name: 'Iphone XS',
            type: 'Iphone',
            image: '//cdn.fptshop.com.vn/Uploads/Originals/2018/10/11/636748771945393060_iPhone-Xs-Max-gold.png',
            description: 'Sản phẩm của US',
            price: 700,
            invetory: 20,
            rating: 4
        }, {
            id: 4,
            name: 'Samsung Galaxy A70',
            type: 'Samsung',
            image: 'https://images.samsung.com/is/image/samsung/p5/vn/home/A70.png',
            description: 'Sản phẩm của Hàn Quốc',
            price: 300,
            invetory: 7,
            rating: 4
        }, {
            id: 5,
            name: 'IPhone 11',
            type: 'Iphone',
            image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418',
            description: 'Sản phẩm của Hàn Quốc',
            price: 1900,
            invetory: 10,
            rating: 4
        }, {
            id: 6,
            name: 'Samsung Galaxy Note10',
            type: 'Samsung',
            image: 'https://images.samsung.com/is/image/samsung/p5/vn/galaxy-note10/home/home_curation_galaxy_note10_note10plus_aura_glow_mo.png',
            description: 'Sản phẩm của Hàn Quốc',
            price: 750,
            invetory: 15,
            rating: 4
        }
        
    ];
    constructor(props){
        super(props);
        this.state = {
            productList: [...this.smartPhone],
            myCart : [],
            total : 0
        }
    }

    //Add product to card
    addToCart = (_product) => {
        const product = {
            id: _product.id,
            image: _product.image,
            name: _product.name,
            price: _product.price,
            invetory: _product.invetory,
            qty: 1
        }

        let myCart_temp = [...this.state.myCart];
        //Check product on cart
        let index = myCart_temp.findIndex(item => item.id === _product.id);
        if (index!== -1) {
            if(myCart_temp[index].qty<this.state.myCart[index].invetory){
                myCart_temp[index].qty += 1;
            }else{
                alert(myCart_temp[index].name+" tạm hết hàng!");
            }
            //console.log(this.state.myCart[index].invetory);
        }else{
            myCart_temp = [...this.state.myCart, product];
        }

        //Update mycart
        this.setState({
            myCart: myCart_temp
        });
    }

    //Change quantity of product on mycart
    changeQty = (_id, status) =>{

        let myCart_temp = [...this.state.myCart];
        //Get position of product on mycart
        let index = myCart_temp.findIndex(item => item.id === _id);
        if(status){
            if(myCart_temp[index].qty<myCart_temp[index].invetory){
                myCart_temp[index].qty+=1;
            }else{
                alert(myCart_temp[index].name+" tạm hết hàng!");
            }
            
        }else{
            //Can not buy 0 product  - min is a product on my cart
            if(myCart_temp[index].qty>1){
                myCart_temp[index].qty-=1;
            } 
        }

        //Update mycart
        this.setState({
            myCart: myCart_temp
        });
    }
    
    //Remove product on myCart
    removeProduct = (_id)=>{
        //Get position of product on mycart
        let index = this.state.myCart.findIndex(item => item.id === _id);
        if(index!== -1){
            this.state.myCart.splice(index,1);
        }

        //Update mycart
        this.setState({
            myCart: this.state.myCart
        });
    }

    //Clear mycart
    clearCart = ()=>{
        this.setState({
            myCart:[]
        })
    }
    //sort
    sortProductList=(e)=>{
        let sortProductList = [];
        let keySort = e.target.value;
        if(keySort==='ASC'){
            sortProductList = this.state.productList.sort(this.compareValues('name'));
        }else if(keySort==='DESC'){
            sortProductList = this.state.productList.sort(this.compareValues('name', 'desc'));
        }
        else{
            sortProductList = this.smartPhone;
        }
        this.setState({
            productList: sortProductList
        });
    }

    //Search product name
    searchByName =(e)=>{
        let keysearch = e.target.value;
        let searchArr = this.smartPhone.filter((product)=>{
            return product.name.toLowerCase().trim().indexOf(keysearch) !== -1;
          });
        //console.log(searchArr);
        //Update mycart
        this.setState({
            productList: searchArr
        });
    }

    //Search product name
    searchByType =(e)=>{
        let keysearch = e.target.value;
        let searchArr = this.smartPhone.filter((product)=>{
            return product.type.trim().indexOf(keysearch) !== -1;
          });
        console.log(searchArr);
        //Update mycart
        this.setState({
            productList: searchArr
        });
    }

    //Sort object
    compareValues = (key, order = 'asc')=>{
        return (a, b)=> {
          if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // if not exist
            return 0;
          }
      
          const varA = (typeof a[key] === 'string') ?
            a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];
      
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order ==='desc') ? (comparison * -1) : comparison
          );
        };
      }

    render() {
        return (
            <div className="container">
                <h1 className="display-4 text-center">Mua Hàng Online</h1>
                <Toolbar sortProductList={this.sortProductList} searchByName={this.searchByName} searchByType={this.searchByType} productList = {this.smartPhone}/>
                <ProductList productList = {this.state.productList} addToCart={this.addToCart}/>
                {this.state.myCart.length!==0?<div className="row">
                    <div className="col-12 mt-5">
                        <span className="bg-warning text-white px-3 py-2">Thêm Hàng Thành Công</span>
                    </div>
                </div>:''}
                <Carts myCart = {this.state.myCart} changeQty={this.changeQty} clearCart={this.clearCart} removeProduct={this.removeProduct}/>
            </div>
        )
    }
}

export default  Page;