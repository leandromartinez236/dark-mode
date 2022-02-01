import React, { useState } from 'react';
import './App.css';
import { cards } from './components/cards';

// const themeStyles = {
//   dark: {
//     background: '#282c34',
//     textColor: 'white'
//   },
//   light: {
//     background: 'white',
//     textColor: '#282c34'
//   }
// }
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'wrapper-dark' : 'wrapper-light'}>
      
      <div className="container"  >
        <header className="header">
          <div className="presentacion">
            <h2>Hola, soy Leandro</h2>
            <h4>Bienvenidos a mi blog!</h4>
          </div>
          <div>
            <button type='button' onClick={()=> setDarkMode(!darkMode)} 
            className='btn'>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
          </div>
        </header>
      </div>
    
      <div className="primer-fondo">
        <div className="info">
          <h1>Lo mejor de la tecnología</h1>
          <div className='boton'><button type="button" className={darkMode ? 'cto-dark' : 'cto-light'}>LO ENCONTRAS ACÁ</button></div>
        </div>
      </div>
    
      <div className="cards container">
        {cards.map(cards => (
          <div className='card'>
            <div className='card-info'>
              <h4>{cards.subtitulo}</h4>
              <p>{cards.text}</p>
            </div>
          </div>         
        ))}
      </div>

      <footer className="footer">
        <p>Hola, soy Leandro | Todos los derechos reservados</p>
      </footer>
    
    </div>
  );
}

export default App;
