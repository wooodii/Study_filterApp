import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext(); 
const DataProvider = ({children}, props) => {
    const [user, setUser] = useState({name : "sss",  review :  null, likelist : []});
    
    const [star, setStar] = useState([
        { gradeId : 1, grade : 1 },
        { gradeId : 2, grade : 2 },
        { gradeId : 3, grade : 3 },
        { gradeId : 4, grade : 4 },
        { gradeId : 5, grade : 5 }
    ])

    const [reviewBtn, setReviewBtn] = useState([
        { btnId : 1, ChooseBtn : "효과없어요" }, 
        { btnId : 1, ChooseBtn : "효과없어요" }, 
        { btnId : 1, ChooseBtn : "효과없어요" }, 
        { btnId : 1, ChooseBtn : "효과없어요" }, 
        { btnId : 1, ChooseBtn : "효과없어요" }, 
        { btnId : 1, ChooseBtn : "효과없어요" }, 
        { btnId : 1, ChooseBtn : "효과없어요" }, 
        { btnId : 1, ChooseBtn : "효과없어요" }, 
    ])

    const [comments, setComments] = useState([
        {
            commentId : 1, 
            name : "user",
            comemnt : "comment"
        }
    ]);

    const [commentCount, setCommentCount] = useState(2); 
    
    const value = {
        state :  {user, comments, commentCount, star},
        action :  {setUser, setComments, setCommentCount, setStar}
    }

    return <DataContext.Provider value={value} > {children} </DataContext.Provider>
}

export{DataProvider}
export default DataContext;