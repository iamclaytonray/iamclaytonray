import * as React from 'react';
import { Card } from '../components/Card';

import { projects } from '../data/open-source';
import { Layout } from '../components/Layout';
import { Row, Col } from 'antd';

const OpenSourcePage = () => {
  return (
    <Layout>
      <Row style={{ marginTop: '5%', padding: 24 }} gutter={24}>
        {projects.map(project => (
          <Col key={project.id} span={8}>
            <Card
              key={project.id}
              title={project.title}
              link={project.link}
              description={project.description}
            />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default OpenSourcePage;
