import React from 'react';
import './airplanes.styles.css';


const Airplanes = (props) => {
    console.log(props);
    return(
        <React.Fragment key={props.airplane.id}>
            <tr>
                <td className="Airplanes">
                    {props.airplane.airplane_type}
                </td>
                <td className="Airplanes" colSpan = "2">
                    {props.airplane.airline}
                </td>
            </tr>
        </React.Fragment>
    ); 
        
        
    
}

export default Airplanes;