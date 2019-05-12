import * as React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

import '../assets/scss/input.scss';

interface State {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage = () => {
  const [state, setState] = React.useState<State>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  return (
    <Layout>
      <SEO title="Contact" />
      <Row style={{ marginTop: '5%', padding: 24 }} gutter={24}>
        <form name="contact" method="POST" data-netlify="true">
          <Col>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={state.message}
              onChange={(e: any) =>
                setState({ ...state, name: e.target.value })
              }
            />
          </Col>
          <Col>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={(e: any) =>
                setState({ ...state, email: e.target.value })
              }
            />
          </Col>
          <Col>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={state.phone}
              onChange={(e: any) =>
                setState({ ...state, phone: e.target.value })
              }
            />
          </Col>
          <Col>
            <textarea
              name="message"
              placeholder="Message"
              value={state.message}
              onChange={(e: any) =>
                setState({ ...state, message: e.target.value })
              }
            />
            <Button type="primary" block htmlType="submit">
              Send
            </Button>
          </Col>
        </form>
      </Row>
    </Layout>
  );
};

export default ContactPage;
