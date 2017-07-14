import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Counter2 from './components/counter/Counter2'
import * as actionCreators from './redux/action/index'
//state->props
function mapStateToProps(state){
    return{
        value2: state.count2
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(actionCreators, dispatch)
    }
}
//将ui组件Counter2变成容器组件
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter2);