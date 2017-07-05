import React from 'react'
import PropTypes from 'prop-types'
class Counter2 extends React.Component{
    render(){
        const {value2, onIncreaseClick} = this.props;
        return(
            <div>
                <span>{value2}</span>
                <button onClick={onIncreaseClick}></button>
            </div>
        )
    }
}
Counter2.propTypes = {
    value2: PropTypes.number.isrequired,
    onIncreaseClick: PropTypes.func.isrequired
}
export default Counter2