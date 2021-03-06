/**
 * Created by 叶子 on 2017/7/30.
 */
import { combineReducers } from 'redux';
import * as http from '../axios/index';
import * as type from '../action/type';
const initialState = {
    edit:{

    }

    
}
const editReducer = (state, action) => {
    console.log('reducer', action)
    switch(action.type) {
        case 'submitForm':
            console.log('submitForm')
            return {...state, ...action.payload};
        case 'fetchList':
            console.log('fetchList')
            return {...state, ...action.payload};
        default: 
            return {...state};
    }
}
const handleData = (state = {isFetching: true, data: {}}, action) => {
    switch (action.type) {
        case type.REQUEST_DATA:
            return {...state, isFetching: true};
        case type.RECEIVE_DATA:
            return {...state, isFetching: false, data: action.data};
        default:
            return {...state};
    }
};
const httpData = (state = {}, action) => {
    console.log('re222222', action)
    switch (action.type) {
        case type.RECEIVE_DATA:
        case type.REQUEST_DATA:
            return {
                ...state,
                [action.category]: handleData(state[action.category], action)
            };
        default:
            return {...state};
    }
};

export default combineReducers({
    httpData,
    edit: editReducer,
});
