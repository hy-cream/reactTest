/**
 * Created by hao.cheng on 2017/4/15.
 */
import React, { Component } from 'react';
import { Row, Col, Card, Table } from 'antd';
import { pauseRequest, restartRequest, cancelRequest } from '../../axios';
import BreadcrumbCustom from '../BreadcrumbCustom';

export default class TaskStatus extends Component {
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
            title: '原数据源',
            dataIndex: 'reader',
            key: 'reader',
        }, {
            title: '目标数据源',
            dataIndex: 'writer',
            key: 'writer',
        }, {
            title: '开始时间',
            dataIndex: 'createJobDate',
            key: 'createJobDate',
        }, {
            title: '任务进度',
            dataIndex: 'state',
            key: 'state',
        }, {
            title: 'aciton',
            dataIndex: 'errInfo',
            key: 'errInfo',
            render: (text, record) => 
            <p>
                <a onClick={() => pauseRequest(record.jobId)}>暂停</a>
                <a onClick={() => cancelRequest(record.jobId)} style={{ marginLeft: 10 }}>停止</a>
                <a onClick={() => restartRequest(record.jobId)} style={{ marginLeft: 10 }}>重启</a>
            </p>,
        }];
        
        const data = [{
            key: '1',
            id: 1,
            jobId: 1,
            reader: '13123',
            writer: 'John Brown',
            createJobDate: '2012',
            state: '12',
            errInfo: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            id: 1,
            jobId: 1,
            reader: '13123',
            writer: 'John Brown',
            createJobDate: '2012',
            state: '12',
            errInfo: 'New York No. 1 Lake Park',
        }, {
            key: '3',
            id: 1,
            jobId: 1,
            reader: '13123',
            writer: 'John Brown',
            createJobDate: '2012',
            state: '12',
            errInfo: 'New York No. 1 Lake Park',
        }];
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="任务状态" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="任务状态" bordered={false}>
                                <Table columns={columns} dataSource={data} />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}