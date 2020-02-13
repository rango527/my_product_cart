import React from 'react';

class TotalSum extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nProducts: props.data
        }
    }

    render() {
        const { nProducts } = this.state;
        let sumTotal = 0;

        for (let index = 0; index < nProducts.data.data.length; index++) {
            sumTotal += nProducts.data.data[index].total;
        }

        return (
            <div>
                <h1>total : {sumTotal}</h1>
            </div>
        )
    }
}

export default TotalSum