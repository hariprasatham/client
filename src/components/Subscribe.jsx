import React from 'react'
import { Input, Card, Form, Button, Row, Col, message } from 'antd'
import API from "../api.js"

const api = new API()
const Subscribe = () => {
    const [form] = Form.useForm();


    const subscribeUser = (values) =>{
        api.addEmail(values).then((res)=>{
            if(res?.data?.status == 200)
            {
                message.success(res?.data?.message)
                form.resetFields()
            }else{
                message.warning(res?.data?.message)
            }
        }).catch((err)=>{
            message.warning(err?.response?.data?.message)
        })
    }

  return (
    <Row className='card-container' align="middle" justify="center">
        <Col xs={23} sm={20} md={20} lg={8} xl={16} className='card'>
            <h2>JOIN OUR NEWSLETTER</h2>
            <p>Subscribe our newsletter to receive the latest news and exclusive offers every week. No spam.</p>
            <Form form={form} className='form'onFinish={subscribeUser}>
                <Form.Item name="email">
                    <Input className="email-field"/>
                </Form.Item>
                <Button htmlType='submit' size="middle" className='button'>SUBSCRIBE</Button>
            </Form>
        </Col>
    </Row>
  )
}

export default Subscribe