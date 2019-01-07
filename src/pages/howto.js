import * as React from "react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import Layout from "../components/Layout.js"
import How from "../components/HOwto.js"


const Howto = ( ) =>
  <Layout>
    <div className="contentWrapper">
          <How />
    </div>
  </Layout>;

export default Howto;
