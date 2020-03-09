import React, { Component } from 'react'

class Toolbar extends Component {
    render() {
        let {sortProductList,searchByType, searchByName} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <input className="form-control" placeholder="Enter product name ..." onChange={searchByName}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <select className="form-control" onChange={searchByType}>
                                <option value="">--Select Category--</option>
                                <option value="Iphone">Iphone</option>
                                <option value="Samsung">Samsung</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <select className="form-control" onChange={sortProductList}>
                                <option value="">Sắp xếp</option>
                                <option value="ASC">A-Z</option>
                                <option value="DESC">Z-A</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Toolbar;
