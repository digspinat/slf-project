import * as React from "react";
import {
  Segment,Grid,Input
} from "semantic-ui-react";
import { Link } from "gatsby";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import "../css/styles.css";


const Second = () =>
        <Segment vertical className="header">
        <Grid columns={8} stackable textAlign='left'>
           <Grid.Row verticalAlign='middle'>
            <Grid.Column style={{textAlign:'center'}}>
              <Link to="/accordion/">Accordion</Link>
            </Grid.Column>
            <Grid.Column style={{textAlign:'center'}}>
                <Link to="/tabs/">Tabs</Link>
            </Grid.Column>
            <Grid.Column style={{textAlign:'center'}}>
              <Link to="/button/">Button</Link>
            </Grid.Column>
            <Grid.Column style={{textAlign:'center'}}>
              <Link to="/contact/">Contact</Link>
            </Grid.Column>
            <Grid.Column style={{textAlign:'center'}}>
            <Link to="/howto/">How to</Link>
            </Grid.Column>
            <Grid.Column style={{textAlign:'center'}}>
            <Link to="/header/">Header&Description</Link>
            </Grid.Column>
           </Grid.Row>
         </Grid>
         <Grid columns={8} stackable textAlign='left'>
         <Grid.Row verticalAlign='middle'>
         <Grid.Column style={{textAlign:'center'}}>
         <Link to="/headerpart2/">Header&DescriptionPart2</Link>
         </Grid.Column>
          <Grid.Column style={{textAlign:'center'}}>
          <Link to="/feature/">Feature</Link>
          </Grid.Column>
         </Grid.Row>
         </Grid>
        </Segment>
export default Second;
