import * as React from 'react';

import './footer.scss';

export const Footer = () => (
  <footer>
    <div className="footer">
      <a href="https://github.com/iamclaytonray" target="_blank">
        <div className="social-card github">
          <i className="fa fa-github" />
        </div>
      </a>
      <a href="https://twitter.com/iamclaytonray" target="_blank">
        <div className="social-card twitter">
          <i className="fa fa-twitter" />
        </div>
      </a>
      <a href="https://instagram.com/iamclaytonray" target="_blank">
        <div className="social-card instagram">
          <i className="fa fa-instagram" />
        </div>
      </a>
      <a href="https://anchor.fm/iamclaytonray" target="_blank">
        <div className="social-card anchor">
          <i className="fa fa-anchor" />
        </div>
      </a>
      <a href="https://medium.com/iamclaytonray" target="_blank">
        <div className="social-card medium">
          <i className="fa fa-medium" />
        </div>
      </a>
      <a href="https://www.youtube.com/claytonray" target="_blank">
        <div className="social-card youtube">
          <i className="fa fa-youtube" />
        </div>
      </a>
      <a href="mailto:iamclaytonray@gmail.com">
        <div className="social-card youtube">
          <i className="fa fa-envelope" />
        </div>
      </a>
    </div>
  </footer>
);
