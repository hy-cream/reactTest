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
      console.log(state)
      return {...state, list, total};
    }
  },
  //effects 的第一个参数时action
  effects: {
    *fetch({ payload: {page=1} }, { call, put }){
      console.log('fetch')
      const {data, headers} = yield call(usersService.fetch, {page});
      yield put({
        type: 'save', 
        payload: {
          data, 
          total:parseInt(headers['x-total-count'],10),
          page: parseInt(page, 10)
        }
      });
      console.log('save')
    }
  },
  // subscription 订阅一个数据源 然后dispatch相应action
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
