import {combineReducers} from 'redux'
//reducer switch-case处理不同的action 从而修改store状态
function counter1 (state = 0, action){
    console.log(state)
    //const value = state;
    switch(action.type){
        case 'INCREMENT':{
            console.log('+1')
            //console.log(state);
            return state+1;
            //return Object.assign({}, state, {state:state+1});   
        }
        case 'DECREMENT':
            return state-1;
        default:
            return state;

    }
}

function counter2(state=0, action){
	const count2 = state.count2;
	switch(action.type){
		case 'increase':
			return {count2:count2+1};
		default:
			return state;
	}
}
export default counter1

// export default combineReducers({
// 	count:counter1,
// 	count2:counter2
// })

