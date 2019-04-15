import * as React from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/Card';
import { apps } from '../data/apps';
import { Row, Col } from 'antd';
import { SEO } from '../components/SEO';

const AppsPage = () => {
  return (
    <Layout>
      <SEO title="Apps" />
      <Row style={{ marginTop: '5%', padding: 24 }} gutter={24}>
        {apps.map(app => (
          <Col key={app.id} span={8}>
            <Card
              title={app.title}
              link={app.link}
              description={app.description}
            />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default AppsPage;
