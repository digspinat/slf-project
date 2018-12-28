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
                    ... on DatoCmsBlock40
                    {
                      block4005
                      block4010
                      block4015
                      block4020
                      block4025
                      block4030
                      block4035
                      block4040
                      block4045
                      block4050
                      block4055
                      block4060
                      block4065
                      block4070
                      block4075
                      block4080
                      {
                        cssClassName
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
              if(node.page05 == "Test page modular | How to"){
                for(let prop in node.page20) {
                  if(Object.keys(node.page20[prop]).length > 1){
                    let classhead = "customheadStyleHead";
                    if(node.page20[prop].block4080.cssClassName == "Header Bold and Text  Normal")
                    {
                      classhead = "customheadStyleHead"
                    }else if(node.page20[prop].block4080.cssClassName == "Header Normal Text Bold"){
                      classhead = "customheadStyleDesc"
                    }
                  return(
                    <div className={classhead}>
                      <Header as="h3">{node.page20[0].block4005}</Header>
                      <Card fluid
                              header={node.page20[0].block4010}
                              description={node.page20[0].block4015}/>
                       {node.page20[0].block4020 ?
                      <Card  fluid
                              header={node.page20[0].block4025}
                              description={node.page20[0].block4030}/>:""}
                      {node.page20[0].block4035 ?
                      <Card  fluid
                             header={node.page20[0].block4040}
                             description={node.page20[0].block4045}/>:""}
                      {node.page20[0].block4050 ?
                      <Card  fluid
                              header={node.page20[0].block4055}
                              description={node.page20[0].block4060}/>:""}
                     {node.page20[0].block4065 ?
                      <Card  fluid
                             header={node.page20[0].block4070}
                             description={node.page20[0].block4075}/>:""}
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
