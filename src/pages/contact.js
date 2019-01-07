import * as React from "react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import Layout from "../components/Layout.js"
import Accordn from "../components/Accordn.js"

const Contact = ( ) =>
  <Layout>
    <div className="contentWrapper">
       <Accordn />
    </div>
  </Layout>;

export default Contact;
