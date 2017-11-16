import  React from "react";
import  Header from "./Header";
import  Order from "./Order";
import  Attendees from "./Attendees";
import  Reg from "./Reg";
import sampleReges from '../sample-regs';
import Display from "./Display"


class App extends React.Component{
  constructor(){
    super();
    this.addReg = this.addReg.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      regs: {},
      order: {}
    };
  }
  addReg(reg){
    const regs = {...this.state.regs};
    const timestamp = Date.now();
    regs[`reg-${timestamp}`] = reg;
    this.setState({ regs: regs });
  }

  loadSamples(){
    this.setState({
      regs: sampleReges
    });
  }

  render() {
      return (
        <div>
        <div>
        <Display />
         <Attendees addReg={this.addReg} loadSamples={this.loadSamples} />
         </div>

        <div className="landing-page">
          <div className="menu">
            <Header tagline="" />
            <ul className="list-of-regs">
              {
            Object
            .keys(this.state.regs)
            .map(key => <Reg key={key} details={this.state.regs[key]} />)
              }
            </ul>
          </div>
          <Order />

        </div>

        </div>
      )
  }
}
export default App;
