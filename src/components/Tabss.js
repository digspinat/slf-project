import * as React from "react";
import {
  Segment,Tab,Message,Image
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
          allDatoCmsPage(filter: {locale: {eq: "nl"}}) {
            edges {
              node {
                id
                page05
                page10
                page20 {
                  ... on DatoCmsBlock15 {
                    block1505
                    block1510
                    block1515
                    block1560
                    block1565
                    block1585
                    block1580 {
                      url
                    }
                    block15110
                    block1570
                    block1545
                    block1550
                    block1595
                    block1540
                    block1590
                    block1575
                    block1555 {
                      url
                    }
                    block1525 {
                      url
                    }
                    block15105 {
                      url
                    }
                    block15140 {
                      cssClassName
                    }
                    block15130 {
                      url
                    }
                    block15100
                    block15125
                    block15160
                    block15145
                    block15115

                    block15135
                    block15120
                    block15150
                    {
                      cssClassName
                    }
                    block15165 {
                      page05
                    }
                    block15170{
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
              if(node.page05 == "Test page modular | Tabs horizontal no images"){
                for(let prop in node.page20) {
                  if(Object.keys(node.page20[prop]).length > 1){
                    let myclassnme = "buttonpad"
                    if(node.page20[prop].block15150.cssClassName === "Quote background blue"){
                      myclassnme = "bluebackgrnd buttonpad";
                    }else if(node.page20[prop].block15150.cssClassName === "Quote background red"){
                      myclassnme = "redbackgrnd buttonpad";
                    }
                    return(
                      <div>
                        <Tab className="tabpadding" menu={{ secondary: true, pointing: true }} panes={ [
                                  { menuItem: node.page20[prop].block1505, render: () => <Tab.Pane  attached={false}>{node.page20[prop].block1510}
                                                <div className="buttonpad"><Image src={node.page20[prop].block1515} size='medium' wrapped /></div>
                                              <div className="buttonpad"><Image src={node.page20[prop].block1525.url} size='medium' wrapped /></div>
                                              {node.page20[prop].block15135? <div  className={myclassnme}><Message>
                                                <Message.Header className="colorquote">{node.page20[prop].block15145}</Message.Header>
                                              </Message></div>:""}
                                                </Tab.Pane>},
                                  {menuItem: node.page20[prop].block1565, render: () => <Tab.Pane attached={false}>{node.page20[prop].block1570}
                                                <div className="buttonpad"><Image src={node.page20[prop].block1550} size='medium' wrapped /></div>
                                                <div className="buttonpad"><Image src={node.page20[prop].block1555.url} size='medium' wrapped /></div>
                                                </Tab.Pane>},node.page20[prop].block1560 ?
                                  { menuItem: node.page20[prop].block1540, render: () => <Tab.Pane attached={false}>{node.page20[prop].block1545}
                                                <div className="buttonpad"><Image src={node.page20[prop].block1575} size='medium' wrapped /></div>
                                                <div className="buttonpad"><Image src={node.page20[prop].block1580.url} size='medium' wrapped /></div>
                                                </Tab.Pane> }:"",node.page20[prop].block1585?
                                  { menuItem: node.page20[prop].block1590, render: () => <Tab.Pane attached={false}>{node.page20[prop].block1595}
                                                  <div className="buttonpad"><Image src={node.page20[prop].block15100} size='medium' wrapped /></div>
                                                  <div className="buttonpad"><Image src={node.page20[prop].block15105.url} size='medium' wrapped /></div>
                                                </Tab.Pane> }:"",node.page20[prop].block15110?
                                  { menuItem: node.page20[prop].block15115, render: () => <Tab.Pane attached={false}>{node.page20[prop].block15120}
                                                  <div className="buttonpad"><Image src={node.page20[prop].block15125} size='medium' wrapped /></div>
                                                  <div className="buttonpad"><Image src={node.page20[prop].block15130.url} size='medium' wrapped /></div>
                                                </Tab.Pane> }:"",
                                ]} />
                          </div>
                    )
                  }
              }
            }
              if(node.page05 === "Test page modular | Tabs vertical "){
                for(let pro in node.page20) {
                  if(Object.keys(node.page20[pro]).length > 1){
                    let myclassnme = "buttonpad"
                    if(node.page20[pro].block15150.cssClassName === "Quote background blue"){
                      myclassnme = "bluebackgrnd buttonpad";
                    }else if(node.page20[pro].block15150.cssClassName === "Quote background red"){
                      myclassnme = "redbackgrnd buttonpad";
                    }
                    return(
                      <div>
                        <Tab className="tabpadding" menu={{ secondary: true, vertical:true, pointing: true }} panes={ [
                                  { menuItem: node.page20[pro].block1505, render: () => <Tab.Pane  attached={false}>{node.page20[pro].block1510}
                                                <div className="buttonpad"><Image src={node.page20[pro].block1515} size='medium' wrapped /></div>
                                                <div className="buttonpad"><Image src={node.page20[pro].block1525.url} size='medium' wrapped /></div>
                                              {node.page20[pro].block15135? <div  className={myclassnme}><Message>
                                                <Message.Header className="colorquote">{node.page20[pro].block15145}</Message.Header>
                                              </Message></div>:""}
                                                </Tab.Pane>},
                                  {menuItem: node.page20[pro].block1565, render: () => <Tab.Pane attached={false}>{node.page20[pro].block1570}
                                                <div className="buttonpad"><Image src={node.page20[pro].block1550} size='medium' wrapped /></div>
                                                <div className="buttonpad"><Image src={node.page20[pro].block1555.url} size='medium' wrapped /></div>
                                                </Tab.Pane>},node.page20[pro].block1560 ?
                                  { menuItem: node.page20[pro].block1540, render: () => <Tab.Pane attached={false}>{node.page20[pro].block1545}
                                                <div className="buttonpad"><Image src={node.page20[pro].block1575} size='medium' wrapped /></div>
                                                  <div className="buttonpad"><Image src={node.page20[pro].block1580.url} size='medium' wrapped /></div>
                                                </Tab.Pane> }:"",node.page20[pro].block1585?
                                  { menuItem: node.page20[pro].block1590, render: () => <Tab.Pane attached={false}>{node.page20[pro].block1595}
                                                  <div className="buttonpad"><Image src={node.page20[pro].block15100} size='medium' wrapped /></div>
                                                  <div className="buttonpad"><Image src={node.page20[pro].block15105.url} size='medium' wrapped /></div>
                                                </Tab.Pane> }:"",node.page20[pro].block15110?
                                  { menuItem: node.page20[pro].block15115, render: () => <Tab.Pane attached={false}>{node.page20[pro].block15120}
                                                  <div className="buttonpad"><Image src={node.page20[pro].block15125} size='medium' wrapped /></div>
                                                  <div className="buttonpad"><Image src={node.page20[pro].block15130.url} size='medium' wrapped /></div>
                                                </Tab.Pane> }:"",
                                ]} />
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
