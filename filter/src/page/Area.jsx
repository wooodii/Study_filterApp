import { useNavigate } from 'react-router-dom';
const Area = () => {
    const medicalCourse = () => {navigate('/medicalCourse')}
    const area = () => {navigate('/area')}
    const navigate = useNavigate('');

    return (
        <div style={{ width: "390px", height: "844px", border: "2px solid black" }}>
        <div style={{margin: "5vh", display: "flex"}}>
        <input style={{width : "250px", height : "40px"}} placeholder="병원/진료과를 검색해보세요"type="text"/>
        <button style={{width : "45px", height : "45px"}}>검색</button>   
        </div>
        
        <hr/>
        <div>
            <button  onClick={medicalCourse}>진료과목</button>
            <button onClick={area}>지역</button>
        </div>
        <hr/>

        <div style={{margin: "4vh", width: "300px", height: "600px", border: "2px solid black"}}>
        <div>

        </div>
    </div> 
    
    </div>
    );
}

export default Area;