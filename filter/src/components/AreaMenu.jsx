import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hospital from '../json/Hospital.json';
import SearchHosptial from './SearchHospital';

const AreaMenu = ({setArea}) => {
    return (
        <>
        <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          지역
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-2" onClick={() => { setArea("서울")
              Hospital.filter((value) => {
                if (value.주소.includes("서울")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }>서울특별시</Dropdown.Item>

          <Dropdown.Item href="#/action-3" onClick={() => { setArea("부산")
              Hospital.filter((value) => {
                if (value.주소.includes("부산")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }>부산광역시</Dropdown.Item>

          <Dropdown.Item href="#/action-4" onClick={() => { setArea("대구")
              Hospital.filter((value) => {
                if (value.주소.includes("대구")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } } >대구광역시</Dropdown.Item>
          <Dropdown.Item href="#/action-4" onClick={() => { setArea("인천")
              Hospital.filter((value) => {
                if (value.주소.includes("인천")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }>인천광역시</Dropdown.Item>
          <Dropdown.Item href="#/action-4" onClick={() => { setArea("광주")
              Hospital.filter((value) => {
                if (value.주소.includes("광주")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }>광주광역시</Dropdown.Item>
          <Dropdown.Item href="#/action-4" onClick={() => { setArea("대전")
              Hospital.filter((value) => {
                if (value.주소.includes("대전")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }>대전광역시</Dropdown.Item>
          <Dropdown.Item href="#/action-4" onClick={() => { setArea("울산")
              Hospital.filter((value) => {
                if (value.주소.includes("울산")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }>울산광역시</Dropdown.Item>
          <Dropdown.Item href="#/action-4" onClick={() => { setArea("세종")
              Hospital.filter((value) => {
                if (value.주소.includes("세종")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }>세종특별자치시</Dropdown.Item>
          <Dropdown.Item href="#/action-4" onClick={() => { setArea("경기")
              Hospital.filter((value) => {
                if (value.주소.includes("경기")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }>경기도</Dropdown.Item>
          <Dropdown.Item href="#/action-4" onClick={() => { setArea("강원")
              Hospital.filter((value) => {
                if (value.주소.includes("강원")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }>강원도</Dropdown.Item>
          <Dropdown.Item href="#/action-4" onClick={() => { setArea("충청북도")
              Hospital.filter((value) => {
                if (value.주소.includes("충청북도")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }>충청북도</Dropdown.Item>
          <Dropdown.Item href="#/action-4" onClick={() => { setArea("충청남도")
              Hospital.filter((value) => {
                if (value.주소.includes("충청남도")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }>충청남도</Dropdown.Item>
          <Dropdown.Item href="#/action-4" onClick={() => { setArea("전라북도")
              Hospital.filter((value) => {
                if (value.주소.includes("전라북도")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }>전라북도</Dropdown.Item>
          <Dropdown.Item href="#/action-4" onClick={() => { setArea("전라남도")
              Hospital.filter((value) => {
                if (value.주소.includes("전라남도")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }>전라남도</Dropdown.Item>
          <Dropdown.Item href="#/action-4" onClick={() => { setArea("경상북도")
              Hospital.filter((value) => {
                if (value.주소.includes("경상북도")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }>경상북도</Dropdown.Item>
          <Dropdown.Item href="#/action-4" onClick={() => { setArea("경상남도")
              Hospital.filter((value) => {
                if (value.주소.includes("경상남도")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }>경상남도</Dropdown.Item>
          <Dropdown.Item href="#/action-4" onClick={() => { setArea("제주특별자치도")
              Hospital.filter((value) => {
                if (value.주소.includes("제주특별자치도")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } }>제주특별자치도</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </>
    );
}

export default AreaMenu;