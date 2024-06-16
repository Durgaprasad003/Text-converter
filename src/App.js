import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
   <div>
   <Navbar/>
   <div className="container">
   <Textform heading="Enter the Text"/>
   </div>
   </div>
  );
}

export default App;
