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
                  id
                  page05
                  page10
                  page20 {
                    ... on DatoCmsBlock25
                    {
                       block02505
                      block2520
                      block2510
                      block2525
                      block2530
                      block2535
                      block2540
                      block2550
                      block2555
                    }
                    ... on DatoCmsBlock55{
                      block5505{
                        cssClassName
                      }
                    }
                    ... on DatoCmsBlock35
                    {
                      block03505
                      block3510{
                        url
                      }
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
              if(node.page05 == "Test page modular | Text image"){
                for(let prop in node.page20) {
                  if(Object.keys(node.page20[prop]).length > 1){
                  return(
                    <div className="buttonpad">
                        <Grid divided='vertically' celled>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                  <Image src={node.page20[1].block3510.url} />
                                </Grid.Column>
                                <Grid.Column>
                                    {node.page20[2].block02505 ?
                                  <Header > {node.page20[2].block2510}  </Header>:""}
                                  {node.page20[2].block2525 ?
                                  <Header >   {node.page20[2].block2520}</Header>:""}
                                  {node.page20[2].block2530 ?
                                  <p> {node.page20[2].block2535}</p>:""}
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
