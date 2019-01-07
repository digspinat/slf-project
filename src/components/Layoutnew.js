import * as React from "react";
import PropTypes from 'prop-types'
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Responsive,
  Container,
  Dropdown
} from 'semantic-ui-react'
import Menu1 from "./Menu.js"
import Second from "./Second.js"
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import "../css/styles.css";
import { graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby";

const VerticalSidebar = ({ animation, direction, visible, data }) =>  (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsSidebar (filter: { locale: { eq: "nl"} }) {
          edges {
            node {
              sidebar05
              sidebar10 {
                ... on DatoCmsSidebar15 {

                  sidebar0510 {
                    ... on DatoCmsMenu {
                      id
                      menu05
                      menu30
                      menu10
                      menu15 {
                        page05
                        page30
                      }
                      menu105{
                        page05
                        page30
                      }
                      menu60{
                        page05
                        page30
                      }
                      menu110{
                        page05
                        page30
                      }
                      menu90{
                        page05
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
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Sidebar
          as={Menu}
          animation={animation}
          direction={direction}
          icon='labeled'
          inverted
          vertical
          visible={visible}
          width='thin'
        >
            <Menu.Item
              name='Home'
              as={Link}
              to="/"
            />
          {data.allDatoCmsSidebar.edges[0].node.sidebar10.map(({sidebar0510}) => {
            let menu1 = false;
            if(typeof sidebar0510.menu15 === "object"){
              menu1 = true;
            }
            return (
              <Dropdown item text={sidebar0510.menu30} key={sidebar0510.id}>
                <Dropdown.Menu>
                  {menu1 && sidebar0510.menu15.page30 ? <Dropdown.Item as={Link} to={sidebar0510.menu15.page30}>{sidebar0510.menu10}</Dropdown.Item> : ""}
                  {sidebar0510.menu35 && sidebar0510.menu105.page30 ? <Dropdown.Item as={Link} to={sidebar0510.menu105.page30}>{sidebar0510.menu40}</Dropdown.Item> : ""}
                  {sidebar0510.menu20 && sidebar0510.menu60.page30 ? <Dropdown.Item as={Link} to={sidebar0510.menu60.page30}>{sidebar0510.menu55}</Dropdown.Item> : ""}
                  {sidebar0510.menu70 && sidebar0510.menu110.page30 ? <Dropdown.Item as={Link} to={sidebar0510.menu110.page30}>{sidebar0510.menu85}</Dropdown.Item> : ""}
                  {sidebar0510.menu50 && sidebar0510.menu90.page30 ? <Dropdown.Item as={Link} to={sidebar0510.menu90.page30}>{sidebar0510.menu100}</Dropdown.Item> : ""}
                </Dropdown.Menu>
              </Dropdown>
            )
          })}
        </Sidebar>
      )
    }}
  />
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

export default class Layoutnew extends React.Component {
  state = {
    animation: 'overlay',
    direction: 'left',
    visible: this.props.sidebarvisible,
  }
  handleDirectionChange = direction => () => this.setState({ direction, visible: !this.state.visible })
  render() {
    return (
      <Container>
        <Sidebar.Pushable as={Segment}>
          <VerticalSidebar animation="push" direction="left" visible={this.state.visible} />
          <Sidebar.Pusher>
            <div style={{height:800}}>
              <Segment vertical textAlign="left" className="masthead">
                <Responsive><Menu1 /></Responsive>
              </Segment>
              <Responsive style={{marginTop: 50}} className="T2op">
                <Segment>
                  <Responsive>
                    <Button onClick={this.handleDirectionChange('top')}><Icon name='align justify' /></Button>
                  </Responsive>
                </Segment>
                <Segment style={{padding: 10}}>
                  <Responsive>
                    Hello
                    {this.props.children}
                  </Responsive>
                </Segment>
              </Responsive>
            </div>
            <Segment vertical style={{backgroundColor: "#0090e2",textAlign: "center",color: "white",height: 50}}>
              <Responsive>
                Powered with <Icon name='heart' style={{color: "red"}} />  by Superloopfiets
              </Responsive>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Container>
    );
  }
}

// const Layoutnew = ({ children }) => {
//   let state = {
//     animation: 'overlay',
//     direction: 'left',
//     dimmed: false,
//     visible: true,
//   }
//   return (
//     <Container>
//       <Sidebar.Pushable as={Segment}>
//         <VerticalSidebar animation="push" direction="left" visible={state.visible} />
//         <Sidebar.Pusher style={{height: 800}}>
//           <Segment vertical textAlign="left" className="masthead">
//             <Responsive><Menu1 /></Responsive>
//           </Segment>
//           <Responsive style={{marginTop: 50}} className="T2op">
//             <Segment>
//               <Responsive>
//                 <Button onClick={() => state.visible = false}><Icon name='align justify' /></Button>
//               </Responsive>
//             </Segment>
//             <Segment style={{padding: 10}}>
//               <Responsive>
//                 Hello
//                 {children}
//               </Responsive>
//             </Segment>
//           </Responsive>
//         </Sidebar.Pusher>
//       </Sidebar.Pushable>
//     </Container>
//   );
// };
