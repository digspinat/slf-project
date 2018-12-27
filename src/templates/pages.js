import * as React from "react";
import {
  Tab,Icon,Header,Button,Segment,Accordion,Grid,Card,Image,Message
} from "semantic-ui-react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/Layout.js"

const Pages = ({data}) => {
  const myData = data.allDatoCmsPage.edges[0].node.page20;
  return (
      <Layout>
        {data.allDatoCmsPage.edges.map(({node}) => {
            for (var variable in node.page20) {
              console.log(node.page20[variable]);
              if("block0505" in node.page20[variable]){
                return (
                  <div className="contentWrapper">
                    <Segment vertical  style={{paddingLeft: 10}}>
                          <Accordion defaultActiveIndex={0} panels={[
                            {
                              key: 'what-is-dog',
                              title: node.page20[variable].block0505,
                              content: [
                                 node.page20[variable].block0510,
                              ].join(' '),
                            },
                            {
                              key: 'kinds-of-dogs',
                              title: node.page20[variable].block0520,
                              content: [
                                node.page20[variable].block0525
                              ].join(' '),
                            },
                            {
                              key: 'acquire-dog',
                              title: node.page20[variable].block0560,
                              content: [
                                node.page20[variable].block0565
                              ].join(' '),
                            },
                            {
                              key: 'acquire-dog',
                              title: node.page20[variable].block0580,
                              content: [
                                node.page20[variable].block0590
                              ].join(' '),
                            },
                            {
                              key: 'acquire-dog',
                              title: node.page20[variable].block05100,
                              content: [
                                node.page20[variable].block05105
                              ].join(' '),
                            },
                          ]} fluid styled/>

                      </Segment>
                  </div>
                )
              }
              if("block3005" in node.page20[variable])
              {
                return(
                  <div className="contentWrapper">
                    <Segment vertical  style={{paddingLeft: 10}}>
                    <div className="buttonpad">
                        <Grid divided='vertically' celled>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <Header > {node.page20[variable].block3010}  </Header>
                                    <p> {node.page20[variable].block3015}</p>
                                </Grid.Column>
                                <Grid.Column>
                                  <Header > {node.page20[variable].block3010}</Header>
                                  <p> {node.page20[variable].block3015}</p>
                                </Grid.Column>
                              </Grid.Row>
                         </Grid>
                    </div>
                      </Segment>
                  </div>
                )
              }
              if("block2505" in node.page20[variable])
              {
                let size="";
                if(node.page20[variable].block2555 == "Large"){
                    size="large";
                }else if(node.page20[variable].block2555 == "Medium")
                {
                  size="medium";
                }else if (node.page20[variable].block2555 == "Huge") {
                  size="larger";
                }else {
                  size="small";
                }
                return(
                  <div className="contentWrapper">
                    <Segment vertical  style={{paddingLeft: 10}}>
                    <div >
                          {node.page20[variable].block02505 ?
                          <Header as={node.page20[variable].block2540} attached>
                            {node.page20[variable].block2510}
                            </Header>:""}
                          {node.page20[variable].block2525 ?
                          <Header as={node.page20[variable].block2550} attached>
                                {node.page20[variable].block2520}
                                </Header>:""}
                          {node.page20[variable].block2530 ?
                          <Segment  className={size} attached>
                          {node.page20[variable].block2535}
                              </Segment>:""}
                    </div>
                    </Segment>
                </div>
                )
              }
              if("block4005" in node.page20[variable])
              {
                let classhead = "customheadStyleHead";
                if(node.page20[variable].block4080.cssClassName == "Header Bold and Text  Normal")
                {
                  classhead = "customheadStyleHead"
                }else if(node.page20[variable].block4080.cssClassName == "Header Normal Text Bold"){
                  classhead = "customheadStyleDesc"
                }
                return(
                  <div className="contentWrapper">
                    <Segment vertical  style={{paddinvariablegLeft: 10}}>
                    <div className="buttonpad">
                    <div className={classhead}>
                      <Header as="h3">{node.page20[variable].block4005}</Header>
                      <Card fluid
                              header={node.page20[variable].block4010}
                              description={node.page20[variable].block4015}/>
                       {node.page20[variable].block4020 ?
                      <Card  fluid
                              header={node.page20[variable].bloc1k4025}
                              description={node.page20[variable].block4030}/>:""}
                      {node.page20[variable].block4035 ?
                      <Card  fluid
                             header={node.page20[variable].block4040}
                             description={node.page20[variable].block4045}/>:""}
                      {node.page20[variable].block4050 ?
                      <Card  fluid
                              header={node.page20[variable].block4055}
                              description={node.page20[variable].block4060}/>:""}
                     {node.page20[variable].block4065 ?
                      <Card  fluid
                             header={node.page20[variable].block4070}
                             description={node.page20[variable].block4075}/>:""}
                    </div>
                    </div>
                      </Segment>
                  </div>
                )
              }

              if("block3505" in node.page20[variable])
              {
                return(
                  <div className="contentWrapper">
                    <Segment vertical  style={{paddingLeft: 10}}>
                    <div className="buttonpad">
                        <Grid divided='vertically' celled>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                  <Image src={node.page20[variable].block3510.url} />
                                </Grid.Column>
                                <Grid.Column>
                                    {node.page20[variable].block02505 ?
                                  <Header > {node.page20[variable].block2510}  </Header>:""}
                                  {node.page20[variable].block2525 ?
                                  <Header >   {node.page20[variable].block2520}</Header>:""}
                                  {node.page20[variable].block2530 ?
                                  <p> {node.page20[variable].block2535}</p>:""}
                                </Grid.Column>
                              </Grid.Row>
                         </Grid>
                    </div>
                      </Segment>
                  </div>
                )
              }

              if("block1505" in node.page20[variable])
              {
                let myclassnme = "buttonpad"
                if(node.page20[variable].block15150.cssClassName === "Quote background blue"){
                  myclassnme = "bluebackgrnd buttonpad";
                }else if(node.page20[variable].block15150.cssClassName === "Quote background red"){
                  myclassnme = "redbackgrnd buttonpad";
                }
                let horiz=true;
                if(node.page05 == "Test page modular | Tabs horizontal no images")
                {
                     horiz=true;
                }
                else if(node.page05 == "Test page modular | Tabs vertical"){
                      horiz=false;
                }
                return(
                  <div className="contentWrapper">
                    <Segment vertical  style={{paddingLeft: 10}}>
                    {horiz ?
                    <Tab className="tabpadding" menu={{ secondary: true, pointing: true }} panes={ [
                              { menuItem: node.page20[variable].block1505, render: () => <Tab.Pane  attached={false}>{node.page20[variable].block1510}
                                            <div className="buttonpad"><Image src={node.page20[variable].block1515} size='medium' wrapped /></div>
                                          <div className="buttonpad"><Image src={node.page20[variable].block1525.url} size='medium' wrapped /></div>
                                          {node.page20[variable].block15135? <div  className={myclassnme}><Message>
                                            <Message.Header className="colorquote">{node.page20[variable].block15145}</Message.Header>
                                          </Message></div>:""}
                                            </Tab.Pane>},
                              {menuItem: node.page20[variable].block1565, render: () => <Tab.Pane attached={false}>{node.page20[variable].block1570}
                                            <div className="buttonpad"><Image src={node.page20[variable].block1550} size='medium' wrapped /></div>
                                            <div className="buttonpad"><Image src={node.page20[variable].block1555.url} size='medium' wrapped /></div>
                                            </Tab.Pane>},node.page20[variable].block1560 ?
                              { menuItem: node.page20[variable].block1540, render: () => <Tab.Pane attached={false}>{node.page20[variable].block1545}
                                            <div className="buttonpad"><Image src={node.page20[variable].block1575} size='medium' wrapped /></div>
                                            <div className="buttonpad"><Image src={node.page20[variable].block1580.url} size='medium' wrapped /></div>
                                            </Tab.Pane> }:"",node.page20[variable].block1585?
                              { menuItem: node.page20[variable].block1590, render: () => <Tab.Pane attached={false}>{node.page20[variable].block1595}
                                              <div className="buttonpad"><Image src={node.page20[variable].block15100} size='medium' wrapped /></div>
                                              <div className="buttonpad"><Image src={node.page20[variable].block15105.url} size='medium' wrapped /></div>
                                            </Tab.Pane> }:"",node.page20[variable].block15110?
                              { menuItem: node.page20[variable].block15115, render: () => <Tab.Pane attached={false}>{node.page20[variable].block15120}
                                              <div className="buttonpad"><Image src={node.page20[variable].block15125} size='medium' wrapped /></div>
                                              <div className="buttonpad"><Image src={node.page20[variable].block15130.url} size='medium' wrapped /></div>
                                            </Tab.Pane> }:"",
                            ]} />:
                            <Tab className="tabpadding" menu={{ secondary: true, vertical:true,pointing: true }} panes={ [
                                      { menuItem: node.page20[variable].block1505, render: () => <Tab.Pane  attached={false}>{node.page20[variable].block1510}
                                                    <div className="buttonpad"><Image src={node.page20[variable].block1515} size='medium' wrapped /></div>
                                                  <div className="buttonpad"><Image src={node.page20[variable].block1525.url} size='medium' wrapped /></div>
                                                  {node.page20[variable].block15135? <div  className={myclassnme}><Message>
                                                    <Message.Header className="colorquote">{node.page20[variable].block15145}</Message.Header>
                                                  </Message></div>:""}
                                                    </Tab.Pane>},
                                      {menuItem: node.page20[variable].block1565, render: () => <Tab.Pane attached={false}>{node.page20[variable].block1570}
                                                    <div className="buttonpad"><Image src={node.page20[variable].block1550} size='medium' wrapped /></div>
                                                    <div className="buttonpad"><Image src={node.page20[variable].block1555.url} size='medium' wrapped /></div>
                                                    </Tab.Pane>},node.page20[variable].block1560 ?
                                      { menuItem: node.page20[variable].block1540, render: () => <Tab.Pane attached={false}>{node.page20[variable].block1545}
                                                    <div className="buttonpad"><Image src={node.page20[variable].block1575} size='medium' wrapped /></div>
                                                    <div className="buttonpad"><Image src={node.page20[variable].block1580.url} size='medium' wrapped /></div>
                                                    </Tab.Pane> }:"",node.page20[variable].block1585?
                                      { menuItem: node.page20[variable].block1590, render: () => <Tab.Pane attached={false}>{node.page20[variable].block1595}
                                                      <div className="buttonpad"><Image src={node.page20[variable].block15100} size='medium' wrapped /></div>
                                                      <div className="buttonpad"><Image src={node.page20[variable].block15105.url} size='medium' wrapped /></div>
                                                    </Tab.Pane> }:"",node.page20[variable].block15110?
                                      { menuItem: node.page20[variable].block15115, render: () => <Tab.Pane attached={false}>{node.page20[variable].block15120}
                                                      <div className="buttonpad"><Image src={node.page20[variable].block15125} size='medium' wrapped /></div>
                                                      <div className="buttonpad"><Image src={node.page20[variable].block15130.url} size='medium' wrapped /></div>
                                                    </Tab.Pane> }:"",
                                    ]} />}
                      </Segment>
                  </div>
                )
              }

              if("block3505" in node.page20[variable])
              {
                return(
                  <div className="contentWrapper">
                    <Segment vertical  style={{paddingLeft: 10}}>
                    <div className="buttonpad">
                            <Image src={node.page20[variable].block3510.url} />
                    </div>
                      </Segment>
                  </div>
                )
              }

              if("block4505" in node.page20[variable])
              {
                return(
                  <div className="contentWrapper">
                    <Segment vertical  style={{paddingLeft: 10}}>
                    <div className="buttonpad">
                          {node.page20[variable].block4515}
                    </div>
                      </Segment>
                  </div>
                )
              }
            }

        })}
      </Layout>
  )
}
export default Pages
export const query = graphql`
 query($slug:String!) {
   allDatoCmsPage(filter: {page30: {eq: $slug}, locale: { eq: "en"}}){
    edges{
      node{
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
`
