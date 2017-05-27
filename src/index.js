import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

function NavBar(){
  return(
    <h3 className="navTitle">Contacts</h3>
  );
}

const style={
  borderBottom: '1px solid gray',
  textAlign: 'left',
  paddingLeft: '20px',
};

class SideBar extends React.Component{
  getChildContext() {
   return { muiTheme: getMuiTheme(baseTheme) };
 }
  render(){
    return(
      <ul className="sideMenu">
      <li><FlatButton label="All Contacts" primary={true} fullWidth={true} style={style} /></li>
      <li><FlatButton label="Frequently Contacted" primary={true} fullWidth={true} style={style} /></li>
      <li><FlatButton label="Groups" primary={true} fullWidth={true} style={style} /></li>
      <li><FlatButton label="Settings" primary={true} fullWidth={true} style={style} /></li>
        <li><FlatButton label="Help" primary={true} fullWidth={true} style={style} /></li>
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

class Main extends React.Component{
  render(){
    return(
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
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
