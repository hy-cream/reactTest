/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Card, Form, Input, Icon, Select, Row, Col, Button } from 'antd';
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
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
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
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select className="icp-selector" style={{width: '60px'}}>
                <Option value="86">+86</Option>
            </Select>
        );
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
                                                <Select />
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
                                            {getFieldDecorator('originDatasource', {
                                                rules: [{
                                                    required: true, message: '请输入原数据源!',
                                                }],
                                            })(
                                                <Select />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标数据源"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('targetDatasource', {
                                                rules: [{
                                                    required: true, message: '请输入目标数据源!',
                                                }],
                                            })(
                                                <Select />
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
                                            {getFieldDecorator('originTableName', {
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
                                            {getFieldDecorator('targetTableName', {
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
                                            {getFieldDecorator('originESType', {
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
                                            {getFieldDecorator('targetESType', {
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
                                            {getFieldDecorator('originESIndex', {
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
                                            {getFieldDecorator('targetESIndex', {
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
                                            {getFieldDecorator('originESIdField', {
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
                                            {getFieldDecorator('targetESIdField', {
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
                                    <Col span={12}>
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
                                    </Col>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标文件存储路径"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('targetFileSavePath', {
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
                                    </Col>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标文件存储名"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('targetFileSaveName', {
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
                                    </Col>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标日期转换格式"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('targetDataFormat', {
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
                                    <Col span={12}>
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
                                    </Col>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标主键映射"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('targetRowKey', {
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
                                            label="原时间戳映射"
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
                                    </Col>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="目标时间戳映射"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('targetRowKey', {
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
                                    <p>sssss</p>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="原字段映射"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('originFieldMap', {
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
                                            {getFieldDecorator('targetFieldMap', {
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
                                        <Button type="primary" htmlType="submit" size="large">注册</Button>
                                    
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

export default BasicForm;