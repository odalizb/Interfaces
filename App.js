import Header from './componentes/Header';
import Sidebar from './componentes/Sidebar';
import Footer from './componentes/Footer';
import Nav from './componentes/Nav';
import './App.css';

function App() {
  return (
    <div className="aplicacion-tareas">
      <Header />   
      <Nav/> 
      <div className='main-content'>
        <Sidebar />
      </div>
      <Footer/>
    </div>
  );
}

export default App;