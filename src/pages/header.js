import * as React from "react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import Layout from "../components/Layout.js"
import Headerpage from "../components/Hrader.js"

const Headr = ( ) =>
  <Layout>
    <div className="contentWrapper">
        <Headerpage />
    </div>
  </Layout>;

export default Headr;
