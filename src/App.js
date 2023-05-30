import axios from 'axios'
import React, { useState } from 'react';
import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar';

function App() {

   const [characters, setCharacters] = useState([])

   function onSearch(idL) {
      let idExistente = false;

      for (let i = 0; i < characters.length; i++) {
         if (characters[i].id === parseInt(idL)) {
            idExistente = true
         }
      }
      if(idExistente === false){
         axios(`https://rickandmortyapi.com/api/character/${idL}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
   }

   function onClose(id){
      const indice = characters.findIndex(objeto => objeto.id === id)
      if (indice !== -1) {
         characters.splice(indice, 1)
         setCharacters([...characters])
      }
   }

   return (
      <div className={style.app}>
         <NavBar onSearch = {onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
