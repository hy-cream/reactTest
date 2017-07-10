import React from 'react'

class productTitle extends React.Component{
  render(){
    return (
      <tr>
        <td className='productTitle'><strong>{this.props.title}</strong></td>
      </tr>
    )
  }
}
export default productTitle