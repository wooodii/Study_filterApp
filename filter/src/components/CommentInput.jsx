import { useContext } from "react";
import { useState } from "react";
import DataContext from "../Context/DataContext";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

const CommentInput = () => {
    const [textInput, setTextInput] = useState("");
    const {action, state} = useContext(DataContext);    

    const addComment = () => {
        const comment = {
            commentId :  state.commentCount, 
            comment : textInput,
            name : (state.user ? state.user.name : "익명"),
            text : textInput
        }

        action.setAllComments(state.allComments.concat(comment))
        action.setCommentCount(state.commentCount + 1);
    }
    
    return (
        <div>
             <Form.Control onChange={(e) => {addComment(e.target.value)}} type="text" style={{width : "90%"}} 
             placeholder = "20글자 이내로 작성해주세요"/>

        </div>
    );
}

export default CommentInput;