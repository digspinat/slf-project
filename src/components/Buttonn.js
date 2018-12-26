import * as React from "react";
import {
  Segment,Tab,Icon,Header,Button
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
              allDatoCmsPage(filter: {locale: {eq: "en"}}) {
                edges {
                  node {
                    id
                    page05
                    page10
                    page20 {
                        ... on DatoCmsBlock45
                      {
                        block4515
                        block4505{
                          page05
                        }
                        block4525
                        block4530
                        block4510
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
              if(node.page05 == "Test page modular | links + animated"){
                for(let prop in node.page20) {
                  if(Object.keys(node.page20[prop]).length > 1){
                    let but=true;
                    if(node.page20[prop].block4510.cssClassName == "Links text")
                    {
                          but=false;
                    }
                    else{

                         but=true;
                    }
                return(
                 <div>
                     <Header as="h2">Button</Header>
                     <div style={{padding:'5px'}}>
                      {but?  <div>
                       {node.page20[prop].block4525 ?
                     <Button animated>
                        <Button.Content visible>{node.page20[prop].block4515}</Button.Content>
                        <Button.Content hidden>
                          {node.page20[prop].block4530}
                        </Button.Content>
                     </Button>:
                       <Button>
                          <Button.Content visible>{node.page20[prop].block4515}</Button.Content>
                       </Button>
                     }</div>:
                        <Link to="/accordion/">{node.page20[prop].block4515}</Link> }
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
