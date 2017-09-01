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
    },
    *remove({payload: id}, {call, put}){
      yield call(usersService.remove, id);
      yield put({type: 'reload'});
      console.log('remove')
      console.log(yield call(usersService.remove, id))
      // const age = yield select(state=>state.users.page);
      // yield put({type: 'fetch', payload: {page}});
    },
    *patch({ payload: { id, values } }, { call, put }) {
      yield call(usersService.patch, id, values);
      yield put({ type: 'reload' });
    },
    *create({ payload: values }, { call, put }) {
      yield call(usersService.create, values);
      yield put({ type: 'reload' });
    },
    *reload(action, { put, select }) {
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: { page } });
    },
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
