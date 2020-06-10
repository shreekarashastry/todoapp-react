import React, {Component} from 'react';
import './App.css';
import TextInput from './components/TextInput';
import Lists from './components/Lists';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {     
    id:uuidv4(),
    item:"" ,
    items:[]
  }

  handleChange = e =>{
    this.setState({
      item: e.target.value
    });
  }

  handleSubmit = e =>{
    e.preventDefault();

    const newItem = {
      id : this.state.id,
      title : this.state.item
    }

    const updatedItems = this.state.item ? [...this.state.items, newItem]: this.state.items;

    this.setState({
      items:updatedItems,
      item:"",
      id:uuidv4()
    });

  }

  handleClear = () =>{
      this.setState({
        items:[]
      });
  }

  handleDelete = id =>{
    const filteredList = this.state.items.filter(item=> item.id !== id);
    this.setState({
      items:filteredList
    });
  }

  handleFinished = id =>{
    const filteredList = this.state.items.filter(item=> item.id !== id);
    let selectedItem = this.state.items.find(item=> item.id === id);

    selectedItem.title = <del>{selectedItem.title}</del>;

    const changedList = [...filteredList, selectedItem]

    this.setState({
      items:changedList,
    });
  }

  render() { 
    return ( 
      <React.Fragment>
      <NavBar />
      <div className="row">
        <div className="col-6">
        <TextInput 
        handleChange = {this.handleChange}
        handleSubmit = {this.handleSubmit}
        item = {this.state.item}
        />
        </div>
        <div className="col-6">
        <Lists items={this.state.items}
          handleClear = {this.handleClear}
          handleDelete = {this.handleDelete}
          handleFinished = {this.handleFinished}
        />
        </div>
      </div>
    </React.Fragment>
     );
  }
}
 
export default App;
