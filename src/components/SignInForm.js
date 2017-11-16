import  React from "react";

class RegForm extends React.Component{
  createReg(event) {
    event.preventDefault();
    console.log("Gonna make some reg =)");
    const reg = {
      event: this.event.value,
      name: this.name.value,
      address: this.address.value,
      email: this.email.value,
      phone: this.phone.value,
    }
    this.props.addReg(reg);
    this.regForm.reset();
  }
  render(){
    return(
      <form ref={(input)=> this.regForm = input}    className="reg-edit" onSubmit={(e) => this.createReg(e)}>
      <select ref={(input) => this.event = input} >
        <option value="CarEvent1">CarEvent1</option>
        <option value="CarEvent2">CarEvent2</option>
        <option value="CarEvent3">CarEvent3</option>
      </select>

       <button type="submit">Sign In Here</button>
       <input ref={(input) => this.name = input} type="text" placeholder="Name" />
      <textarea ref={(input) => this.address = input} placeholder="Address"></textarea>
      <input ref={(input) => this.email = input} type="text" placeholder="Email" />
      <input ref={(input) => this.phone = input} type="text" placeholder="Phone" />
      <button type="submit">Register</button>

      </form>
    )
  }
}
export default RegForm;