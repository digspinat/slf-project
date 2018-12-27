import * as React from "react";
import {
  Segment,Grid,Input,Image,Dropdown
} from "semantic-ui-react";
import { Link } from "gatsby";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import "../css/styles.css";
import { StaticQuery, graphql } from "gatsby"

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
              menu105{
                page30
              }
              menu60{
                page30
              }
              menu110{
                page30
              }
              menu90{
                page30
              }
              menu35
              menu40
              menu20
              menu70
              menu50
              menu55
              menu100
              menu85
            }
          }
        }
      }
    `}
    render={data => (
      <div className="masthead">
            <Segment vertical className="header">
            {data.allDatoCmsMenu.edges.map(({node,index}) => {
                  if(node.menu05 === "Header"){
                    return (
                        <div key={index}>
                              <Grid columns={8} stackable textAlign='left'>
                                  <Grid.Row verticalAlign='middle'>
                                   <Grid.Column style={{textAlign:'center'}}>
                                        <Link to={`${node.menu15.page30}`}>{node.menu10}</Link>
                                   </Grid.Column>
                                   {node.menu35 ?
                                   <Grid.Column style={{textAlign:'center'}}>
                                         <Link to={`${node.menu105.page30}`}>{node.menu40}</Link>
                                   </Grid.Column>:""}
                                   {node.menu20 ?
                                   <Grid.Column style={{textAlign:'center'}}>
                                         <Link to={`${node.menu60.page30}`}>{node.menu55}</Link>
                                   </Grid.Column>:""}
                                   {node.menu70 ?
                                   <Grid.Column style={{textAlign:'center'}}>
                                        <Link to={`${node.menu110.page30}`}>{node.menu85}</Link>
                                   </Grid.Column>:""}
                                   {node.menu50 ?
                                   <Grid.Column style={{textAlign:'center'}}>
                                        <Link to={`${node.menu90.page30}`}>{node.menu100}</Link>
                                   </Grid.Column>:""}
                                  </Grid.Row>
                              </Grid>
                          </div>
                        )
                        }
                      })}
              </Segment>
      </div>
    )}
  />
)
