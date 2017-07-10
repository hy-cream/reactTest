import React from 'react'
 
class SearchBar extends React.Component{
  handleInput(e){
    e = e || window.event;
    this.props.transferMsg({keyword: e.target.value});
  }
  handleClick(e){
    e = e || window.event;
    this.props.transferMsg({isChecked: !this.props.isChecked});
  }
  render(){
    return (
       <div className='SearchBar'>
         <input type="text" placeholder='search...' value={this.props.keyword} onChange={this.handleInput.bind(this)}/>
         <p><input type="checkbox" checked={this.props.isChecked} onClick={this.handleClick.bind(this)}/><span>show products in stocks</span></p>
       </div>
    )
  }
}
export default SearchBar