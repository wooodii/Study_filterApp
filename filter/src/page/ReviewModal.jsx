import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Star from "../components/Star";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CommentInput from "../components/CommentInput";
import { Form } from "react-bootstrap";
import { useContext } from "react";
import DataContext from "../Context/DataContext";

const ReviewModal = () => {
  const data = useContext(DataContext);
  const [countStar, setCountStar] = useState();
  const [textInput, setTextInput] = useState();
  
  const [show, setShow] = useState(false);

  //useEffect로 버튼 누를때 값출력? 
  const AddReview = () => {
    data.action.setComments([...data.state.comments, {
      Id : 1, 
      name : "user",
      countStar : {setCountStar},
      btn1 : "효과좋아요",
      btn2 : "친절해요", 
      btn3 : "신규장비에요",
      review : {setTextInput},
      yesNo : "yes" 
  }]);

    setShow(false); 
    console.log(data.state.comments)
  };

  const handleShow = () => setShow(true);

  // 색상변경
  const [btnColor, setBtnColor] = useState(["blue"]);

  return (
    <div>
      <Button
        style={{ marginLeft: "10em" }}
        variant="primary"
        onClick={handleShow}>
        리뷰작성
      </Button>

      <Modal show={show} onHide={AddReview}>
        <Form>
          <Modal.Header>
            <div style={{ margin: "0 auto" }}>
              <Modal.Title>
                <Row>진료는 어떠셨어요?</Row>
                <Row>
                  <div>
                    <Star setCountStarResult={setCountStar} />
                  </div>
                </Row>
              </Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <div style={{ margin: "1vh" }}>
                <h5>진료 결과는 어때요?</h5>
                <Button onClick={() => {btnColor === "blue" ? setBtnColor("green") : setBtnColor("blue");}} 
                style={{ backgroundColor : btnColor, border : "none", marginRight: "0.5em"}}>효과없어요</Button>
                
                <Button onClick={() => {btnColor === "blue" ? setBtnColor("green") : setBtnColor("blue");}} 
                style={{backgroundColor : btnColor, marginRight: "0.5em" }}>보통이에요</Button>
                
                <Button onClick={() => {btnColor === "blue" ? setBtnColor("green") : setBtnColor("blue");}}  
                  style={{backgroundColor : btnColor, marginRight: "0.5em" }}>효과좋아요</Button>
              </div>
            </Row>

            <Row>
              <div style={{ margin: "1vh" }}>
                <h5>선생님은 친절하셨나요? </h5>
                <Button style={{ marginRight: "0.5em" }}>불친절해요</Button>
                <Button style={{ marginRight: "0.5em" }}>보통이에요</Button>
                <Button style={{ marginRight: "0.5em" }}>친절해요</Button>
              </div>
            </Row>

            <Row>
              <div style={{ margin: "1vh" }}>
                <h5> 시설 장비는 어떤가요?</h5>
                <Button style={{ marginRight: "0.5em" }}>노후되었어요</Button>
                <Button style={{ marginRight: "0.5em" }}>보통이에요</Button>
                <Button style={{ marginRight: "0em" }}>신규장비에요</Button>
              </div>
            </Row>

            <Row>
              <div style={{ margin: "3vh 1vh 1vh 1vh" }}>
                <h5>상세한 리뷰를 작성해주세요</h5>
                <CommentInput setTextInput={setTextInput}/>
              </div>
            </Row>

            <hr />
            <Row>
              <div style={{ margin: "1vh", display: "flex" }}>
                <Col xs={8}>
                  <h5>재방문 하시겠어요?</h5>
                </Col>
                <Col xs={1}>
                  <Button>네</Button>
                </Col>
                <Col xs={3}>
                  {" "}
                  <Button style={{ marginLeft: "0.5em" }}>아니오</Button>
                </Col>
              </div>
            </Row>
            <Row>
              <Button
                style={{ width: "90%" }}
                variant="secondary"
                onClick={AddReview}>
                작성완료
              </Button>
            </Row>
            <Row></Row>
          </Modal.Body>
        </Form>
      </Modal>
    </div>
  );
};

export default ReviewModal;
