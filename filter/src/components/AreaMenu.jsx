import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hospital from '../json/Hospital.json';
import SearchHosptial from './SearchHospital';
import { useState } from 'react';
const AreaMenu = ({area, setKind, setArea, kind, setSearch}) => {

    return (
        <>
        <Dropdown onClick={() => {setSearch(null); setKind(null); }}>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          {area ? area : "지역"}
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item 
            onClick={() => { setArea("서울"); 
            }}>서울특별시</Dropdown.Item>
          <Dropdown.Item  onClick={() => { setArea("부산")
            } }>부산광역시</Dropdown.Item>
          <Dropdown.Item onClick={() => { setArea("대구")
            } } >대구광역시</Dropdown.Item>
          <Dropdown.Item  onClick={() => { setArea("인천")
            } }>인천광역시</Dropdown.Item>
          <Dropdown.Item  onClick={() => { setArea("광주")
            } }>광주광역시</Dropdown.Item>
          <Dropdown.Item onClick={() => { setArea("대전")
            } }>대전광역시</Dropdown.Item>
          <Dropdown.Item onClick={() => { setArea("울산")
            } }>울산광역시</Dropdown.Item>
          <Dropdown.Item onClick={() => { setArea("세종")
            } }>세종특별자치시</Dropdown.Item>
          <Dropdown.Item onClick={() => { setArea("경기")
            } }>경기도</Dropdown.Item>
          <Dropdown.Item onClick={() => { setArea("강원")
            } }>강원도</Dropdown.Item>
          <Dropdown.Item onClick={() => { setArea("충청북도")
            } }>충청북도</Dropdown.Item>
          <Dropdown.Item onClick={() => { setArea("충청남도")
            } }>충청남도</Dropdown.Item>
          <Dropdown.Item onClick={() => { setArea("전라북도")
            } }>전라북도</Dropdown.Item>
          <Dropdown.Item onClick={() => { setArea("전라남도")
            } }>전라남도</Dropdown.Item>
          <Dropdown.Item onClick={() => { setArea("경상북도")
            } }>경상북도</Dropdown.Item>
          <Dropdown.Item onClick={() => { setArea("경상남도")
            } }>경상남도</Dropdown.Item>
          <Dropdown.Item onClick={() => { setArea("제주특별자치도")
            } }>제주특별자치도</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </>
    );
}

export default AreaMenu;