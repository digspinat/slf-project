import * as React from "react";
import {
  Segment,Image,Grid,Input,Menu,Dropdown,Icon
} from "semantic-ui-react";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import mainLogo from'../images/logo.jpeg';
import { StaticQuery, graphql } from "gatsby"
import "../css/styles.css";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsMenu(filter: { locale: { eq: "en"}}) {
          edges {
            node {
              menu25
              menu05
              menu30
              menu10
              menu15 {
                id
                page05
                page30
                page10
              }
              menu35
              menu40
              menu20
              menu70
              menu50
              menu105 {
                ... on DatoCmsBlog {
                  blog05
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="masthead">
        <Segment vertical className="main-nav" style={{paddingLeft: 10}}>
           <Grid columns={5} stackable textAlign='left'>
              <Grid.Row verticalAlign='middle'>
               <Grid.Column>
                   <Image src={mainLogo} size='tiny' className="logo"/>
               </Grid.Column>
               <Grid.Column>
                   <Input icon='search' placeholder='Search...' className='searchBox'/>
               </Grid.Column>
              </Grid.Row>
            </Grid>
        </Segment>
      </div>
    )}
  />
)
