import * as React from "react";
import {
  Tab,Icon,Header
} from "semantic-ui-react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import Layout from "../components/Layout.js"
import Tabss from "../components/Tabss.js"

const Tabs = ( ) =>
  <Layout>
      <div className="contentWrapper">
         <Tabss />
      </div>
  </Layout>;

export default Tabs;
