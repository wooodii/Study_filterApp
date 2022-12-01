import { useContext } from "react";
import { useState } from "react";
import DataContext from "../Context/DataContext";
import {Form} from "react-bootstrap";

const CommentInput = () => {
    const [textInput, setTextInput] = useState("");

    return (
        <div>
            <Form.Control 
            // 값을 보낸다?
            setTextInput = {setTextInput}
            onChange={(e) => {setTextInput(e.target.value)}} 
            type="text" style={{width : "90%"}} 
            placeholder = "20글자 이내로 작성해주세요"/>
        </div>
    );
}

export default CommentInput;