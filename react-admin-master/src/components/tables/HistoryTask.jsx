/**
 * Created by hao.cheng on 2017/4/15.
 */
import React, { Component } from 'react';
import { Row, Col, Card, Table } from 'antd';
import { fetchListRequest } from '../../axios';
import { connect } from 'react-redux';
import BreadcrumbCustom from '../BreadcrumbCustom';

class HistoryTask extends Component {
    componentWillMount() {
        fetchListRequest().then((response) => {
        if (response.errorno === 0) {
            dispatch({
                type: 'fetchList',
                payload: {
                    listData: response.data,
                }
            })
            message.success('获取历史列表成功');
        } else {
            message.error('获取历史列表失败');
        }
    })
    }
    render() {
        const columns = [{
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
        }, {
            title: '唯一标识',
            dataIndex: 'jobId',
            key: 'jobId',
        }, {
            title: '读数据源',
            dataIndex: 'reader',
            key: 'reader',
        }, {
            title: '写数据源',
            dataIndex: 'writer',
            key: 'writer',
        }, {
            title: '开始时间',
            dataIndex: 'createJobDate',
            key: 'createJobDate',
        }, {
            title: '结束时间',
            dataIndex: 'endJobDate',
            key: 'endJobDate',
        }, {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
        }, {
            title: '错误信息',
            dataIndex: 'errorMsg',
            key: 'errorMsg',
        }];
        // const data = listData;
        const data = [{
            key: '1',
            id: 1,
            jobId: 1,
            reader: '13123',
            writer: 'John Brown',
            createJobDate: '2012',
            endJobDate: '2012',
            state: '12',
            errorMsg: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            id: 1,
            jobId: 1,
            reader: '13123',
            writer: 'John Brown',
            createJobDate: '2012',
            endJobDate: '2012',
            state: '12',
            errorMsg: 'New York No. 1 Lake Park',
        }, {
            key: '3',
            id: 1,
            jobId: 1,
            reader: '13123',
            writer: 'John Brown',
            createJobDate: '2012',
            endJobDate: '2012',
            state: '12',
            errorMsg: 'New York No. 1 Lake Park',
        }];
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="历史任务" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="历史任务" bordered={false}>
                                <Table columns={columns} dataSource={data} />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
const mapStateToProps = state => {
    const { listData } = state.edit;
    return{ listData };
};

export default connect(mapStateToProps)(HistoryTask);