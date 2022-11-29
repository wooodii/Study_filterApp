import './App.css';
import Home from './page/Home';
import {Route, Routes} from 'react-router-dom';
import Layout from './page/Layout';
import MedicalCourse from './page/MedicalCourse';
import { DataProvider } from './Context/DataContext';
import Footer from './components/Footer';
import Review from './page/Review';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/medicalCourse' element={<MedicalCourse/>}/> 
          <Route path='/footer' element={<Footer/>}/>
          <Route path ='/review' element = {<Review/> } />
          </Route>  
      </Routes>
     
      </DataProvider>
      
        
    </div>
  );
}

export default App;
