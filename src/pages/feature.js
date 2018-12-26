import * as React from "react";
import {
    Accordion,Icon,Header
} from "semantic-ui-react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import Layout from "../components/Layout.js"
import Featurepage from "../components/Feature.js"


const Feature = ( ) =>
  <Layout>
    <div className="contentWrapper">
       <Featurepage />
    </div>
  </Layout>;

export default Feature;
