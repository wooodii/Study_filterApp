import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext(); 
const DataProvider = ({children}) => {
    const [comments, setComments] = useState([
        {
            commentId : 1, 
            name : "user",
            comemnt : "dddd"
        }
    ]);
    
    const value = {
        state :  {comments},
        action :  {setComments}
    }

    return <DataContext.Provider value={value} > {children} </DataContext.Provider>
    
}

export{DataProvider}
export default DataContext;