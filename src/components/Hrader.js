import * as React from "react";
import {
  Segment,Card,Header
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
              if(node.page05 == "Test page modular | Description"){
                for(let prop in node.page20) {
                  if(Object.keys(node.page20[prop]).length > 1){
                    let arrayH = ["H1","H2","H3","H4","H5","H6","Small","Medium","Large","Huge"];
                    let size="";
                    if(node.page20[prop].block2555 == "Large"){
                        size="large";
                    }else if(node.page20[prop].block2555 == "Medium")
                    {
                      size="medium";
                    }else if (node.page20[prop].block2555 == "Huge") {
                      size="larger";
                    }else {
                      size="small";
                    }
                  return(
                    <div >
                          {node.page20[prop].block02505 ?
                          <Header as={node.page20[prop].block2540} attached>
                            {node.page20[prop].block2510}
                            </Header>:""}
                          {node.page20[prop].block2525 ?
                          <Header as={node.page20[prop].block2550} attached>
                                {node.page20[prop].block2520}
                                </Header>:""}
                          {node.page20[prop].block2530 ?
                          <Segment  className={size} attached>
                          {node.page20[prop].block2535}
                              </Segment>:""}
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
