/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Card, Form, Input, Icon, Select, Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { submitFormRequest } from '../../axios';
import LoginForm from './LoginForm';
import ModalForm from './ModalForm';
import HorizontalForm from './HorizontalForm';
import BreadcrumbCustom from '../BreadcrumbCustom';
const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;

const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

class BasicForms extends Component {
    state = {
        confirmDirty: false,
    };
    componentWillMount() {
        this.initOption();
    }
    initOption = () => {
        this.select1 = <Select>
            <Option value='mysqlreader'>mysqlreader</Option>
            <Option value='hbase11xreader'>hbase11xreader</Option>
            <Option value='hdfsreader'>hdfsreader</Option>
            <Option value='mongodbreader'>mongodbreader</Option>
            <Option value='oraclereader'>oraclereader</Option>
            <Option value='txtfilereader'>txtfilereader</Option>
            <Option value='sqlserverreader'>sqlserverreader</Option>
        </Select>;
        this.select2 = <Select>
            <Option value='elasticsearchwriter'>elasticsearchwriter</Option>
            <Option value='hbase11xwriter'>hbase11xwriter</Option>
            <Option value='mongodbwriter'>mongodbwriter</Option>
            <Option value='mysqlwriter'>mysqlwriter</Option>
            <Option value='oraclereader'>oraclewriter</Option>
            <Option value='txtfilewriter'>txtfilewriter</Option>
            <Option value='sqlserverwriter'>sqlserverwriter</Option>
        </Select>;
    }
    handleTypeChange = (value) => {
        if (value === 'all') {
            this.select1 = <Select>
                <Option value='mysqlreader'>mysqlreader</Option>
                <Option value='hbase11xreader'>hbase11xreader</Option>
            </Select>;
            this.select2 = <Select>
                <Option value='mysqlreader'>mysqlwriter</Option>
                <Option value='hbase11xreader'>hbase11xwriter</Option>
            </Select>;            
        } else {
            this.initOption();
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const formdata = {
                    reader: values.reader,
                    rConfigName: values.rConfigName,
                    rTableName: values.rTableName,
                    rColumn: values.rColumn,
                    type: values.rtype || values.wtype,
                    index: values.rindex || values.windex,
                    idFiled: values.ridFiled || values.widFiled,
                    writer: values.writer,
                    wConfigName: values.wConfigName,
                    wTableName: values.wTableName,
                    wColumn: values.wColumn,
                    wPath: values.wPath,
                    wFileName: values.wFileName,
                    wFormat: values.wFormat,
                    rowkeyColumn: values.rowkeyColumn,
                    versionColumn: values.versionColumn,
                }
                this.props.dispatch({
                    type: 'submitForm',
                    payload: formdata,
                })
                submitFormRequest(formdata);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 14 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 20 },
                sm: { span: 10 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 8,
                },
            },
        };

        // const str = '[
        //                 {
        //                     "name":"a",
        //                     "type":"typeA",
        //                 },
        //                 {
        //                     "name":"b",
        //                     "type":"typeB",
        //                 }
        //             ...
        //             ]';
        return (
        <div className="gutter-example">
            <BreadcrumbCustom first="创建任务" />
            <Row gutter={24}>
                <Col className="gutter-row" span={24}>
                    <div className="gutter-box">
                        <Card title="注册表单" bordered={false}>
                            <Form onSubmit={this.handleSubmit}>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="任务类型"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('tasktype', {
                                                rules: [{
                                                    required: true, message: '请输入任务类型!',
                                                }],
                                            })(
                                                <Select onChange={this.handleTypeChange}>
                                                    <Option value='part'>部分同步（批量）</Option>
                                                    <Option value='all'>全量同步</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="原数据源"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('reader', {
                                                rules: [{
                                                    required: true, message: '请输入原数据源!',
                                                }],
                                            })(
                                                this.select1
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标数据源"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('writer', {
                                                rules: [{
                                                    required: true, message: '请输入目标数据源!',
                                                }],
                                            })(
                                                this.select2
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="原配置名"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('rConfigName', {
                                                rules: [{
                                                    required: false, message: '请输入原表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标配置名"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('wConfigName', {
                                                rules: [{
                                                    required: false, message: '请输入目标表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="原表名"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('rTableName', {
                                                rules: [{
                                                    required: false, message: '请输入原表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标表名"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('wTableName', {
                                                rules: [{
                                                    required: false, message: '请输入目标表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <p style={{ fontWeight: 'bold' }}>Elasticsearch配置  <Icon type="edit" style={{ fontSize: 13 }} /></p>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="原Type"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('rtype', {
                                                rules: [{
                                                    required: false, message: '请输入原表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标Type"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('wtype', {
                                                rules: [{
                                                    required: false, message: '请输入目标表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="原index"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('rindex', {
                                                rules: [{
                                                    required: false, message: '请输入原表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标index"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('windex', {
                                                rules: [{
                                                    required: false, message: '请输入目标表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="原idField"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('ridFiled', {
                                                rules: [{
                                                    required: false, message: '请输入原表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标IdField"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('widFiled', {
                                                rules: [{
                                                    required: false, message: '请输入目标表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <p style={{ fontWeight: 'bold' }}>Txt文件配置 <Icon type="edit" style={{ fontSize: 13 }} /></p>
                                </Row>
                                <Row>
                                    {/*<Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="原文件存储路径"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('originFileSavePath', {
                                                rules: [{
                                                    required: false, message: '请输入原表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>*/}
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标文件存储路径"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('wPath', {
                                                rules: [{
                                                    required: false, message: '请输入目标表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                {/*</Row>
                                <Row>*/}
                                    {/*<Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="原文件存储名"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('originFileSaveName', {
                                                rules: [{
                                                    required: false, message: '请输入原表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>*/}
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标文件存储名"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('wFileName', {
                                                rules: [{
                                                    required: false, message: '请输入目标表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>

                                <Row>
                                    {/*<Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="原日期转换格式"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('originDataFormat', {
                                                rules: [{
                                                    required: false, message: '请输入原表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>*/}
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标日期转换格式"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('wFormat', {
                                                rules: [{
                                                    required: false, message: '请输入目标表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <p style={{ fontWeight: 'bold' }}>HBase配置 <Icon type="edit" style={{ fontSize: 13 }} /></p>
                                </Row>
                                <Row>
                                    {/*<Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="原主键映射"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('originRowKey', {
                                                rules: [{
                                                    required: false, message: '请输入原表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>*/}
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标主键映射"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('rowkeyColumn', {
                                                rules: [{
                                                    required: false, message: '请输入目标表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                {/*</Row>
                                <Row>*/}
                                    {/*<Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="原时间戳映射"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('originTimeRowKey', {
                                                rules: [{
                                                    required: false, message: '请输入原表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>*/}
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标时间戳映射"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('versionColumn', {
                                                rules: [{
                                                    required: false, message: '请输入目标表名!',
                                                }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <p style={{ fontWeight: 'bold' }}>字段映射：（部分同步需填） <Icon type="edit" style={{ fontSize: 13 }} /></p>
                                    {/*<p>[
                                        {
                                            "name":"a",
                                            "type":"typeA",
                                        },
                                        {
                                            "name":"b",
                                            "type":"typeB",
                                        }
                                    ...
                                    ]
                                    </p>*/}
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="原字段映射"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('rColumn', {
                                                rules: [{
                                                    required: false, message: '请输入原表名!',
                                                }],
                                            })(
                                                <TextArea placeholder="请填写原字段映射" autosize={{ minRows: 3, maxRows: 6 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标字段映射"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('wColumn', {
                                                rules: [{
                                                    required: false, message: '请输入原表名!',
                                                }],
                                            })(
                                                <TextArea placeholder="请填写目标字段映射" autosize={{ minRows: 3, maxRows: 6 }} />
                                            )}
                                        </FormItem>
                                    </Col>
                        
                                </Row>
                                <Row>
                                    <Col offset={18}>
                                        <Button type="primary" htmlType="submit" size="large">创建</Button>
                                    
                                    </Col>
                                </Row>
                                  
{/*                                 
                                <FormItem {...tailFormItemLayout}>
                                </FormItem> */}
                            </Form>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
        )
    }
}

const BasicForm = Form.create()(BasicForms);
export default connect()(BasicForm);
// export default BasicForm;