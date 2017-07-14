import React from 'react'
import Counter2 from "./Counter2"
import Counter from "./Counter"
import store from '../../redux/store/index'

class CounterTable extends React.Component{
  constructor(){
    super();
    this.state ={
      value:0,
      value2: 0
    };
  }
  handleClick(){
    ()=>store.dispatch({type: 'COUNTER2_INCREASE'})
  }
  render(){
    return(
        <div>
          {/*<Counter
            value={store.getState()}
            onIncrement={()=> store.dispatch({type: 'INCREMENT'})}
            onDecrement={()=> store.dispatch({type: 'DECREMENT'})}
            />*/}
          <Counter2
            value2={store.getState()}
            onIncreaseClick={this.handleClick.bind(this)}
          />
        </div>
    )
  }
}
export default CounterTable