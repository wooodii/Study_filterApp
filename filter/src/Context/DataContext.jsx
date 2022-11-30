import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext(); 
const DataProvider = ({children}) => {
    const [user, setUser] = useState({name : "우디",  review :  null, likelist : []})
    const [comments, setComments] = useState([
        {
            commentId : 1, 
            name : "user",
            comemnt : "dddd"
        }
    ]);
    
    const value = {
        state :  {user, comments},
        action :  {setUser, setComments}
    }

    return <DataContext.Provider value={value} > {children} </DataContext.Provider>
    
}

export{DataProvider}
export default DataContext;