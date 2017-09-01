import React from 'react'
import Counter from "./Counter"
import reducer from '../../redux/reducer/index'
import { connect } from 'react-redux'
// redux的state变成组件里的props
function mapStateToProps(state) {
  console.log(state,'mapStateToProps')
  return { count: state.reducer.count1 };
}

function mapDispatchToProps(dispatch) {
  // return bindActionCreators(Object.assign({}, todoActionCreators, counterActionCreators), dispatch);
}


class CounterTable extends React.Component{
  render(){
    window.log = console.log.bind(console)
    // const state = store.getState() //store是在根节点 createStore 不是组件中引入
    const { dispatch,count } = this.props
    // props里没有store 但有mapStateToProps转换后的属性
    return(
        <div>
          <Counter
            value={count}
            onIncrement={()=> {console.log(this.props);dispatch({type: 'INCREMENT'})}}
            onDecrement={()=> dispatch({type: 'DECREMENT'})}
            />
        </div>
    )
  }
}
// 此时connect 使得ui组件Counter2变成容器组件
export default connect(mapStateToProps)(CounterTable)
