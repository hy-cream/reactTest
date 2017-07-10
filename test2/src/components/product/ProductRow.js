import React from 'react'
import './style.less'

class productRow extends React.Component{
  render(){
    var name = this.props.stocked? this.props.name: <span style={{color: 'red'}}>{this.props.name}</span>;
    return (
      <tr className='productRow'>
        <td className="name">{name}</td>
        <td className="price">{this.props.price}</td>
      </tr>  
    )
  }
}
export default productRow