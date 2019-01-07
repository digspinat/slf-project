import * as React from "react";
import { Segment, Container, Responsive } from "semantic-ui-react";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import Menu from "./Menu.js"
import Second from "./Second.js"
import "../css/styles.css";

const Layout = ({ children }) => {

  return (
    <Container>
        <Segment vertical textAlign="left" className="masthead">
          <Responsive><Menu /></Responsive>
        </Segment>
        <Segment>
          <Responsive><Second /></Responsive>
        </Segment>
        {children}
    </Container>
  );
};

export default Layout;
