import {connect} from 'redux'
import Counter2 from './components/Counter2'

//action
const increaseAction = {type: 'increase'};
//state->props
function mapStateToProps(state){
    return{
        value2: state.count2
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncreaseClick: ()=>dispatch(increaseAction)
    }
}
//将ui组件Counter2变成容器组件
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter2);