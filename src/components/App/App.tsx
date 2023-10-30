
import '../../styles/App.css';
import {Routes,Route, BrowserRouter} from "react-router-dom";
import DashBoard from '../dashboard/dashboard';
import CourseDetails from '../course-details/CourseDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<DashBoard/>}></Route>
      <Route path='/coursedetails/:id' element={<CourseDetails/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
