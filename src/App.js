import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [item, setItem] = useState([]);
  return (
    <>
    <h1 style={{textAlign:"center"}}>Inventory Tracker</h1>
    <Form setItem={setItem}/>
    <List item={item} setItem={setItem}/>
    </>
  );
}

export default App;
