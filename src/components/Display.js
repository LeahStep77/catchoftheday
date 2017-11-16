import  React from "react";
 import {Days, Hours, Minutes, Seconds} from 'react-countdowntimer';

class Display extends React.Component{
  render() {
    return (
    <div className="xyz">
    	<td>
    		<tr>
    			<td>Days</td>
    			<td><Days deadline="December 27,2017"/></td>
    		</tr>
    		<tr>
    			<td>Hours</td>
    			<td><Hours deadline="December 27,2017"/></td>
    		</tr>
    		<tr>
    			<td>Minutes</td>
    			<td><Minutes deadline="December 27,2017"/></td>
    		</tr>
    		<tr>
    			<td>Seconds</td>
    			<td><Seconds deadline="December 27,2017"/></td>
    		</tr>
    	</td>    
    </div>
    )
  }
}
export default Display;
