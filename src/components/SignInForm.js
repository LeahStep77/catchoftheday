import  React from "react";

class AddFishForm extends React.Component{
  createFish(event) {
    event.preventDefault();
    console.log("Gonna make some fish =)");
    const fish = {
      event: this.event.value,
      name: this.name.value,
      address: this.address.value,
      email: this.email.value,
      phone: this.phone.value,
    }
    this.props.addFish(fish);
    this.fishForm.reset();
  }
  render(){
    return(
      <form ref={(input)=> this.fishForm = input}    className="fish-edit" onSubmit={(e) => this.createFish(e)}>
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
export default AddFishForm;