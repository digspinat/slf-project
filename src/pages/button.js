import * as React from "react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import Layout from "../components/Layout.js"
import Buttonn from "../components/Buttonn.js"

const Buttn = ( ) =>
  <Layout>
            <div className="contentWrapper">
            <Buttonn />
            </div>
  </Layout>;

export default Buttn;
