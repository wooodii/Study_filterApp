import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Star from "../components/Star";

const Review = () => {
    return (
        <>
         <div style={{ width: "390px", height: "844px", border: "2px solid black" }}>
            <Row>
                <Col xs={3}><h2>리뷰</h2></Col>
                <Col> <button style={{marginLeft : "11em"}}> 리뷰작성 </button> </Col>
            </Row>
            <Row>
                <div> 이 병원을 {}가 재방문하고 싶어해요 </div>
            </Row>
            <Row style = {{ marginBottom : " 3vh"}}>
                <Row style={{backgroundColor : "lightgray", borderRadius : "10px", width : "360px", marginLeft : "2vw"}}>
                    <Col xs={5}>평점 / 별점 </Col>
                    <Col xs={4}>  
                        <div> 매우만족 </div> 
                        <div> 만족 </div> 
                        <div> 보통 </div> 
                        <div> 별로 </div> 
                        <div> 매우별로 </div> 
                    </Col>
                    <Col xs={3}>
                        dsfd
                    </Col>
                </Row>
            </Row>
            <Row style={{backgroundColor : "lightgray", borderRadius : "10px", width : "340px", marginLeft : "2vw"}}>
                <Row >
                    <Star/>
                </Row>
                <Row>방문 미인증 | 재방문 할래요</Row>
                <Row>
                    <textarea name="" id="" cols="10" rows="5"></textarea>
                </Row>
            </Row>
            
         </div>
        </>
    );
}

export default Review;