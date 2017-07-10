import React from 'react'
import SearchBar from './SearchBar' 
import ProductContent from './ProductContent'

class ProductTable extends React.Component{
  constructor(){
    super();
    this.state={
      isChecked: false,
      keyword: ''
    };
  }
  transferMsg(msg){
    this.setState(msg)
  }
  render(){
    return (
      <div className='productTable'>
        <SearchBar isChecked={this.state.isChecked} keyword={this.state.keyword} transferMsg={this.transferMsg.bind(this)} />
        <ProductContent isChecked={this.state.isChecked} keyword={this.state.keyword} content={this.props.data} />
      </div>
    )
  }
}
export default ProductTable