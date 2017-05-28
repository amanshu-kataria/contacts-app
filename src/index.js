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
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

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
            muiTheme: React.PropTypes.object.isRequired
};

class Contacts extends React.Component{
  render(){
    return(
      <div className="contact">
      </div>
    );
  }
}

class ModalForm extends React.Component{
  constructor() {
    super();
    this.state={
      name: "",
      company: "",
      jobTitle: "",
      email: "",
      phone: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render(){
    const formStyle={
      width: '82%',
      marginLeft: "10px"
    };

    return(
      <div>
        <TextField name="name" type="text" hintText="Name" value={this.state.name} onChange={this.handleChange} style={formStyle}/><br />
        <TextField name="company" type="text" hintText="Company" value={this.state.company} onChange={this.handleChange} style={{width: '40%', marginLeft: "10px"}}/>
        <TextField name="jobTitle" type="text" hintText="Job Title" value={this.state.jobTitle} onChange={this.handleChange} style={{width: '40%', marginLeft: "10px"}} /><br />
        <TextField name="email" type="email" hintText="Email" value={this.state.email} onChange={this.handleChange} style={formStyle} /><br />
        <TextField name="phone" type="number" hintText="Phone" value={this.state.phone} onChange={this.handleChange} style={formStyle} /><br />
      </div>
    );
  }

}

class AddContact extends React.Component{
    state = {
      open: false,
    };

    handleOpen=()=>{
      this.setState({open: true});
    };

    handleClose=()=>{
      this.setState({open: false});
    };

    render(){
      const titleStyle={
        backgroundColor: '#EEEEEE'
      };

      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />,
        <FlatButton
          label="Save"
          primary={true}
          disabled={true}
          onClick={this.handleClose}
        />,
      ];
      return(
        <div>
          <FloatingActionButton id="addContactId" className="AddContactButton" onClick={this.handleOpen}>
            <ContentAdd />
          </FloatingActionButton>
          <Dialog
            title="Create contact"
            actions={actions}
            modal={true}
            titleStyle={titleStyle}
            open={this.state.open} >
              <ModalForm />
            </Dialog>
        </div>
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
