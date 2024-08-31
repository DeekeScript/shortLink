import { Button, Divider, Form, Space } from '@douyinfe/semi-ui';
import { FormApi } from '@douyinfe/semi-ui/lib/es/form';
import { useState } from 'react';
import moment from 'moment';
import styles from './search.module.css'


const Search = (props: any) => {
    const [formApi, setFormApi] = useState<FormApi>();
    const getFormApi = (formApi: FormApi) => {
        setFormApi(formApi);
    };

    const editValues = (values: any) => {
        if (!values) {
            return values;
        }

        for (let i in values) {
            if (values[i] instanceof Date) {
                values[i] = moment(values[i]).format('YYYY-MM-DD HH:mm:ss');
            } else if (values[i] instanceof Array) {
                for (let j in values[i]) {
                    if (values[i][j] instanceof Date) {
                        values[i][j] = moment(values[i][j]).format('YYYY-MM-DD HH:mm:ss');
                    }
                }
            }
        }
        return values;
    }

    return <div style={{ marginBottom: '24px' }}>
        <Form layout='horizontal' className={styles.form} labelPosition={'left'} getFormApi={getFormApi} initValues={props?.initValues}>
            {
                props.fields.map((item: any) => {
                    if (undefined === item.search || item.search === false) {
                        return;
                    }

                    if (item.type == "input" || !item.type) {
                        return <Form.Input showClear key={'search.' + item.dataIndex} label={item.title} field={item.dataIndex} />
                    } else if (item.type == 'select') {
                        return <Form.Select label={item.title} key={'search.' + item.dataIndex} field={item.dataIndex} initValue={-1}>
                            <Form.Select.Option key={'search.options' + item.id} label={'--请选择--'} value={-1} />
                            {item.options.map((option: any, index: number) => {
                                return <Form.Select.Option key={'search.options.' + item.dataIndex + '.' + index} label={option.label} value={option.value} />
                            })}
                        </Form.Select>
                    } else if (item.type == 'dateRange') {
                        return <Form.DatePicker key={'search.' + item.dataIndex} type='dateRange' label={item.title} field={item.dataIndex} />
                    } else if (item.type == 'dateTimeRange') {
                        return <Form.DatePicker key={'search.' + item.dataIndex} type='dateTimeRange' label={item.title} field={item.dataIndex} />
                    }
                })
            }

            <Button style={{ marginLeft: 'auto' }} type='secondary' onClick={() => {
                formApi?.reset();
                props.onSubmit({});
            }}>重置</Button>
            <Button style={{ marginLeft: '12px' }} theme='outline' type="primary" onClick={() => props.onSubmit(editValues(formApi?.getValues()))}>搜索</Button>
        </Form>
        <Divider style={{ padding: '0 0 0 0' }} />
    </div>
}

export default Search;
