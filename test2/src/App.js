import React, { Component } from 'react';
import './App.css';
import Hello from "./components/Hello"
import {createStore} from 'redux'
import counter from './reducers'
import Counter2 from "./components/Counter2"
import Counter from "./components/Counter"

//createStore（reducer）
const store = createStore(counter);
class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="react" />
        {/*用户操作dispatch（action），store自动调用reducer*/}
        <Counter
          value={store.getState()}
          onIncrement={()=> store.dispatch({type: 'INCREMENT'})}
          onDecrement={()=> store.dispatch({type: 'DECREMENT'})}
          />
        <Counter2
          value={store.getState()}
          onIncreaseClick={()=>store.dispatch({type: 'increase'})}
        />
      </div>
    );
  }
}
export default App;
