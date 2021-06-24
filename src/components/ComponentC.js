import {useContext} from 'react';
import {DataContext} from '../App';

export default function ComponentC(){
    console.log(DataContext)
    const data = useContext(DataContext);
    console.log(data);
    return(
        <div>
            {/* only render when the h3 tag is logged in  */}
            {/* {data.loggedIn ? <h3>the user is: {data.userName}</h3> : ""} */}
            {data.loggedIn && <h3>the user is: {data.userName}</h3>}
            <button onClick={()=> data.setLoggedIn(true)}>LOG--IN</button>
        </div>
    )
}