import React from 'react';
import styles from './Users.css';
import {connect} from 'dva';
import {Table, Pagination, Popconfirm} from 'antd';
import {PAGE_SIZE} from '../../constants';

function Users({list: dataSource, total, page:current, loading}) {
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
       render: (text, { id }) => (
        //  operation--?
         <span className={styles.operation}>
           <a href="">Edit</a>
           <Popconfirm title="comfirm to delete?" onConfirm={deleteHandler.bind(null,id)}>
            <a href="">Delete</a>
           </Popconfirm>
         </span>
      ),
    },
  ]
  function deleteHandler(id){
    console.warn(`todo: ${id}`)
  }
  function onChange(pageNumber){
    console.log('page:'+pageNumber)
  }
  return (
    <div className={styles.normal}>
      <div>
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
          onChange={onChange}
        />
      </div>
    </div>
  );
}
function mapStateToProps(state){
  console.log(state)
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
