import * as React from "react";
import {
  Segment,Grid,Responsive
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
        allDatoCmsMenu(filter: { locale: { eq: "nl"}}) {
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
                let pro=true;
                if(node.menu110 == null)
                {
                  pro=false;
                }
                else {
                  pro=true;
                }
                let pro1=true;
                if(node.menu90 == null)
                {
                  pro1=false;
                }
                else {
                  pro1=true;
                }
                let pro2=true;
                if(node.menu105 == null)
                {
                  pro2=false;
                }
                else {
                  pro2=true;
                }
                let pro3=true;
                if(node.menu60 == null)
                {
                  pro3=false;
                }
                else {
                  pro3=true;
                }
                return (
                    <div key={index}>
                      <Grid columns={8} stackable textAlign='left'>
                        <Grid.Row verticalAlign='middle'>
                         <Grid.Column style={{textAlign:'center'}}>
                              <Link to={`${node.menu15.page30}`}>{node.menu10}</Link>
                         </Grid.Column>
                         {node.menu35 && pro2 ?
                         <Grid.Column style={{textAlign:'center'}}>
                               <Link to={`${node.menu105.page30}`}>{node.menu40}</Link>
                         </Grid.Column>:""}
                         {node.menu20 && pro3 ?
                         <Grid.Column style={{textAlign:'center'}}>
                               <Link to={`${node.menu60.page30}`}>{node.menu55}</Link>
                         </Grid.Column>:""}
                         {node.menu70 && pro ?
                         <Grid.Column style={{textAlign:'center'}}>
                              <Link to={`${node.menu110.page30}`}>{node.menu85}</Link>
                         </Grid.Column>:""}
                         {node.menu50 && pro1 ?
                         <Grid.Column style={{textAlign:'center'}}>
                              <Link to={`${node.menu90.page30}`}>{node.menu100}</Link>
                         </Grid.Column>:""}
                         <Grid.Column style={{textAlign:'center'}}>
                              <Link to={`milestone2`}>Milestone 2</Link>
                         </Grid.Column>
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
