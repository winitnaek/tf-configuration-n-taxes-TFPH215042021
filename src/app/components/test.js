// // // import React from 'react';

// // // function Example() {
// // //   // Declare a new state variable, which we'll call "count"
// // //   const [count, setCount] = React.useState(0);

// // //   return (
// // //     <div>
// // //       <p>You clicked {count} times</p>
// // //       <button onClick={() => setCount(count + 1)}>
// // //         Click me
// // //       </button>
// // //     </div>
// // //   );
// // // }
// // // export default Example;

// // // // import * as React from 'react';
// // // // import * as ReactDOM from 'react-dom';
 
// // // // //import    //   jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
// // // // // import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
// // // // import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// // // // class Test extends React.PureComponent {
  
  

  
// // // //   constructor(props) {
// // // //     super(props);
// // // //     // this.myGrid = React.createRef()
 
// // // //     // const source = {
// // // //     //     localdata: [
// // // //     //       [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
// // // //     //       [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
// // // //     //       [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
// // // //     //     ],
// // // //     //     datafields: [
// // // //     //       { name: 'ContactName', type: 'string', map: '0' },
// // // //     //       { name: 'Title', type: 'string', map: '1' },
// // // //     //       { name: 'City', type: 'string', map: '2' },
// // // //     //       { name: 'Country', type: 'string', map: '3' }
// // // //     //     ],
// // // //     //     datatype: 'array'
// // // //     // };
    
// // // //     this.state = {
// // // //         dropdownOpen: false
// // // //     }
   
// // // //   }

// // // //   componentDidMount() {
    
   

// // // //   }

// // // //   toggle(){
// // // //     console.log('opening dropdown')
// // // //     this.setState({
// // // //       dropdownOpen: !this.state.dropdownOpen
// // // //     })
// // // //   }

  
  
// // // //    render() {
// // // //     return (
// // // //       <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
// // // //       <DropdownToggle caret>
// // // //         Dropdown
// // // //         </DropdownToggle>
// // // //       <DropdownMenu>
// // // //         <DropdownItem header>Header</DropdownItem>
// // // //         <DropdownItem>Some Action</DropdownItem>
// // // //         <DropdownItem disabled>Action (disabled)</DropdownItem>
// // // //         <DropdownItem divider />
// // // //         <DropdownItem>Foo Action</DropdownItem>
// // // //         <DropdownItem>Bar Action</DropdownItem>
// // // //         <DropdownItem>Quo Action</DropdownItem>
// // // //       </DropdownMenu>
// // // //     </Dropdown>
// // // //     );
// // // //   }
 

// // // // }
// // // // export default Test;

// // // // import React from 'react';
// // // // import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// // // // class Example extends React.Component {
// // // //   constructor(props) {
// // // //     super(props);

// // // //     this.toggle = this.toggle.bind(this);
// // // //     this.state = {
// // // //       dropdownOpen: true
// // // //     };
// // // //   }

 
  

// // // //   render() {
// // // //     return (
// // // // 			<div>
		
			
// // // //       <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
// // // //         <DropdownToggle caret>
// // // //           Dropdown
// // // //         </DropdownToggle>
// // // //         <DropdownMenu>
// // // //           <DropdownItem header>Header</DropdownItem>
// // // //           <DropdownItem>Some Action</DropdownItem>
// // // //           <DropdownItem disabled>Action (disabled)</DropdownItem>
// // // //           <DropdownItem divider />
// // // //           <DropdownItem>Foo Action</DropdownItem>
// // // //           <DropdownItem>Bar Action</DropdownItem>
// // // //           <DropdownItem>Quo Action</DropdownItem>
// // // //         </DropdownMenu>
// // // //       </Dropdown>
// // // //     </div>
// // // // 		);
// // // //   }
// // // // }

// // // // export default <Example />



// // import React from 'react';
// // import AppBar from '@material-ui/core/AppBar';
// // import CssBaseline from '@material-ui/core/CssBaseline';
// // import Divider from '@material-ui/core/Divider';
// // import Drawer from '@material-ui/core/Drawer';
// // import Hidden from '@material-ui/core/Hidden';
// // import IconButton from '@material-ui/core/IconButton';
// // import InboxIcon from '@material-ui/icons/MoveToInbox';
// // import List from '@material-ui/core/List';
// // import ListItem from '@material-ui/core/ListItem';
// // import ListItemIcon from '@material-ui/core/ListItemIcon';
// // import ListItemText from '@material-ui/core/ListItemText';
// // import MailIcon from '@material-ui/icons/Mail';
// // import MenuIcon from '@material-ui/icons/Menu';
// // import Toolbar from '@material-ui/core/Toolbar';
// // import Typography from '@material-ui/core/Typography';
// // import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

// // const drawerWidth = 240;

// // // 


// // class Test extends Component {
// //   constructor(props) {
// //     super(props);
// //     const { container } = props;
// //     const classes = useStyles();
// //     const theme = useTheme();
// //     this.state = {
// //       isOpen: false
// //       }
// //   }
// //   toggleDrawer() {
// //   this.setState({
// //     isOpen: !this.state.isOpen
// //   })
// //   }
// //   render() { 
// //     const drawer = (
// //       <div>
// //         <div className={classes.toolbar} />
// //         <Divider />
// //         <List>
// //           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
// //             <ListItem button key={text}>
// //               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
// //               <ListItemText primary={text} />
// //             </ListItem>
// //           ))}
// //         </List>
// //         <Divider />
// //         <List>
// //           {['All mail', 'Trash', 'Spam'].map((text, index) => (
// //             <ListItem button key={text}>
// //               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
// //               <ListItemText primary={text} />
// //             </ListItem>
// //           ))}
// //         </List>
// //       </div>
// //     );
// //     return ( 
// //       <div className={classes.root}>
// //       <CssBaseline />
// //       <AppBar position="fixed" className={classes.appBar}>
// //         <Toolbar>
// //           <IconButton
// //             color="inherit"
// //             aria-label="open drawer"
// //             edge="start"
// //             onClick={handleDrawerToggle}
// //             className={classes.menuButton}
// //           >
// //             <MenuIcon />
// //           </IconButton>
// //           <Typography variant="h6" noWrap>
// //             Responsive drawer
// //           </Typography>
// //         </Toolbar>
// //       </AppBar>
// //       <nav className={classes.drawer} aria-label="mailbox folders">
// //         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
// //         <Hidden smUp implementation="css">
// //           <Drawer
// //             container={container}
// //             variant="temporary"
// //             anchor={theme.direction === 'rtl' ? 'right' : 'left'}
// //             open={mobileOpen}
// //             onClose={handleDrawerToggle}
// //             classes={{
// //               paper: classes.drawerPaper,
// //             }}
// //             ModalProps={{
// //               keepMounted: true, // Better open performance on mobile.
// //             }}
// //           >
// //             {drawer}
// //           </Drawer>
// //         </Hidden>
// //         <Hidden xsDown implementation="css">
// //           <Drawer
// //             classes={{
// //               paper: classes.drawerPaper,
// //             }}
// //             variant="permanent"
// //             open
// //           >
// //             {drawer}
// //           </Drawer>
// //         </Hidden>
// //       </nav>
// //       <main className={classes.content}>
// //         <div className={classes.toolbar} />
// //         <Typography paragraph>
// //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
// //           ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
// //           facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
// //           gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
// //           donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
// //           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
// //           Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
// //           imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
// //           arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
// //           donec massa sapien faucibus et molestie ac.
// //         </Typography>
// //         <Typography paragraph>
// //           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
// //           facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
// //           tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
// //           consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
// //           vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
// //           hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
// //           tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
// //           nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
// //           accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
// //         </Typography>
// //       </main>
// //     </div>
 


// //      );
// //   }
// // }
 
// // export default Test;

// import React from 'react';
// import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

// const Example = () => (
//   <div>
//     <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
//       Toggle
//     </Button>
//     <UncontrolledCollapse toggler="#toggler">
//       <Card>
//         <CardBody>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
//           similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
//           dignissimos esse fuga! Minus, alias.
//         </CardBody>
//       </Card>
//     </UncontrolledCollapse>
//   </div>
// );

// export default Example;


import React from 'react';



import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Collapse, Navbar, Nav, NavLink, NavItem, NavbarBrand, NavbarToggler} from 'reactstrap'
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
            {/* Brandname */}
               <NavbarBrand href="/">
                Demo
            </NavbarBrand>
               {/* Add toggler to auto-collapse */}
          <NavbarToggler onClick={this.toggle} > Click Me </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>

              {/*Pull left */}
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/link/">
                        Left Nav Link
                    </NavLink>
                </NavItem>
            </Nav>

            {/* Pull right */}
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Bob
                </DropdownToggle>

                <DropdownMenu >
                  <DropdownItem>
                    Account
                  </DropdownItem>
                  <DropdownItem>
                    Settings
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}