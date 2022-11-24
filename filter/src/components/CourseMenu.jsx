import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hospital from '../json/Hospital.json';
import SearchHosptial from './SearchHospital';

const CourseMenu = ({setKind}) => {
    const click = () => {
      console.log(
        Hospital.filter((value) => {
          if (value.진료과목내용명.includes("신경외과")) {
            return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
          }
      }))
    }

    return (
        <div>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            진료과목
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#/action-2">내과</Dropdown.Item>


            <Dropdown.Item href = "#/action-3" onClick={() => { setKind("신경과")
              Hospital.filter((value) => {
                if (value.진료과목내용명.includes("신경과")) {
                  return <SearchHosptial 사업장={value.사업장} 전화번호={value.전화번호} 주소={value.주소} />;
                }
            });
            } } > 신경과 </Dropdown.Item>


            <Dropdown.Item href="#/action-4">외과</Dropdown.Item>
            <Dropdown.Item href="#/action-4">정형외과</Dropdown.Item>
            <Dropdown.Item href="#/action-4">신경외과</Dropdown.Item>
            <Dropdown.Item href="#/action-4">마취통증의학과</Dropdown.Item>
            <Dropdown.Item href="#/action-4">피부과</Dropdown.Item>
            <Dropdown.Item href="#/action-4">재활의학과</Dropdown.Item>
            <Dropdown.Item href="#/action-4">한방내과</Dropdown.Item>
            <Dropdown.Item href="#/action-4">한방재활의학과</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <button onClick={click}>누르기 </button>
        </div>
    );
}

export default CourseMenu;