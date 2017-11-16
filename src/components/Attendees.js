import  React from "react";
import RegForm from './RegForm';

class Attendees extends React.Component{
  render(){
    return(
      <div>
        <h2>Register for The Event Here or Sing In</h2>
        <RegForm addReg={this.props.addReg}/>

      </div>

    )
  }
}
export default Attendees;
