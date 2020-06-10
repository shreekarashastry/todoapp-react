import React, { Component } from 'react';

class NavBar extends Component {
    state = {date: new Date()}
    render() { 
        return ( <nav
        className="navbar d-flex justify-content-between"
        style ={{ backgroundColor : "#4cd3c2"}}
        >
        <span className="navbar-brand mb-0 h1">
            <h3>Todo List App using REACT</h3>
        </span>
        <div className="date-icon">
            <h3 className="text-dark"> Today is {" "} 
            <h2><span className="text"  style ={{ color : "#0a97b0"}}>
            {this.state.date.toLocaleDateString()}  
            </span>
            </h2>
            </h3>
        </div>
      </nav>  
      );
    }
}
 
export default NavBar;