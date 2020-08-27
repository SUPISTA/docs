/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>About Us</h5>
            <p style={{color:'rgba(255, 255, 255, 0.6)',paddingRight:'7px'}}>
            SUPISTA - a Finnish word which literally means Abridge.
            Like our name, we abridge the work of our users and allow them to focus on what's really important.
            </p>
          </div>
          <div>
            <h5>Contact Info</h5>
            <p style={{color:'rgba(255, 255, 255, 0.6)',paddingRight:'7px',fontSize:'0.8em'}}>
            APICON SOLUTIONS PRIVATE LIMITED <br></br>
            B-142, 3RD FLOOR,<br></br>
            FREEDOM FIGHTERS ENCLAVE,<br></br>
            NEB SARAI,<br></br>
            SOUTH WEST DELHI - 110068
            </p>
            Email : <a href = "mailto: contact@apicon.io">contact@apicon.io</a>
          </div>
          <div>
            <h5>Important Link</h5>
              <a href="#">User story</a>
              <a href="http://docs.apicon.io/en/latest/">Documentation</a>
              <a href="signup.html">Sign Up</a>
              <a href="#"> Get Sign In URL</a>
          </div>
        </section>
        <section className="copyright">Copyright ©2020 All rights reserved | APICON SOLUTIONS PRIVATE LIMITED</section>
      </footer>
    );
  }
}

module.exports = Footer;
