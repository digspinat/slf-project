import * as React from "react";
import {
  Tab,Icon,Header,Button,Segment,Accordion,Grid,Card,Image,Message
} from "semantic-ui-react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/Layout.js"

const Pages = ({data}) => {
  const myData = data.allDatoCmsPage.edges[0].node.page20;
  // console.log(myData);
  let horiz=true;
  if(data.allDatoCmsPage.edges[0].node.page05 == "Test page modular | Tabs horizontal no images")
  {
       horiz=true;
  }
  else if(data.allDatoCmsPage.edges[0].node.page05 == "Test page modular | Tabs vertical"){
        horiz=false;
  }
  const mapQuote = myData.map((data) => {
    if("block5005" in data){
      return (
        <div className="buttonpad">
          <div className="buttonpad">
              <Message>
              <Message.Header className="colorquote">{data.block5005}</Message.Header>
              </Message>
          </div>
        </div>
      )
    }
  });
  const mapQuotelink = myData.map((data) => {
    if("block4505" in data){
      return (
        <div className="buttonpad">
          <div className="buttonpad">
            <Message>
            <Message.Header className="colorquote">{data.block4515}</Message.Header>
            </Message>
          </div>
        </div>
      )
    }
  });
  const mapQuoteheaderdecription = myData.map((data) => {
    if("block02505" in data){
            let size="";
            if(data.block2555 == "Large"){
                size="large";
            }else if(data.block2555 == "Medium")
            {
              size="medium";
            }else if (data.block2555 == "Huge") {
              size="larger";
            }else {
              size="small";
            }
              return (
                <div className="buttonpad">
                  <div className="buttonpad">
                      {data.block02505 ?
                      <Header as={data.block2540} attached>
                        {data.block2510}
                        </Header>:""}
                      {data.block2525 ?
                      <Header as={data.block2550} attached>
                            {data.block2520}
                            </Header>:""}
                      {data.block2530 ?
                      <Segment  className={size} attached>
                      {data.block2535}
                          </Segment>:""}
                    </div>
                </div>
              )
    }
  });
  let checkGrid = false;
  let fii = 0;
  const mapQuoteFeature = myData.map((data,index) => {
         if("block3005" in data){
           if(data.block30120.cssClassName == "Feature group 2 in a row")
              {
                 checkGrid = true;
                 fii++;
                 if(fii<=2)
                 {
                   return (
                     <Grid.Column>
                       <Header > {data.block3010}</Header>
                       <p> {data.block3015}</p>
                     </Grid.Column>
                   )
               }
            }
          }
  });
  let checkGrid4 = false;
  let fi = 0;
  const mapQuoteFeature4 = myData.map((data,index) => {
         if("block3005" in data){
           if(data.block30120.cssClassName == "Feature group 4 in a row"){
              checkGrid4 = true;
              fi++;
              if(fi<=4){
                return (
                  <Grid.Column>
                  <Header > {data.block3010}</Header>
                  <p> {data.block3015}</p>
                  </Grid.Column>
                )
              }

            }
          }
  });
  let checkcolunm = false;
  const mapQuoteFeatureclm = myData.map((data,index) => {
         if("block3005" in data){
           if(data.block30120.cssClassName == "Feature group 2 in column" || data.block30120.cssClassName == "Feature single" )
              {
                checkcolunm = true;
                  return (
                    <Grid celled>
                      <Grid.Row>
                        <Grid.Column>
                        <Header > {data.block3010}</Header>
                        <p> {data.block3015}</p>
                         </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  )
            }
          }
  });
  const mapQuoteimage = myData.map((data) => {
    if("block03505" in data){
      return (
        <div className="buttonpad">
          <div className="buttonpad">
                <Image  size="small" src={data.block3510.url}/>
           </div>
        </div>
      )
    }
  });
  const mapQuotetab = myData.map((data) => {
    if("block1505" in data){
              let myclassnme = "buttonpad"
              if(data.block15150.cssClassName === "Quote background blue"){
                myclassnme = "bluebackgrnd buttonpad";
              }else if(data.block15150.cssClassName === "Quote background red"){
                myclassnme = "redbackgrnd buttonpad";
              }
              let urlblock1525 = false;
              if(data.block1525 != null){
                urlblock1525 = true;
              }
              let urlblock1555 = false;
              if(data.block1555 != null){
                urlblock1555 = true;
              }
              let urlblock1580 = false;
              if(data.block1580 != null){
                urlblock1580 = true;
              }
              let urlblock15105 = false;
              if(data.block15105 != null){
                urlblock15105 = true;
              }
              let urlblock15130 = false;
              if(data.block15130 != null){
                urlblock15130 = true;
              }
              return (
                <div>
                {horiz ?
                <Tab className="tabpadding" menu={{ secondary: true, pointing: true }} panes={ [
                          { menuItem: data.block1505, render: () => <Tab.Pane  attached={false}>{data.block1510}
                                      {data.block1515 ? <div className="buttonpad"><Image src={data.block1515} size='medium' wrapped /></div>: ""}
                                      {urlblock1525  ? <div className="buttonpad"><Image src={data.block1525.url} size='medium' wrapped /></div>:""}
                                      {data.block15135? <div  className={myclassnme}><Message>
                                        <Message.Header className="colorquote">{data.block15145}</Message.Header>
                                      </Message></div>:""}
                                        </Tab.Pane>},
                          {menuItem: data.block1565, render: () => <Tab.Pane attached={false}>{data.block1570}
                                         {data.block1550 ? <div className="buttonpad"><Image src={data.block1550} size='medium' wrapped /></div>:""}
                                        {urlblock1555 ? <div className="buttonpad"><Image src={data.block1555.url} size='medium' wrapped /></div>:""}
                                        </Tab.Pane>},data.block1560 ?
                          { menuItem: data.block1540, render: () => <Tab.Pane attached={false}>{data.block1545}
                                        {data.block1575 ? <div className="buttonpad"><Image src={data.block1575} size='medium' wrapped /></div>:""}
                                          {urlblock1580 ?<div className="buttonpad"><Image src={data.block1580.url} size='medium' wrapped /></div>:""}
                                        </Tab.Pane> }:"",data.block1585?
                          { menuItem: data.block1590, render: () => <Tab.Pane attached={false}>{data.block1595}
                                            {data.block15100 ?<div className="buttonpad"><Image src={data.block15100} size='medium' wrapped /></div>:""}
                                            {urlblock15105 ?<div className="buttonpad"><Image src={data.block15105.url} size='medium' wrapped /></div>:""}
                                        </Tab.Pane> }:"",data.block15110?
                          { menuItem: data.block15115, render: () => <Tab.Pane attached={false}>{data.block15120}
                                          {data.block15125 ? <div className="buttonpad"><Image src={data.block15125} size='medium' wrapped /></div> : ""}
                                          {urlblock15130 ?<div className="buttonpad"><Image src={data.block15130.url} size='medium' wrapped /></div>:""}
                                        </Tab.Pane> }:"",
                        ]} />:
                        <Tab className="tabpadding" menu={{ secondary: true, vertical:true,pointing: true }} panes={ [
                          { menuItem: data.block1505, render: () => <Tab.Pane  attached={false}>{data.block1510}
                                      {data.block1515 ? <div className="buttonpad"><Image src={data.block1515} size='medium' wrapped /></div>: ""}
                                      {urlblock1525 ? <div className="buttonpad"><Image src={data.block1525.url} size='medium' wrapped /></div>:""}
                                      {data.block15135? <div  className={myclassnme}><Message>
                                        <Message.Header className="colorquote">{data.block15145}</Message.Header>
                                      </Message></div>:""}
                                        </Tab.Pane>},
                          {menuItem: data.block1540, render: () => <Tab.Pane attached={false}>{data.block1545}
                                         {data.block1550 ? <div className="buttonpad"><Image src={data.block1550} size='medium' wrapped /></div>:""}
                                        {urlblock1555 ? <div className="buttonpad"><Image src={data.block1555.url} size='medium' wrapped /></div>:""}
                                        </Tab.Pane>},data.block1560 ?
                          { menuItem: data.block1565, render: () => <Tab.Pane attached={false}>{data.block1570}
                                        {data.block1575 ? <div className="buttonpad"><Image src={data.block1575} size='medium' wrapped /></div>:""}
                                          {urlblock1580 ?<div className="buttonpad"><Image src={data.block1580.url} size='medium' wrapped /></div>:""}
                                        </Tab.Pane> }:"",data.block1585?
                          { menuItem: data.block1590, render: () => <Tab.Pane attached={false}>{data.block1595}
                                            {data.block15100 ?<div className="buttonpad"><Image src={data.block15100} size='medium' wrapped /></div>:""}
                                            {urlblock15105 ?<div className="buttonpad"><Image src={data.block15105.url} size='medium' wrapped /></div>:""}
                                        </Tab.Pane> }:"",data.block15110?
                          { menuItem: data.block15115, render: () => <Tab.Pane attached={false}>{data.block15120}
                                          {data.block15125 ? <div className="buttonpad"><Image src={data.block15125} size='medium' wrapped /></div> : ""}
                                          {urlblock15130 ?<div className="buttonpad"><Image src={data.block15130.url} size='medium' wrapped /></div>:""}
                                        </Tab.Pane> }:"",
                                ]} />}
                                </div>
                              )
              }
  });
  const mapQuotehowto = myData.map((data) => {
        if("block4005" in data){
            let classhead = "customheadStyleHead";
            if(data.block4080.cssClassName == "Header Bold and Text  Normal")
            {
              classhead = "customheadStyleHead"
            }else if(data.block4080.cssClassName == "Header Normal Text Bold"){
              classhead = "customheadStyleDesc"
            }
            return (
              <div className="buttonpad">
                <div className="buttonpad">
                 <div className={classhead}>
                        <Header as="h3">{data.block4005}</Header>
                        <Card fluid
                                header={data.block4010}
                                description={data.block4015}/>
                         {data.block4020 ?
                        <Card  fluid
                                header={data.bloc1k4025}
                                description={data.block4030}/>:""}
                        {data.block4035 ?
                        <Card  fluid
                               header={data.block4040}
                               description={data.block4045}/>:""}
                        {data.block4050 ?
                        <Card  fluid
                                header={data.block4055}
                                description={data.block4060}/>:""}
                       {data.block4065 ?
                        <Card  fluid
                               header={data.block4070}
                               description={data.block4075}/>:""}
                    </div>
                </div>
              </div>
            )
      }
  });
  const mapQuoteaccordn = myData.map((data) => {
    if("block0505" in data){
      return (
        <div className="buttonpad">
          <div className="buttonpad">
                <Accordion defaultActiveIndex={0} panels={[
                  {
                    key: 'what-is-dog',
                    title: data.block0505,
                    content: [
                       data.block0510,
                    ].join(' '),
                  },
                  {
                    key: 'kinds-of-dogs',
                    title: data.block0520,
                    content: [
                      data.block0525
                    ].join(' '),
                  },
                  {
                    key: 'acquire-dog',
                    title: data.block0560,
                    content: [
                      data.block0565
                    ].join(' '),
                  },
                  {
                    key: 'acquire-dog',
                    title: data.block0580,
                    content: [
                      data.block0590
                    ].join(' '),
                  },
                  {
                    key: 'acquire-dog',
                    title: data.block05100,
                    content: [
                      data.block05105
                    ].join(' '),
                  },
                ]} fluid styled/>
            </div>
        </div>
      )
    }
  });
  return (
      <Layout>
                  <div className="contentWrapper">
                    <Segment vertical  style={{paddingLeft: 10}}>
                               {mapQuotetab}
                                {mapQuote}
                                {mapQuotelink}
                                {mapQuoteaccordn}
                                {mapQuoteheaderdecription}
                                {mapQuotehowto}
                                {checkGrid ?
                                  <Grid divided='vertically' celled>
                                  <Grid.Row columns='equal'>
                                  {mapQuoteFeature}
                                  </Grid.Row>
                                  </Grid>
                                  :
                                  ""
                                }
                                {checkGrid4 ?
                                  <Grid divided='vertically' celled>
                                  <Grid.Row columns='equal'>
                                  {mapQuoteFeature4}
                                  </Grid.Row>
                                  </Grid>
                                  :
                                  ""
                                }
                                {checkcolunm ?
                                    mapQuoteFeatureclm:
                                    ""}
                                {mapQuoteimage}
                      </Segment>
                  </div>
      </Layout>
  )
}
export default Pages
export const query = graphql`
 query($slug:String!) {
   allDatoCmsPage(filter: {page30: {eq: $slug}, locale: { eq: "nl"}}){
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
           ... on DatoCmsBlock50{
                block5005
                block5010
                {
                  cssClassName
                }
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
                       block30120{
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
