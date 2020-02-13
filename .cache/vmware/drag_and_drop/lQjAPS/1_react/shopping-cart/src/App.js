import React from 'react';
import './App.css';
import { connect } from 'react-redux'

import {
  ProductList
} from './Shopping';

import { products } from './Constants';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Shopping Cart</h1>
          <hr/>
        </div>
        <div>
          <ProductList data={products} title="ProductList"/>
        </div>
      </div>
    );
  }  
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(App);

