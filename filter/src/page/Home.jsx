import Area from "./Area";
import MedicalCourse from "./MedicalCourse";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const searchbtn = () =>  {
    navigate('/medicalCourse')
  }

  return (
    <div style={{ width: "390px", height: "844px", border: "2px solid black" }}>
        <div style={{margin: "5vh", display: "flex"}}>
        <input style={{width : "250px", height : "40px"}} placeholder="병원/진료과를 검색해보세요"type="text"/>
        <button style={{width : "45px", height : "45px"}} onClick={searchbtn}>검색</button>   
        </div>
    </div>
    
    
  );
};

export default Home;
