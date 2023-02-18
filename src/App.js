
import './App.css';
import peopleContacts from './contacts.json'
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(peopleContacts);
  const allContacts = peopleContacts.map((value) => {return value})
  return (
    
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <tr>
        <tb >
         
        </tb>
        </tr>
        <tr>
        <tb></tb>
        </tr>
        
      </table>
    </div>
  );
}

export default App;
