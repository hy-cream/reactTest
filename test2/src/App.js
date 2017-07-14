import React from 'react';
import './App.css';
import Hello from "./components/Hello"
import CounterTable from './components/counter/CounterTable'
import CommentBox from './components/comment/CommentBox'
import ProductTable from './components/product/ProductTable'
import api from './api/index' 

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hello name="react" />
        {/*用户操作dispatch（action），store自动调用reducer*/}
        <CounterTable />
        <CommentBox data={api.data} />
        <ProductTable data={api.products} />
      </div>
    )
  }
}
export default App;
