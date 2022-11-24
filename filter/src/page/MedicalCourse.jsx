import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AreaMenu from '../components/AreaMenu';
import CourseMenu from '../components/CourseMenu';
import SearchHosptial from '../components/SearchHospital';
import Hospital from '../json/Hospital.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const MedicalCourse = () => {
    const [search, setSearch] = useState();
    const [searchFin, setSearchFin] = useState();
    const [kind, setKind] = useState();
    
    const navigate = useNavigate();
    const medicalCourse = () => {navigate('/medicalCourse')}
    const area = () => {navigate('/area')}
    return (
        <div style={{ width: "390px", height: "844px", border: "2px solid black" }}>
            <div style={{display : "flex", marginTop : "5vh"}}>
            <CourseMenu setKind={setKind}/><AreaMenu/>    
            <InputGroup className="mb-3">
            <Form.Control
            onChange={e => {setSearch(e.target.value)}}
            placeholder="병원/진료과 검색" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </InputGroup>
            </div>
        
        <div style={{margin: "4vh", width: "300px", height: "600px", border: "2px solid black"}}>
           {Hospital.filter((value) => {
            if(searchFin == ""){
                return value
            }else if(value.사업장.includes(search)){
                return value
            }else if(value.진료과목내용명.includes(kind)){
                return value
            }
           }).map((index) => {
                return <SearchHosptial 사업장={index.사업장} 전화번호 = {index.전화번호} 주소={index.주소} />
            })}
        </div> 
        

                
        </div>
        
    );
}
export default MedicalCourse;