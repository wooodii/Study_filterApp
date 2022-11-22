import './App.css';
import Home from './page/Home';
import {Route, Routes} from 'react-router-dom';
import Layout from './page/Layout';
import MedicalCourse from './page/MedicalCourse';
import Area from './page/Area';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/medicalCourse' element={<MedicalCourse/>}/>
          <Route path='/area' element={<Area/>}/>
        </Route>  
      </Routes>
        
    </div>
  );
}

export default App;
