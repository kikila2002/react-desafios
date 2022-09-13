import './Header.css';

function Header() {


    return (
      <header className="Header">
        <div className='divheader0'>
          <img className='headerlogo' src="./imagenes/logo-tiny.png" alt ="logo"></img>
        </div>
        <div className='divheader1'>
          <h1 className='divh1' >RAZOKA</h1>
          <h4>Lo mejor para tu mascota</h4>
        </div>
        <div className='divheader2'>
          <ul>
              <li> PRODUCTOS </li>
              <li> QUIENES SOMOS </li>
              <li> COMO COMPRAR </li>
          </ul>
        </div>
        
      </header>
    );
  }

export default Header;