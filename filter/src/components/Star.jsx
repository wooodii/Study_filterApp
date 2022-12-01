import { useEffect, useState } from "react";
import { HiStar } from "react-icons/hi";
import '../css/Star.css';

const Star = (props) => {
    const {setCount, setCountStarResult} = props;

    // action  : event
    // datastate 
    // dataset : setCountResult

    const [star, setStar] = useState([
        { gradeId : 1, grade : 1 },
        { gradeId : 2, grade : 2 },
        { gradeId : 3, grade : 3 },
        { gradeId : 4, grade : 4 },
        { gradeId : 5, grade : 5 }
    ])

    const starIcon = <HiStar />
    const [click, setClick] = useState([false, false, false, false, false]);
    
    // 처음 countStar 초기값이 없다면 0 설정
    const [countStar, setCountStar] = useState(setCount ? setCount : 0);

    const starClick = (e, index) => {
        e.preventDefault();
        let clickState = [...click];

        for (let i =0; i<5; i++) {
            if(i <= index) clickState[i] = true;
            else clickState[i] = false; 
        }
        setClick(clickState);

        // props로 받아온 setCountStarResult
        if(!setCountStarResult){
            setCountStarResult(countStar);
        }

    }
    
    // useEffect로 
    useEffect(() => {      
        let clickState = [...click];
        for(let i =0; i<setCount; i++){
            clickState[i] = true;
        }
        setClick(clickState);
    }, [])

    console.log(countStar);

    return (
        <div>            
            <button value="click1" onClick={(e) => {starClick(e, 0); countStar(setCountStar(star[0].grade));}}
            className={click[0] ? "starColor" : "starColorNull"}>{starIcon}</button>
            <button onClick={(e) => {starClick(e, 1); countStar(setCountStar(star[1].grade));}}
            className={click[1] ? "starColor" : "starColorNull"}>{starIcon}</button>
            <button onClick={(e) => {starClick(e, 2); countStar(setCountStar(star[2].grade));}}
            className={click[2] ? "starColor" : "starColorNull"}>{starIcon}</button>
            <button  onClick={(e) => {starClick(e, 3); countStar(setCountStar(star[3].grade));}}
            className={click[3] ? "starColor" : "starColorNull"}> {starIcon}</button>
            <button onClick={(e) => {starClick(e, 4); countStar(setCountStar(star[4].grade));}}
            className={click[4] ? "starColor" : "starColorNull"}>{starIcon}</button>
            <span style={{marginLeft : "1em", fontSize : "0.8em"}} countStar={countStar} setCountStar={setCountStar}> 
                    {countStar} / 5 </span > 
        </div>
    );
}

export default Star;