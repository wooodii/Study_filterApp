import { useContext } from "react";
import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Star from "../components/Star";
import DataContext from "../Context/DataContext";
import WriteReview from "./WriteReview";

const Review = (props) => {
    const data = useContext(DataContext);
    
    const {countStar} = props; 
    console.log(countStar);

    return (
        <>
         <div style={{ width: "390px", height: "844px", border: "2px solid black"}}>
            <Row style={{marginTop : "2vh"}}> 
                <Col xs={3} style={{marginBottom : "2vh"}}><h2>리뷰</h2></Col>
                <Col> <WriteReview/> </Col>
            </Row>
            <Row>
                <div> 이 병원을 {}가 재방문하고 싶어해요 </div>
            </Row>
            <Row style = {{ marginBottom : " 5vh"}}>
                <Row style={{backgroundColor : "lightgray", borderRadius : "10px", width : "360px", marginLeft : "3vw"}}>
                    <Col xs={6}>
                        평점 / 별점 
                    </Col>
                    <Col xs={3} style={{display : "block" }}>  
                        <Row> 매우만족 </Row> 
                        <Row> 만족 </Row> 
                        <Row> 보통 </Row> 
                        <Row> 별로 </Row> 
                        <Row> 매우별로 </Row> 
                    </Col>
                    <Col xs={3}>
                        dsfd
                    </Col>
                </Row>
            </Row>
            <Row style={{backgroundColor : "lightgray", borderRadius : "10px", width : "340px", marginLeft : "3vw"}}>
                <Row >
                    <Star setCount={data.state.comments[0].countStar} />
                </Row>
                <Row>방문 미인증 | 재방문 할래요</Row>
                <Row>
                    <textarea name="" id="" cols="10" rows="5" value={data.state.comments[0].comment}></textarea>
                </Row>
            </Row>
        </div>
        </>
    );
}

export default Review;