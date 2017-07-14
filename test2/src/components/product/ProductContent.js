import React from 'react'
import ProductRow from './ProductRow'
import ProductTitle from './ProductTitle'

class ProductContent extends React.Component{
  render(){
    console.log(this.props.keyword)
    //console.log(this.props.isChecked)
    var productTitle = null;
    var productNodes = [];
    this.props.content.forEach(function(productline) {
      //父indexOf(子)
      //|| !(this.props.isChecked&&productline.stocked)
      // 找不到或者库存为空  
      if(productline.name.toLowerCase().indexOf(this.props.keyword.toLowerCase())===-1 || (this.props.isChecked&&!productline.stocked)){
        return;
      }
      if(productline.category!== productTitle){
        productNodes.push(<ProductTitle title={productline.category} key={productline.category} />)
      }
      productNodes.push(<ProductRow name={productline.name} price={productline.price} key={productline.name} stocked={productline.stocked}/>)
      productTitle = productline.category;
    }, this);
    return (
      <div className='productContent'>
        <table>
          <tr>
            <th>name</th>
            <th>price</th>
          </tr>
          {productNodes}
        </table>
      </div>
    )
  }
}
export default ProductContent