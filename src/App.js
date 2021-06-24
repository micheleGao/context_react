// import logo from './logo.svg';
import { useState, createContext } from 'react';
import './App.css';

import ComponentA from './components/ComponentA';

export const DataContext = createContext();
console.log(DataContext);
function App() {
  const [userName, setUserName] = useState('Michele');
  const [loggedIn, setLoggedIn]= useState(false)
  return (
    <DataContext.Provider value={{userName,setLoggedIn, loggedIn}}>
      <div>
        <h1>Learning React Context</h1>
        {loggedIn ? "Logged In" : "Logged Out"}
        <ComponentA />
      </div>
    </DataContext.Provider>
  );
}

export default App;
