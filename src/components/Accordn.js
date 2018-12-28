import * as React from "react";
import {
  Segment,Accordion
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
            allDatoCmsPage(filter: { locale: { eq: "nl"}}) {
                edges {
                  node {
                  	id
                    page05
                    page10
                    page20 {
                      ... on DatoCmsBlock05{
                        block0505
                        block0510
                        block0515
                        block0540
                        block0595
                        block0570
                        block05100
                        block0580
                        block0520
                        block05105
                        block0590
                        block0525
                        block0565
                        block0560
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
            if(node.page10 === "contact"){
              for(let prop in node.page20) {
                if(Object.keys(node.page20[prop]).length > 1){
                  return(
                    <div>
                      hello
                      <Accordion defaultActiveIndex={0} panels={[
                        {
                          key: 'what-is-dog',
                          title: node.page20[prop].block0505,
                          content: [
                             node.page20[prop].block0510,
                          ].join(' '),
                        },
                        {
                          key: 'kinds-of-dogs',
                          title: node.page20[prop].block0520,
                          content: [
                            node.page20[prop].block0525
                          ].join(' '),
                        },
                        {
                          key: 'acquire-dog',
                          title: node.page20[prop].block0560,
                          content: [
                            node.page20[prop].block0565
                          ].join(' '),
                        },
                        {
                          key: 'acquire-dog',
                          title: node.page20[prop].block0580,
                          content: [
                            node.page20[prop].block0590
                          ].join(' '),
                        },
                        {
                          key: 'acquire-dog',
                          title: node.page20[prop].block05100,
                          content: [
                            node.page20[prop].block05105
                          ].join(' '),
                        },
                      ]} fluid styled/>
                    </div>
                  )
                }
              }
            }
            // if(node.page10 === "contact"){
            //   return(
            //     <div>
            //     text
            //        {node.page20[0].block0505}
            //     </div>
            //   )
            // }
          })}
        </Segment>
      </div>
    )}
  />
)


// export default ({data}) =>
//   ;
