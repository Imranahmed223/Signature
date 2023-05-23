import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';

function App() {
  return (
    <div className='d-flex'>
      <Navbar/>
       <div className='w-100'><Content/></div>
    </div>
  );
}

export default App;
