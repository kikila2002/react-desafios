import './App.css';
import Header from './components/Header/NavBar';
import Count from './components/ItemCount/Count';
import Productos from './components/Productos/Productos';




function App() {
  return (
    
    <div className="App">
      <Header/>
      <Productos/>
      <Count initial={1} stock={100} />
      <Count initial={1} stock={100} />
      <Count initial={1} stock={100} />
    </div>
  );
  
}

export default App;
