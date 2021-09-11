import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../Context'

// import {storeProducts} from '../data';

class ProductList extends Component {

    // state={
    //     products: storeProducts
    // }

    render() {

        // console.log(this.state.products);

        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name ="our" title="products"/>
                        <div className="row">
                            <ProductConsumer>
                                {value => {

                                    // return <h1>{value}</h1>

                                    // console.log(value);

                                    return value.products.map(product=>{
                                        return <Product key= {product.id} product={product}/>
                                    })

                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>

            // <div>
            //     <Product/>
            // </div>
        );
    }
}

export default ProductList;