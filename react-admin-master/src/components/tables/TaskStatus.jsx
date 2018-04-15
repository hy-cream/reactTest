/**
 * Created by hao.cheng on 2017/4/15.
 */
import React, { Component } from 'react';
import { Row, Col, Card, Table } from 'antd';
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
            dataIndex: 'onlyKey',
            key: 'onlyKey',
        }, {
            title: '原数据源',
            dataIndex: 'originDatasource',
            key: 'originDatasource',
        }, {
            title: '目标数据源',
            dataIndex: 'targetDatasource',
            key: 'targetDatasource',
        }, {
            title: '开始时间',
            dataIndex: 'startTime',
            key: 'startTime',
        }, {
            title: '任务进度',
            dataIndex: 'status',
            key: 'status',
        }, {
            title: 'aciton',
            dataIndex: 'errInfo',
            key: 'errInfo',
            render: () => <p><a>暂停</a><a style={{ marginLeft: 10 }}>停止</a><a style={{ marginLeft: 10 }}>重启</a></p>,
        }];
        
        const data = [{
            key: '1',
            id: 1,
            onlyKey: 1,
            originDatasource: '13123',
            targetDatasource: 'John Brown',
            startTime: '2012',
            status: '12',
            errInfo: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            id: 1,
            onlyKey: 1,
            originDatasource: '13123',
            targetDatasource: 'John Brown',
            startTime: '2012',
            status: '12',
            errInfo: 'New York No. 1 Lake Park',
        }, {
            key: '3',
            id: 1,
            onlyKey: 1,
            originDatasource: '13123',
            targetDatasource: 'John Brown',
            startTime: '2012',
            status: '12',
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