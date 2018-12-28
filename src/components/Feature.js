import * as React from "react";
import {
  Segment,Image,Header,Grid
} from "semantic-ui-react";
import { Link } from "gatsby";
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
              allDatoCmsPage(filter: {locale: {eq: "nl"}}) {
                edges {
                  node {
                    page05
                    page20 {
                     ... on  DatoCmsBlock30{
                       block3005
                       block3010
                       block3015
                       block3020
                       block3085
                       block3095
                       block3090
                       block3030
                     }
                  }
                }
              }
            }
            }
    `}

    render={data => (
      <div className="masthead">
        <Segment vertical  style={{paddingLeft: 10}}>
          {data.allDatoCmsPage.edges.map(({node})=> {
              if(node.page05 == "Test page modular | Feature 2 in a row text"){
                for(let prop in node.page20) {
                  if(Object.keys(node.page20[prop]).length > 1){
                  return(
                    <div className="buttonpad">
                        <Grid divided='vertically' celled>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <Header > {node.page20[0].block3010}  </Header>
                                    <p> {node.page20[0].block3015}</p>
                                </Grid.Column>
                                <Grid.Column>
                                  <Header > {node.page20[1].block3010}</Header>
                                  <p> {node.page20[1].block3015}</p>
                                </Grid.Column>
                              </Grid.Row>
                         </Grid>
                    </div>
                  )
           }
         }
            }
            if(node.page05 == "Test page modular | Feature 4 in a row text"){
              for(let prop in node.page20) {
                if(Object.keys(node.page20[prop]).length > 1){
                return(
                  <div className="buttonpad">
                      <Grid divided='vertically' celled>
                          <Grid.Row columns={4}>
                              <Grid.Column>
                                  <Header > {node.page20[0].block3010}  </Header>
                                  <p> {node.page20[0].block3015}</p>
                              </Grid.Column>
                              <Grid.Column>
                                <Header > {node.page20[1].block3010}</Header>
                                <p> {node.page20[1].block3015}</p>
                              </Grid.Column>
                              <Grid.Column>
                                <Header > {node.page20[2].block3010}</Header>
                                <p> {node.page20[2].block3015}</p>
                              </Grid.Column>
                              <Grid.Column>
                                <Header > {node.page20[3].block3010}</Header>
                                <p> {node.page20[3].block3015}</p>
                              </Grid.Column>
                            </Grid.Row>
                       </Grid>
                  </div>
                )
         }
       }
          }
          }
        )}
        </Segment>
      </div>
    )}
  />
)


// export default ({data}) =>
//   ;
