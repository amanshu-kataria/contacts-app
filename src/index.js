import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function NavBar(){
  return(
    <h3 className="navTitle">Contacts</h3>
  );
}

class Main extends React.Component{
  render(){
    return(
      <div>
        <div className="navBar">
          <NavBar />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
