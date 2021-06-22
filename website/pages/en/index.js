const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; 
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <div style={{background: `url(${baseUrl}img/banner.jpg)`,color: 'white',height:'400px',paddingTop:'30px'}}>
        <SplashContainer>
          <div className="inner">
          <img
            src={`${baseUrl}img/logo.png`}
            alt="Facebook Open Source"
            width='200'
            style={{padding:'25px'}}
          />
            <div style={{fontSize: '2.0em'}}>Documentation for Supista</div>
            <PromoSection>
              <Button href={docUrl('doc1.html')}><span style={{color: 'White',fontSize:'1.5em'}}>Get Started</span></Button>
            </PromoSection>
          </div>
        </SplashContainer>
      </div>
      
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const TryOut1 = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );
    const TryOut2 = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'right',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );
    const TryOut3 = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );
    const TryOut4 = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'right',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Fastest and automated way to analyse all the key point indicators which are relevant for you Business Growth.',
            imageAlign: 'top',
            title: 'Decision Management System',
          },
          {
            content: 'Our software is already equiped with a completely customisable Customer Relationship Management Software for you.',
            imageAlign: 'top',
            title: 'Customer Relationship Management (CRM)',
          },
          {
            content: 'Develop a hassle free & tailor-made software as per the need of your business on our Platform.',
            imageAlign: 'top',
            title: 'Business Process Automations',
          },
          {
            content: 'With our Supista, you can develop your app or SaaS server and dashboard in a hassle free way.',
            imageAlign: 'top',
            title: 'Your own SaaS & App Server and Dashboard',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    const container = {
      width: '100%',
      paddingRight: '15px',
      paddingLeft: '15px',
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: '1400px'
    }

    return (
      <div >
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          
          <div style={container}>
            <h1 style={{textAlign:'center',fontSize:'2.5em'}}>Features</h1>
          <Features />
            <hr></hr>
            <TryOut1 />
            <hr></hr>
            <TryOut2 />
            <hr></hr>
            <TryOut3 />
            <hr></hr>
            <TryOut4 />
          </div>
          
        </div>
      </div>
    );
  }
}

module.exports = Index;
