import './App.css';
import Flights from './pages/components/Flights/flights';
import { useState } from "react";

function App() {
  const [flight, setFlight] = useState('7890653');
    const [passengerName, setPassengerName] = useState('');
    const [passengerNationality, setPassengerNationality] = useState('');
    
    const addPassenger = () => {
        console.log('Flight: ' + flight);
        console.log('Passenger Name: ' + passengerName);
        console.log('Passenger Nationality: ' + passengerNationality);
        
    }
  return (

    <div className="App">
      <label>Flight:</label>
      <select 
        value={flight} 
        onChange={(event)=> {setFlight(event.target.value)}} >
        <option value="7890653">LONDON</option>
        <option value="653218">REPUBLICA DOMINICANA</option>
         <option value="6709843">DENMARK</option>
      </select>
      <label>Passenger Name:</label>
      <input type='text' 
        value={passengerName} 
        onChange={(event)=> {setPassengerName(event.target.value)}} />

      <label>Passenger Nationality:</label>
      <input type='text' 
        value={passengerNationality} 
        onChange={(event)=> {setPassengerNationality(event.target.value)}} />

      <button type='button' onClick={addPassenger}>Add Passenger</button>


      <Flights/>
    </div>
  );
}

export default App;
