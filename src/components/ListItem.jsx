import React, { Component } from 'react';

class ListItem extends Component {
    render() { 
        const {title, handleDelete, handleFinished} = this.props
        return (  
        <div class="col col-sm-6 mx-auto">
            <li className="list-group-item text-capitalize d-flex justify-content-between ">
                <h6>{title}</h6>
                <div>
                    <span onClick={handleFinished} className="mx-2" >                    
                        <i className="fas fa-pen" >

                        </i>
                    </span>
                    <span onClick={ handleDelete} className="mx-2" >
                        <i className="fas fa-trash " >

                        </i>
                    </span>
                </div>
            </li>
        </div>
        );
    }
}
 
export default ListItem;