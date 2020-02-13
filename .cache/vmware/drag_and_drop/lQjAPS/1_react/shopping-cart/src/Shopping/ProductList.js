import React from 'react';
import { products } from '../Constants';
// import ProductItem from './ProductItem'; 
import SellProduct from './SellProduct'; 

class ProductList extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            nProducts: props.data
        }
    }

    handleCheckonClick = (productId) => {
        const { nProducts } = this.state;

        for (let index = 0; index < nProducts.length; index++) {
            if ((productId == index + 1)&&(nProducts[index].count != 0)) {
                nProducts[index].count -= 1;
                nProducts[index].sellcount += 1;
                nProducts[index].total = nProducts[index].cost * (nProducts[index].sellcount + 1);
                nProducts[index].isproductclick = true; 
            }
        }

        this.setState({
            nProducts
        });
    }

    handleFillonClick = (productId) => {
        const { nProducts } = this.state;
        for (let index = 0; index < nProducts.length; index++) {
            if (productId == index + 1) {
                nProducts[index].count = nProducts[index].fillcount;
            }
        }

        this.setState({
            nProducts
        });
    }

    render() {
        return (
            <div>
                <div>
                    <table>
                    {this.state.nProducts.map((product, index) => 
                        <tr>
                            <td>{product.name}</td>
                            <td>${product.cost}</td>
                            <td>{this.state.nProducts[index].count}</td>
                            <td><button onClick={e => this.handleCheckonClick(product.id)}>Check</button></td>
                            <td><button onClick={e => this.handleFillonClick(product.id)}>Fill</button></td>
                        </tr>
                    )}
                    </table>
                </div>
                <hr/>
                <div>
                    <SellProduct data={this.props} />
                </div>  
            </div>   
        );
    }
}

export default ProductList