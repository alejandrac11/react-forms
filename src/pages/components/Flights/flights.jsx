import React from 'react';
import Airplanes from '../AirPlanes/airplanes';
import Passengers from '../Passengers/passengers';
import './flights.styles.css';
let airport = {
    flights: [
        {
            id: "7890653", 
            destination: "London/Heathrow", 
            condition: "On Time",
            airplane: {
                    id: "1",
                    airplane_type: "AirBus A320",
                    airline: "British Airways",
            },
            passengers:[
                {
                    id: "P1",
                    name: "Juan A Cardona Molina",
                    nationality: "Colombian",
                    final_destination: "London/Heathrow"
                },
                {
                    id: "P2",
                    name: "Evan Collins",
                    nationality: "Turkish",
                    final_destination: "London/Heathrow" 
                },
                {
                    id: "P3",
                    name: "Brittany Montgomery",
                    nationality: "Deutch",
                    final_destination: "London/Heathrow" 
                },
                {
                    id: "P4",
                    name: "Janne Fitzgerald",
                    nationality: "American",
                    final_destination: "London/Heathrow" 
                },
                {
                    id: "P5",
                    name: "Blake Colby",
                    nationality: "French",
                    final_destination: "London/Heathrow"
                }
            ]
        },
        {
            id: "653218", 
            destination: "República Dominicana/RPAirport",
            condition: "On Time",
             airplane: {
                    id:"2",
                    airplane_type: "Boeing 747",
                    airline: "LATAM"
             },
             passengers:[
                 {
                     id: "Pas1",
                     name: "Albeiro Cuesta Mesa",
                     nationality:"Mexican",
                     final_destination:"República Dominicana/RPAirport"
                 },
                 {
                    id: "Pas2",
                     name: "Adrew Carrington",
                     nationality:"Canadian",
                     final_destination:"República Dominicana/RPAirport" 
                 },
                 {
                    id: "Pas3",
                     name: "Julian Rivera",
                     nationality:"Swedish",
                     final_destination:"República Dominicana/RPAirport"   
                 },
                 {
                    id: "Pas4",
                     name: "Nicoletta Poscioli",
                     nationality:"Italian",
                     final_destination:"República Dominicana/RPAirport"  
                 },
                 {
                    id: "Pas5",
                    name: "Sammy Parker",
                    nationality:"Mexican",
                    final_destination:"República Dominicana/RPAirport" 
                 }
             ]

        },
        {
            id: "6709843", 
            destination: "Denmark-Copenhage/Kastrup", 
            condition: "Delayed",
            airplane: {
                    id: "3",
                    airplane_type: "Boeing 789",
                    airline: "Turkish Airlines",
            },
            passengers:[
                {
                    id: "Pas1",
                    name: "Alejandra Cuesta Arteaga",
                    nationality: "Colombian",
                    final_destination: "Denmark-Copenhage/Kastrup"
                },
                {
                    id: "Pas2",
                    name: "Lawren Stuart",
                    nationality: "Australian",
                    final_destination: "Denmark-Copenhage/Kastrup" 
                }
            ]
        },
        
    ]
}

const Flights = (props) => {
    return (
        <div>
             <table>
                 <tbody>
                     {

                        airport.flights.map((flight,index)=>{
                            return (
                                <React.Fragment key={flight.id}>
                                <tr>
                                    <td>
                                        {flight.destination}
                                    </td>
                                    <td>
                                        {flight.condition}
                                    </td>
                                </tr>
                                <Airplanes  airplane = {flight.airplane}/>
                                <Passengers passengers = {flight.passengers}/>
                                </React.Fragment>
                            );
                            

                        })

                     }
                 </tbody>
             </table>
        </div>
    );
}

export default Flights;