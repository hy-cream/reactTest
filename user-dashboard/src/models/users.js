import * as usersService from '../services/users'
export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
    page: null
  },
  reducers: {
    save(state, {payload: { data: list, total, page} }){
      return {...state, list, total};
    }
  },
  effects: {
    //不懂 取数据？
    *fetch({ payload: {page=1} }, { call, put }){
      const {data, headers} = yield call(usersService.fetch, {page});
      yield put({
        type: 'save', 
        payload: {
          data, 
          total: headers['x-total-count'],
          page: parseInt(page, 10)
      }
    });
    }
  },
  subscriptions: {
    setup({dispatch, history}){
      return history.listen(({pathname, query})=>{
        if(pathname==='/users'){
          //如果是users时 fetch数据？
          dispatch({ type: 'fetch', payload: query})
        }
      })
    }
  },
};
