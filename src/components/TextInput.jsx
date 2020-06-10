import React, { Component } from 'react';

class TextInput extends Component {

    render() { 
        const {handleChange, item, handleSubmit} = this.props;
        return (  
            <div className="col col-sm-10 col-md-8 mx-auto mt-4">
            <form onSubmit = {handleSubmit}>
            <h5 className="text-dark text-center text-capitalize">What do you want to do Today?</h5>
            <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-secondary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input className="form-control text-capitalize" type="text" value={item} onChange={handleChange}></input>
            <button type="submit" 
            className="btn btn-block mt-2 text-capitalize" 
            style ={{ backgroundColor :"#f54291" }}
            >add items
            </button>
            </div>
            </form>
            </div>
        );
    }
}
 
export default TextInput;