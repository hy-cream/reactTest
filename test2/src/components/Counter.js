import React from 'react'
import propTypes from 'prop-types'

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }
    incrementIfOdd(){
        //value 偶数
        if(this.props.value%2!==0){
            this.props.onIncrement();
        }
    }
    incrementAsync(){
        setTimeout(this.props.onIncrement,1000);
    }
    render(){
        console.log('vlue'+this.props.value)
        const {value, onIncrement, onDecrement} = this.props;
        return(
            <p>
                点击: {value} 次
                {' '}
                <button onClick={onIncrement}>+</button>
                {' '}
                <button onClick={onDecrement}>-</button>
                {' '}
                <button onClick={this.incrementIfOdd}>奇数次点击加1</button>
                {' '}
                <button onClick={this.incrementAsync}>同步加1</button>
            </p>
        )
    }
}
Counter.propTypes = {
    value: propTypes.number.isRequired,
    onIncrement: propTypes.func.isRequired,
    onDecrement: propTypes.func.isRequired
}

export default Counter