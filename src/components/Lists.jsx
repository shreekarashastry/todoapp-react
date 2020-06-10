import React, { Component } from 'react';
import ListItem from './ListItem';

class Lists extends Component {
    render() { 
        const {items, handleClear, handleDelete, handleFinished} = this.props;
        return(
            <React.Fragment>
        <ul className="list-group mt-4">
            <h5 className="text-capitalize text-center text-dark">Things to do Today</h5>
            <button onClick={handleClear} className="btn btn-danger  mx-auto text-capitalize my-2">ClearList</button>
            {items.map(item =>{
                return ( 
                        <ListItem 
                        key = {item.id}
                        title = {item.title}
                        handleDelete = {() => handleDelete(item.id)}
                        handleFinished = {() => handleFinished(item.id)}
                        />
            );
            })}

        
        </ul>
        </React.Fragment>
        );
    }
}
 
export default Lists;