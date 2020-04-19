import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

import "../styles/bootstrap.scss";
import "../styles/styles.scss";

import Header from "./Header";
import Footer from "./Footer";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <div className="main">
          <Header />
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap"
              rel="stylesheet"
            />


          </Helmet>
          <main>{children}</main>
          <Footer config={config}  />
        </div>
      </>
    );
  }
}
