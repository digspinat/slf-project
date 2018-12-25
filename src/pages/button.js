import * as React from "react";
import {
  Tab,Icon,Header,Button
} from "semantic-ui-react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import Layout from "../components/Layout.js"

const Buttn = ( ) =>
  <Layout>
      <div className="contentWrapper">
         <Header as="h2">Button</Header>
         <div>
            <div style={{padding:'5px'}}>
              <Button animated>
                 <Button.Content visible>Next</Button.Content>
                 <Button.Content hidden>
                   <Icon name='arrow right' />
                 </Button.Content>
              </Button>
            </div>
            <div style={{padding:'5px'}}>
              <Button animated='vertical'>
                 <Button.Content hidden>Shop</Button.Content>
                 <Button.Content visible>
                   <Icon name='shop' />
                 </Button.Content>
              </Button>
            </div>
            <div style={{padding:'5px'}}>
              <Button animated='fade' className="buttonpad">
                 <Button.Content visible>Sign-up for a Pro account</Button.Content>
                 <Button.Content hidden>$12.99 a month</Button.Content>
              </Button>
            </div>
         </div>
      </div>
  </Layout>;

export default Buttn;
