/**
 * Created by hao.cheng on 2017/4/15.
 */
import React, { Component } from 'react';
import { Row, Col, Card, Table } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';

export default class HistoryTask extends Component {
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
            title: '读数据源',
            dataIndex: 'readDatasource',
            key: 'readDatasource',
        }, {
            title: '写数据源',
            dataIndex: 'writeDatasource',
            key: 'writeDatasource',
        }, {
            title: '开始时间',
            dataIndex: 'startTime',
            key: 'startTime',
        }, {
            title: '结束时间',
            dataIndex: 'endTime',
            key: 'endTime',
        }, {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
        }, {
            title: '错误信息',
            dataIndex: 'errInfo',
            key: 'errInfo',
        }];
        
        const data = [{
            key: '1',
            id: 1,
            onlyKey: 1,
            readDatasource: '13123',
            writeDatasource: 'John Brown',
            startTime: '2012',
            endTime: '2012',
            status: '12',
            errInfo: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            id: 1,
            onlyKey: 1,
            readDatasource: '13123',
            writeDatasource: 'John Brown',
            startTime: '2012',
            endTime: '2012',
            status: '12',
            errInfo: 'New York No. 1 Lake Park',
        }, {
            key: '3',
            id: 1,
            onlyKey: 1,
            readDatasource: '13123',
            writeDatasource: 'John Brown',
            startTime: '2012',
            endTime: '2012',
            status: '12',
            errInfo: 'New York No. 1 Lake Park',
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