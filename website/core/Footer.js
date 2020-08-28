const React = require('react');
import { FaTelegramPlane,FaFacebookF,FaTwitter,FaLinkedinIn } from 'react-icons/fa';

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  
  render() {
    const newsletter = {
      height: '40px',
      border: '1px solid #eeeeee',
      width: '75% ',
      fontWeight: '400',
      background: '#fff',
      paddingLeft: '20px',
      borderRadius: '0',
      fontSize: '14px',
      padding: '10px 22px',
      borderRadius: '25px',
      color: 'black',
      marginRight: '-25px',
    }
  
    const icon = {
      borderRadius: '24px',
      padding: '6px 21px 4px 14px',
      border: '0',
      background: '#fdb900',
      color: '#fff',
      position: 'relative',
      left: '0',
      textTransform: 'capitalize',
      zIndex: '999',
      fontSize: '24px',
      display: 'inline-block',
      fontWeight: '400',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      userSelect: 'none',
      fontSize: '1.3rem',
      lineHeight: '1.5',
    }

    const group = {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        width: '100%',
    }

    const container = {
      width: '100%',
      paddingRight: '15px',
      paddingLeft: '15px',
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: '1400px'
    }

    const container1 = {
      width: '90%',
      paddingRight: '15px',
      paddingLeft: '15px',
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: '60%',
      borderTop: '1px solid #4c4f60',
      paddingTop: '20px',
      paddingBottom: '50px'
    }
    const social = {
      marginLeft: '3px',
      width: '32px',
      color: '#8f919c',
      display: 'inline-grid',
      textAlign: 'center',
      height: '32px',
      alignContent: 'center',
    }

    return (
      <footer className="nav-footer" id="footer" style={{background:'#1f2338'}}>
        <br></br>
        <br></br>
        <br></br>
        <section className="sitemap" style={container}>
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
            <h5 style={{fontSize:'20px'}}>About Us</h5>
            <br></br>
            <p style={{color:'#7b838a',paddingRight:'40px',fontSize:'16px'}}>
            SUPISTA - a Finnish word which literally means Abridge. <br></br>
            Like our name, we abridge the work of our users and allow them to focus on what's really important.
            </p>
            <h1 style={{color: 'white'}}>SUPISTA</h1>
          </div>
          <div>
            <h5 style={{fontSize:'20px'}}>Contact Info</h5>
            <br></br>
            <p style={{color:'#7b838a',paddingRight:'9px',fontSize:'14px'}}>
            APICON SOLUTIONS PRIVATE LIMITED <br></br>
            B-142, 3RD FLOOR,<br></br>
            FREEDOM FIGHTERS ENCLAVE,<br></br>
            NEB SARAI,<br></br>
            SOUTH WEST DELHI - 110068
            </p>
            <a href = "mailto: contact@apicon.io">Email : <span style={{color: '#007bff'}}> contact@apicon.io</span></a>
          </div>
          <div >
            <h5 style={{fontSize:'20px'}}>Important Link</h5>
            <br></br>
              <a style={{color:'#7b838a'}} href="#">User story</a>
              <a style={{color:'#7b838a'}} href="http://docs.apicon.io/en/latest/">Documentation</a>
              <a style={{color:'#7b838a'}} href="signup.html">Sign Up</a>
              <a style={{color:'#7b838a'}} href="#"> Get Sign In URL</a>
          </div>
          <div style={{color:'#7b838a',paddingRight:'100px',fontSize:'14px'}}>
            <h5 style={{fontSize:'20px'}}>Newsletter</h5>
            <br></br>
            <p style={{color:'#7b838a',paddingRight:'50px',fontSize:'16px'}}>
            Join our Newsletter to get notified about all our monthly updates!
            <div >
                        <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                        method="get">
                        <div  style={group}>
                            <input type="email" style={newsletter} name="EMAIL" placeholder="Your Email Address"></input>   
                                <button style={icon} type="submit">
                                    <FaTelegramPlane />
                                </button>   
                        </div>
                    </form>
                </div>
            </p>
          </div>
        </section>
        <section style={container1} className="copyright">
          <span style={{float: 'left'}}>
Copyright ©2020 All rights reserved | APICON SOLUTIONS PRIVATE LIMITED 
          </span>
          
        <span style={{float: 'right'}}>
                <a style={social} href="https://www.facebook.com/apicon.io"><FaFacebookF /></a>
                <a style={social} href="https://twitter.com/apicon_io"><FaTwitter /></a>
                <a style={social} href="https://www.linkedin.com/company/apicon-io/"><FaLinkedinIn /></a>
        </span>

        </section>
      </footer>
    );
  }
}

module.exports = Footer;
