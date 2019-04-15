import * as React from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  </React.Fragment>
);
