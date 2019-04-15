import * as React from 'react';
import { Row, Col, Typography } from 'antd';
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
  const [state, setState] = React.useState<Partial<State>>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  return (
    <Layout>
      <SEO title="Contact" />
      <Row style={{ marginTop: '5%', padding: 24 }} gutter={24}>
        <Typography>
          My contact form is currently not working. It could be but I'm off
          working on other projects. For now, just email me at{' '}
          <a href="mailto:iamclaytonray@gmail.com">iamclaytonray@gmail.com</a>.
          Thanks!
        </Typography>
        <form name="contact" method="POST" data-netlify="true">
          <Col>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={state.message}
              onChange={(e: any) => setState({ name: e.target.value })}
            />
          </Col>
          <Col>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={(e: any) => setState({ email: e.target.value })}
            />
          </Col>
          <Col>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={state.phone}
              onChange={(e: any) => setState({ phone: e.target.value })}
            />
          </Col>
          <Col>
            <textarea
              name="message"
              placeholder="Message"
              value={state.message}
              onChange={(e: any) => setState({ message: e.target.value })}
            />
          </Col>
          <button type="submit">Send</button>
        </form>
      </Row>
    </Layout>
  );
};

export default ContactPage;
