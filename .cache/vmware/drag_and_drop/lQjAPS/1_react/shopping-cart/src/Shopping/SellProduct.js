import React from 'react';
import { products } from '../Constants';
import TotalSum from './TotalSum';

class SellProduct extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
          nProducts: props.data
      }
    }

    render() {
        let sellProduct = [];

        const { nProducts } = this.state;
        for (let index = 0; index < nProducts.data.length; index++) {
          if (nProducts.data[index].isproductclick == true) {
            sellProduct[index] = <tr>
                            <td className="productName">{nProducts.data[index].name}</td>
                            <td className="productCost">${nProducts.data[index].cost}</td>
                            <td className="productCount">{nProducts.data[index].sellcount}</td>
                            <td className="productTotal">{nProducts.data[index].total}</td>
                          </tr>
          }
        }
        
        return (
          <div>
            <table>
              <tr>
                  <td>Product</td>
                  <td>Cost</td>
                  <td>Count</td>
                  <td>Total</td>
              </tr>
              { sellProduct }
            </table>
            <hr/>
                <div>
                    <TotalSum data={this.props} />
                </div>  
          </div>
        );
      }  
    }
    
    export default SellProduct