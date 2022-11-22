import { useNavigate } from 'react-router-dom';
const Area = () => {

    const arealist = [
        "경상남도", "충청북도", "청주", "서울특별시", 
        "대구광역시", "강원도", "경기도", "광주광역시", 
        "전라북도", "경기도", "인천광역시", " 전라남도", 
        "울산광역시" ,"대구광역시", "경기도"
    ]
    
    const navigate = useNavigate('');
    return (

        <div style={{ width: "390px", height: "844px", border: "2px solid black" }}>
        <div style={{margin: "5vh", display: "flex"}}>
        <input style={{width : "250px", height : "40px"}} placeholder="병원/진료과를 검색해보세요"type="text"/>
        <button style={{width : "45px", height : "45px"}}>검색</button>   
        </div>
        
        <div>
          <button  onClick={ navigate('/medicalCourse')}>진료과목</button>
          <button onClick={navigate('/area')}>지역</button>
          <hr />
        </div>

        <div style={{margin: "4vh", width: "300px", height: "600px", border: "2px solid black"}}>

    </div> 
    
    </div>
    );
}

export default Area;