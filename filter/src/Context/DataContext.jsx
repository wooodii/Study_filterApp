import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext(); 
const DataProvider = ({children}) => {

    // 리뷰작성
    const [comments, setComments] = useState([
        {
            Id : 1, 
            name : "user",
            countStar : 3,
            btn1 : "효과좋아요",
            btn2 : "친절해요", 
            btn3 : "신규장비에요",
            review : "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            yesNo : "재방문할래요" 
        }
    ]);

    const [commentCount, setCommentCount] = useState(2); 

    // 재방문버튼
    const value = {
        state :  {comments, commentCount},
        action :  {setComments, setCommentCount}
    }

    return <DataContext.Provider value={value} > {children} </DataContext.Provider>
}

export {DataProvider}
export default DataContext;