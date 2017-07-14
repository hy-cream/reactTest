//reducer switch-case处理不同的action 从而修改store状态
// export const counter1 = (state = 0, action)=>{
//     console.log(state)
//     //const value = state;
//     switch(action.type){
//         case 'INCREMENT':{
//             console.log('+1')
//             //console.log(state);
//             return state+1;
//             //return Object.assign({}, state, {state:state+1});   
//         }
//         case 'DECREMENT':
//             return state-1;
//         default:
//             return state;

//     }
// }
export const counter2 = (state={count2:0}, action)=>{
	const count2 = state.count2;
	switch(action.type){
		case 'COUNTER2_INCREASE':
			return {count2:count2+1};
		default:
			return state;
	}
}

