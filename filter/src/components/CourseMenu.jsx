import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hospital from '../json/Hospital.json';
import SearchHosptial from './SearchHospital';

const CourseMenu = () => {
    const click = () => {
      console.log(
        Hospital.filter((value) => (
            value.진료과목내용명.includes("내과"))))
    }

    return (
        <><>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            진료과목
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#/action-2">내과</Dropdown.Item>


            <Dropdown.Item href = "#/action-3" onClick={() => {
              Hospital.filter((value) => {
                if ((value.진료과목내용명.includes("내과")) == true) {
                  return <SearchHosptial 사업장={index.사업장} 전화번호={index.전화번호} 주소={index.주소} />;
                }
             });
            } } />신경과 </Dropdown.Item>


          <Dropdown.Item href="#/action-4">외과</Dropdown.Item>
          <Dropdown.Item href="#/action-4">정형외과</Dropdown.Item>
          <Dropdown.Item href="#/action-4">신경외과</Dropdown.Item>
          <Dropdown.Item href="#/action-4">마취통증의학과</Dropdown.Item>
          <Dropdown.Item href="#/action-4">피부과</Dropdown.Item>
          <Dropdown.Item href="#/action-4">재활의학과</Dropdown.Item>
          <Dropdown.Item href="#/action-4">한방내과</Dropdown.Item>
          <Dropdown.Item href="#/action-4">한방재활의학과</Dropdown.Item>
        </Dropdown.Menu>
      </><button onClick={click}>
          uuu</button></>
        </>
    );
}

export default CourseMenu;