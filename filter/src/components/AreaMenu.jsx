import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const AreaMenu = () => {
    return (
        <>
        <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          지역
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-2">대구광역시</Dropdown.Item>
          <Dropdown.Item href="#/action-3">강원도</Dropdown.Item>
          <Dropdown.Item href="#/action-4">경기도</Dropdown.Item>
          <Dropdown.Item href="#/action-4">광주광역시</Dropdown.Item>
          <Dropdown.Item href="#/action-4">전라북도</Dropdown.Item>
          <Dropdown.Item href="#/action-4">인천광역시</Dropdown.Item>
          <Dropdown.Item href="#/action-4">전라남도</Dropdown.Item>
          <Dropdown.Item href="#/action-4">울산광역시</Dropdown.Item>
          <Dropdown.Item href="#/action-4">대구광역시</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </>
    );
}

export default AreaMenu;