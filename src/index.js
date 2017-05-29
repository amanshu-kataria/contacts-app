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
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

function NavBar(){
  return(
    <h3 className="navTitle">Contacts</h3>
  );
}

class SideBar extends React.Component{
  getChildContext() {
   return { muiTheme: getMuiTheme(baseTheme) };
 }
  render(){
    const dividerStyle={
      marginLeft: "0px"
    };

    const style={
      textAlign: 'left',
      paddingLeft: '20px',
    };

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

class ModalForm extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const target=e.target;
    this.props.contactData.onValueChange(target.name,target.value);
  }

  render(){
    const formStyle={
      width: '82%',
      marginLeft: "10px"
    };

    const targetProp=this.props.contactData;
    return(
      <div>
        <TextField name="name" type="text" hintText="Name" value={targetProp.name} onChange={this.handleChange} style={formStyle}/><br />
        <TextField name="company" type="text" hintText="Company" value={targetProp.company} onChange={this.handleChange} style={formStyle}/><br />
        <TextField name="email" type="email" hintText="Email" value={targetProp.email} onChange={this.handleChange} style={formStyle} /><br />
        <TextField name="phone" type="number" hintText="Phone" value={targetProp.phone} onChange={this.handleChange} style={formStyle} /><br />
      </div>
    );
  }
}

class AddContact extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        open: false,
      };
      this.handleOpen=this.handleOpen.bind(this);
      this.handleClose=this.handleClose.bind(this);
    }
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

      const isSaveEnabled=this.props.name && this.props.email &&this.props.phone && this.props.phone;

      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />,
        <FlatButton
          label="Save"
          primary={true}
          disabled={!isSaveEnabled}
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
              <ModalForm contactData={this.props} />
            </Dialog>
        </div>
      );
    }
}

class Contacts extends React.Component{
  constructor(props){
    super(props);
    this.state={
      rows: []
    };
    this.addRow=this.addRow.bind(this);
  }
  addRow() {
       var nextState = this.state;
       nextState.rows.push(this.props.name,this.props.email,this.props.phone,this.props.company);
       this.setState(nextState);
   }

  render(){
    return(
      <Table className="contact">
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
            <TableHeaderColumn>Phone</TableHeaderColumn>
            <TableHeaderColumn>Company</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
        </TableBody>
      </Table>
    );
  }
}

class Main extends React.Component{
  constructor(){
    super();
    this.state={
      name:"",
      company:"",
      email:"",
      phone:""
    };
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(name,value){
    this.setState({[name]: value});
  }

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
            <AddContact onValueChange={this.handleChange} name={this.state.name} company={this.state.company} email={this.state.email} phone={this.state.phone}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
