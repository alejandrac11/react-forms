import React from 'react';
import './passengers.styles.css';


const Passengers = (props) => {
    console.log(props);
    return(
        <React.Fragment key="1">
            {props.passengers.map((passenger,index)=>{
                return(
                    <React.Fragment key={passenger.id}>
                    <tr>
                        <td className = "Passenger">
                            {passenger.name}
                        </td>
                        <td className = "Passenger">
                            {passenger.nationality}
                        </td>
                        <td className = "Passenger">
                            {passenger.final_destination}
                        </td>
                    </tr>
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );

        
        
    
}

export default Passengers;