import  React from "react";
import AddFishForm from './AddFishForm';

class Inventory extends React.Component{
  render(){
    return(
      <div>
        <h2>Register for The Event Here or Sing In</h2>
        <AddFishForm addFish={this.props.addFish}/>
        
      </div>

    )
  }
}
export default Inventory;
