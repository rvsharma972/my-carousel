import { Form, Input, Button, } from 'antd';
import { useHistory } from "react-router-dom";
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

const Login = () => {
    const history = useHistory();
    const [form] = Form.useForm();

    function saveSelectionForm(values) {
        if (values.username == 'admin' && values.password == 'admin123') {
            localStorage.setItem('user-login', true);
            history.push("/home");
        }
    }
    return (
        <Form form={form} {...layout} onFinish={saveSelectionForm} style={{'margin-top':'40px'}}>
        <Form.Item label="Username" name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item label="Password" name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit"> Submit </Button>
        </Form.Item>
        </Form>
    );
};

export default Login;