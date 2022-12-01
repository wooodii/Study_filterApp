import MedicalCourse from "./MedicalCourse";
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import BtnClick from "./BtnClick";

const Home = () => {
  const navigate = useNavigate();
  const searchbtn = () =>  {
    navigate('/medicalCourse')
  }

  return (
    <div style={{ width: "390px", height: "844px", border: "2px solid black" }}>
        <div style={{margin: "5vh", display: "flex"}}>
        <input style={{width : "290px", height : "40px"}} placeholder="병원/진료과를 검색해보세요"type="text"/>
        <button style={{width : "60px", height : "45px"}} onClick={searchbtn}>검색</button>   
        </div>
    <div>
      사용자정보
    </div>

    <div>
      기온/날씨
    </div>
    
    <div>
      문진표 작성 버튼
    </div>

    <div style={{ 
      marginTop : "500px"
    }}> <Footer/></div>
    </div>

  );
};

export default Home;
