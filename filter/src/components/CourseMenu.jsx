import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hospital from '../json/Hospital.json';
import SearchHosptial from './SearchHospital';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const CourseMenu = ({kind, setKind, setSearch, setArea}) => {
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const offset = (page -1) * limit;
    
    return (
        <div>
        <Dropdown onClick={() => {setSearch(null); setArea(null);}}>
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" >
            {kind ? kind : "진료과목"}
          </Dropdown.Toggle>
          
          <Dropdown.Menu variant="dark">
            <Dropdown.Item 
            onClick={() => {setKind("내과")
              Hospital.filter((value) => {
                if (value.진료과목내용명.includes("내과")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            }).slice(offset, offset + limit);
            } }>내과</Dropdown.Item>

            <Dropdown.Item  onClick={() => { setKind("신경과")
              Hospital.filter((value) => {
                if (value.진료과목내용명.includes("신경과")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } } > 신경과 </Dropdown.Item>
            <Dropdown.Item href="#/action-4" onClick={() => { setKind("외과")
              Hospital.filter((value) => {
                if (value.진료과목내용명.includes("외과")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }  >외과</Dropdown.Item>
            <Dropdown.Item href="#/action-4" onClick={() => { setKind("정형외과")
              Hospital.filter((value) => {
                if (value.진료과목내용명.includes("정형외과")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } } >정형외과</Dropdown.Item>
            <Dropdown.Item href="#/action-4" onClick={() => { setKind("신경외과")
              Hospital.filter((value) => {
                if (value.진료과목내용명.includes("신경외과")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } } >신경외과</Dropdown.Item>
            <Dropdown.Item href="#/action-4" onClick={() => { setKind("마취통증의학과")
              Hospital.filter((value) => {
                if (value.진료과목내용명.includes("마취통증의학과")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } } >마취통증의학과</Dropdown.Item>
            <Dropdown.Item href="#/action-4" onClick={() => { setKind("피부과")
              Hospital.filter((value) => {
                if (value.진료과목내용명.includes("피부과")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } } >피부과</Dropdown.Item>
            <Dropdown.Item href="#/action-4" onClick={() => { setKind("재활의학과")
              Hospital.filter((value) => {
                if (value.진료과목내용명.includes("재활의학과")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } } >재활의학과</Dropdown.Item>
            <Dropdown.Item href="#/action-4" onClick={() => { setKind("한방내과")
              Hospital.filter((value) => {
                if (value.진료과목내용명.includes("한방내과")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } } >한방내과</Dropdown.Item>
            <Dropdown.Item href="#/action-4" onClick={() => { setKind("한방재활의학과")
              Hospital.filter((value) => {
                if (value.진료과목내용명.includes("한방재활의학과")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } } >한방재활의학과</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>

        </div>
    );
}

export default CourseMenu;