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

class AddContact extends React.Component{
    constructor(props) {
      super(props)
      this.state = { isModalOpen: true }
    }
    render(){
      return(
        <div>
          <FloatingActionButton id="addContactId" className="AddContactButton" onClick={()=>this.openModal()}>
            <ContentAdd />
          </FloatingActionButton>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <h1>Modal title</h1>
            <p>hello</p>
            <p><button onClick={() => this.closeModal()}>Close</button></p>
          </Modal>
        </div>
      );
    }
    openModal() {
      this.setState({ isModalOpen: true })
    }

    closeModal() {
      this.setState({ isModalOpen: false })
    }
}

  class Modal extends React.Component {
    render() {
      if (this.props.isOpen === false)
        return null;

      let modalStyle = {
        width: '300px',
        height: '300px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        background: '#fff'
      }

      let backdropStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '9998',
        background: 'rgba(0, 0, 0, 0.3)'
      }

      return (
        <div className={this.props.containerClassName}>
          <div className={this.props.className} style={modalStyle}>
            {this.props.children}
          </div>
          {!this.props.noBackdrop &&
              <div className={this.props.backdropClassName} style={backdropStyle}
                   onClick={e => this.close(e)}/>}
        </div>
      )
    }

    close(e) {
      e.preventDefault()

      if (this.props.onClose) {
        this.props.onClose()
      }
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
