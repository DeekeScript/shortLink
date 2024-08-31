'use client';
import { IconSemiLogo } from '@douyinfe/semi-icons';
import { Button, Form, Toast, useFormApi } from "@douyinfe/semi-ui";
import { useEffect, useState } from 'react';
import { login, qrcode } from './Fetch';
import Image from 'next/image';
import { FormApi } from '@douyinfe/semi-ui/lib/es/form';
import { useRouter } from 'next/navigation';
import './style.css';

const Login = () => {
    const [qrcodeData, setQrcodeData] = useState({ img: '', key: '' });
    const [formApi, setFormApi] = useState<FormApi>();
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const fetchData = async () => {
        let res = await qrcode({});
        if (res.code === 0) {
            setQrcodeData(res.data);
            //console.log(res);
        }
    };

    const getFormApi = (formApi: FormApi) => {
        setFormApi(formApi);
    };

    const submit = async () => {
        if (!formApi?.getValue('mobile')) {
            return Toast.error(`手机号不能为空`);
        } else if (!/^1\d{10}$/.test(formApi.getValue('mobile'))) {
            return Toast.error(`手机号不正确`);
        }

        if (!formApi?.getValue('password')) {
            return Toast.error(`密码不能为空`);
        }

        if (!formApi?.getValue('qrcode')) {
            return Toast.error(`验证码不能为空`);
        }

        if (!formApi?.getValue('agree')) {
            return Toast.error(`请先同意协议`);
        }

        setLoading(true);
        let res = await login({ ...formApi?.getValues(), 'key': qrcodeData.key });
        console.log(res);
        if (res.code === 0) {
            localStorage.setItem('access_token', res.data['token_type'] + ' ' + res.data['access_token'])
            router.push('/Home');
        } else {
            Toast.error(res.msg);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
            {/* <div style={{ background: "url(/images/bj.jpg) no-repeat", backgroundSize: 'cover', height: '100%', opacity: 0.4 }}></div> */}
            <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', backgroundColor: "rgba(243, 243, 243, 0.8)" }}>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 24px', width: '260px' }}>
                    <div><IconSemiLogo style={{ fontSize: 36 }} /></div>
                    <div style={{ paddingTop: '0px', fontSize: '24px' }}>{process.env.NEXT_PUBLIC_TITLE}平台</div>
                </div>
            </div>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%' }}>
                <div style={{ backgroundColor: '#FFFFFF', width: '400px', height: '360px', margin: 'auto', marginTop: "13%", padding: '24px', border: 'solid 12px #F3F3F3', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ paddingTop: '0px', fontSize: '20px' }}>账号登录</div>
                    </div>
                    <Form
                        labelPosition={"left"}
                        getFormApi={getFormApi}
                        //labelWidth={"100px"}
                        labelAlign={"left"}
                        style={{ padding: '10px', width: 332 }}>
                        <Form.Input
                            field="mobile"
                            placeholder="手机号"
                            noLabel={true}
                            trigger='blur'
                            style={{ width: 312 }}
                        />
                        <Form.Input
                            field="password"
                            type='password'
                            placeholder="密码"
                            noLabel={true}
                            style={{ width: 312 }}
                            trigger='blur'
                        />
                        <div style={{ display: 'flex' }}>
                            <Form.Input
                                field="qrcode"
                                placeholder="验证码"
                                noLabel={true}
                                trigger='blur'
                                style={{ width: 212 }}
                            />
                            {qrcodeData.img ? <Image title='点击更换' onClick={async () => await fetchData()} alt='验证码' width={88} height={42} style={{ marginLeft: '12px', height: '42px', width: '88px', paddingTop: '12px' }} src={qrcodeData.img} /> : null}
                        </div>


                        <Button theme='outline' loading={loading} onClick={submit} style={{ width: 312 }} type="primary">登录</Button>
                        <Form.Checkbox field='agree' style={{ fontSize: '12px', color: '#EEEEEE' }} noLabel>同意我们的《用户协议》和《隐私政策》</Form.Checkbox>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;
