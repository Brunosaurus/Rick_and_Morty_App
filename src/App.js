import axios from 'axios';
import style from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards';
import About from './views/About/About';
import Details from './views/Details/Details';
import NotFound from './views/NotFound/NotFound';
import React, { useState } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';

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

   function isNumberInRange(number) {
      const MIN_RANGE = 1;
      const MAX_RANGE = 826;
      return Number(number) >= MIN_RANGE && Number(number) <= MAX_RANGE;
   }
   function NumberRoute() {
      const { id } = useParams();
      if (isNumberInRange(id)) {
         return <Details />;
      } else {
         return <Navigate to="/4004" />;
      }
   }

   return (

      <div className={style.app}>
         <NavBar onSearch = {onSearch}/>
         <Routes>
            <Route path='/' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/About_Me' element={<About/>}/>
            <Route path="/:id" element={<NumberRoute />} />
            {/* Ruta para el error 404 */}
            <Route path="/4004" element={<NotFound />} />
            {/* Ruta de captura de errores para cualquier otra URL */}
            <Route path="*" element={<Navigate to="/4004" />} />
         </Routes>
      </div>
   );
}

export default App;
