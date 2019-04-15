import * as React from 'react';
import { Link } from 'gatsby';

import './header.scss';

export const Header = () => (
  <header>
    <nav>
      <div className="nav">
        <Link activeClassName="active" to="/">
          Home
        </Link>
        <Link activeClassName="active" to="/apps">
          Apps
        </Link>
        <Link activeClassName="active" to="/open-source">
          Open Source
        </Link>
        <Link activeClassName="active" to="/resume">
          Resume
        </Link>
        <Link activeClassName="active" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  </header>
);
