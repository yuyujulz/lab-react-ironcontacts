
import './App.css';
import peopleContacts from './contacts.json'
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(peopleContacts);


  //3 iteration 
  const deleteContact = (contactId) => {
    const filteredContact = contacts.filter((people) => {
      return people._id !== contactId;
    });
    setContacts(filteredContact);
  };

  

  
  return (
    
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {contacts.map((people) => {
          return(
            <tr>

            <td><img src = {people.pictureUrl} className= "pic"/></td>
            <td>{people.name}</td>
            <td>{people.popularity}</td>
            <td></td>
            </tr>


          )
        })}
      </table>
    </div>
  );
}

export default App;
