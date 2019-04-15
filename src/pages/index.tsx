import * as React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ padding: 25, marginTop: '5%' }}>
      <h1>Hello World.</h1>
    </div>
  </Layout>
);

export default IndexPage;
