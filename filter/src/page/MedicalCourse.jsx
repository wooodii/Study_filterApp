import { useNavigate } from 'react-router-dom';
import Course from '../components/Course';
import DDDDDD from '../components/Course';
const MedicalCourse = () => {
    const navigate = useNavigate();

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
            <Course/>

        </div> 
        </div>
        
    );
}
export default MedicalCourse;