
import './App.css';
import peopleContacts from './contacts.json'
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(peopleContacts);
  
  // function addRandom(){
  //   const randomContact = [...contacts]
  //   randomContact[Math.floor(Math.random()*randomContact.length)]
  // }

  //3 iteration 
  // const deleteContact = (contactId) => {
  //   const filteredContact = contacts.filter((people) => {
  //     return people._id !== contactId;
  //   });
  //   setContacts(filteredContact);
  // };
function sortContactsName() {
  const sortedContacts = [...contacts]
  sortedContacts.sort((a,b) => {
   if(a.name<b.name){
    return -1
   }else if(b.name<a.name){
    return 1
   }
   return 0
  })
  setContacts(sortedContacts)
}
function sortContactsRating() {
  const sortedContacts = [...contacts]
  sortedContacts.sort((a,b) => {
   if(a.popularity<b.popularity){
    return 1
   }else if(b.popularity<a.popularity){
    return -1
   }
   return 0
  })
  setContacts(sortedContacts)
}
  

  
  return (
    
    <div className="App">
      <h1>IronContacts</h1>
      <button className='btn'>Add Random Contact</button>
      <button className='btn' onClick={sortContactsName}>Sort by Name</button>
      <button className='btn' onClick={sortContactsRating}>Sort by Popularity</button>
      <table key={contacts._id}>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {contacts.slice(0, 5).map((people) => {
          
          return(
            <tr>

            <td><img src ={people.pictureUrl} className="pic" alt='celebrity'/></td>
            <td>{people.name}</td>
            <td>{people.popularity}</td>
 {/* iteration 2 */}
            {people.wonOscar && <td>🏆</td>}
            {!people.wonOscar && <td></td>}
           
            {people.wonEmmy && <td>🏆</td>}
            {!people.wonEmmy && <td></td>}
           
            
            <td><button className='btn'>Delete</button></td>
            </tr>


          )
        })}
      </table>
    </div>
  );
      }

export default App;
