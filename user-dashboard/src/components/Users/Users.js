import React from 'react';
import styles from './Users.css';
import {connect} from 'dva';
import {Table, Pagination, Popconfirm, Button} from 'antd';
import {PAGE_SIZE} from '../../constants';
import {routerRedux} from 'dva/router';
import UserModal from './UserModal';

function Users({dispatch, list: dataSource, total, page:current, loading}) {
  function deleteHandler(id){
    dispatch({
      type: 'users/remove',
      payload: id
    });
    console.warn(`todo: ${id}`)
  }
  function pageChangeHandler(page){
    dispatch(routerRedux.push({
      pathname: '/users',
      query: {page}
    }));
    console.log('page:'+page)
  }
  function editHandler(id, values){
    dispatch({
      type: 'users/patch',
      payload:{id, values}
    })
  }
  function createHandler(values) {
    dispatch({
      type: 'users/create',
      payload: values,
    });
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text=> <a href="">{text}</a>
    },
    {
       title: 'Email',
       dataIndex: 'email',
       key: 'email',
    },
    {
       title: 'Website',
       dataIndex: 'website',
       key: 'website',
    },
    {
       title: 'Operation',
       key: 'operation',
       render: (text, record) => (
        //  operation--?
         <span className={styles.operation}>
           <UserModal record={record} onOk={editHandler.bind(null,record.id)}>
            <a>Edit</a>
           </UserModal>
           <Popconfirm title="comfirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
           </Popconfirm>
         </span>
      ),
    },
  ]
  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <UserModal record={{}} onOk={createHandler}>
            <Button type="primary">Create User</Button>
          </UserModal>
        </div>
        <Table 
          columns={columns}
          dataSource={dataSource}
          rowKey={record=>record.id}
          pagination={false}
          loading={loading}
        />
        <Pagination 
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  );
}
function mapStateToProps(state){
  const {list, total, page} = state.users;
  console.log(state.users.list)
  return{
    loading: state.loading.models.users,
    list,
    total,
    page
  };
}
export default connect(mapStateToProps)(Users);
