import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';

function NavBar(){
  return(
    <h3 className="navTitle">Contacts</h3>
  );
}

const style={

  textAlign: 'left',
  paddingLeft: '20px',
};

const dividerStyle={
  marginLeft: "0px"
};

class SideBar extends React.Component{
  getChildContext() {
   return { muiTheme: getMuiTheme(baseTheme) };
 }
  render(){
    return(
      <ul className="sideMenu">
        <li><FlatButton label="All Contacts" primary={true} fullWidth={true} labelStyle={{textTransform: 'capitalize'}} style={style} /></li>
        <Divider inset={true} style={dividerStyle} />
        <li><FlatButton label="Frequently Contacted" primary={true} fullWidth={true} labelStyle={{textTransform: 'capitalize'}} style={style} /></li>
        <Divider inset={true} style={dividerStyle} />
        <li><FlatButton label="Groups" primary={true} fullWidth={true} labelStyle={{textTransform: 'capitalize'}} style={style} /></li>
        <Divider inset={true} style={dividerStyle} />
        <li><FlatButton label="Settings" primary={true} fullWidth={true} labelStyle={{textTransform: 'capitalize'}} style={style} /></li>
        <Divider inset={true} style={dividerStyle} />
        <li><FlatButton label="Help" primary={true} fullWidth={true} labelStyle={{textTransform: 'capitalize'}} style={style} /></li>
        <Divider inset={true} style={dividerStyle} />
      </ul>
    );
  }
}

SideBar.childContextTypes = {
            muiTheme: React.PropTypes.object.isRequired,
};

class Contacts extends React.Component{
  render(){
    return(
      <div className="contact">
      </div>
    );
  }
}

class AddContact extends React.Component{
    render(){
      return(
        <FloatingActionButton id="addContactId" className="AddContactButton">
          <ContentAdd />
        </FloatingActionButton>
      );
    }
}

class Main extends React.Component{
  render(){
    return(
      <MuiThemeProvider>
        <div>
          <div className="navBar">
            <NavBar />
          </div>
          <div>
            <div className="sideBar">
              <SideBar />
            </div>
            <div className="contactsList">
              <Contacts />
            </div>
          </div>
          <div>
            <AddContact />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
