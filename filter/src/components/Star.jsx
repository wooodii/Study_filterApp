import { useState } from "react";
import { HiStar } from "react-icons/hi";
import '../css/Star.css';

const Star = () => {
    const star = <HiStar />
    const [click, setClick] = useState([false, false, false, false, false]);
    const [countStar, setCountStar] = useState(0);

    

    const starClick = (e, index) => {
        e.preventDefault();
        let clickState = [...click];

        for (let i =0; i<5; i++) {
            if(i <= index) clickState[i] = true;
            else clickState[i] = false; 
        }
        setClick(clickState);
    }
    
    console.log(countStar);

    
    return (
        <div> 
            <button value="click1" onClick={(e) => {starClick(e, 0); countStar(setCountStar(1.0));}}
            className={click[0] ? "starColor" : "starColorNull"}>{star}</button>
            <button onClick={(e) => {starClick(e, 1); countStar(setCountStar(2.0));}}
            className={click[1] ? "starColor" : "starColorNull"}>{star}</button>
            <button onClick={(e) => {starClick(e, 2); countStar(setCountStar(3.0));}}
            className={click[2] ? "starColor" : "starColorNull"}>{star}</button>
            <button  onClick={(e) => {starClick(e, 3); countStar(setCountStar(4.0));}}
            className={click[3] ? "starColor" : "starColorNull"}> {star}</button>
            <button onClick={(e) => {starClick(e, 4); countStar(setCountStar(5.0));}}
            className={click[4] ? "starColor" : "starColorNull"}>{star}</button>

            <span style={{marginLeft : "1em", fontSize : "0.8em"}} countStar={countStar}> {countStar} / 5</span > 
        </div>
    );
}

export default Star;