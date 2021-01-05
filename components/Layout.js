import React, { Component } from "react";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout">
        <MainHeader />
        {children}
        <Footer />
      </div>
    );
  }
}
export default Layout;
