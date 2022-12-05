import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AreaMenu from '../components/AreaMenu';
import CourseMenu from '../components/CourseMenu';
import SearchHosptial from '../components/SearchHospital';
import Hospital from '../json/Hospital.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Pagination from '../components/Pagenation';

const SearchBar = () => {
    const [search, setSearch] = useState();
    const [searchFin, setSearchFin] = useState();
    const [kind, setKind] = useState();
    const [area, setArea] = useState();

    // pagenation 
    // 페이지당 게시물 수 
    const [limit, setLimit] = useState(5);
    // 현 페이지 번호
    const [page, setPage] = useState(1);
    // 유저가 페이지당 표시할 개수
    const offset = (page -1) * limit; 
    
    return (
        <div style={{ width: "390px", height: "844px", border: "2px solid black" }}>
            <div style={{display : "flex", marginTop : "5vh"}}>
            <CourseMenu setKind={setKind} kind={kind} setArea={setArea} setSearch={setSearch}/>
            <AreaMenu area={area} setArea={setArea} setSearch={setSearch} setKind={setKind}/>    
            
            <InputGroup className="mb-3">
            <Form.Control
            onChange={e => {setSearch(e.target.value); setKind(null); setArea(null)}}
            placeholder="병원/진료과 검색" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </InputGroup>
            </div>
        
        <div style={{margin: "4vh", width: "300px", height: "550px", border: "2px solid black"}}>
           {Hospital.filter((value) => {
            if(searchFin == ""){
                return value
            }else if(value.사업장.includes(search)){
                return value
            }else if(value.진료과목내용명.includes(kind)){
                return value
            }else if(value.주소.includes(area)){
                return value
            }
           }).slice(offset, offset + limit).map((index) => {
                return <SearchHosptial 사업장={index.사업장} 전화번호 = {index.전화번호} 주소={index.주소} />
            })}
        </div> 
        <div>
            <Pagination
              total={Hospital.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
        </div>
        </div>
        
    );
}
export default SearchBar;