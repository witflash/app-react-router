import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className="footer pt-3">
        <div className="container">
          <p className="text-muted" style={{ fontSize: 0.8 + 'rem' }}>
            WitFlash &copy; 2018
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
