import axios from 'axios';
import style from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards';
import About from './views/About/About';
import Details from './views/Details/Details';
import NotFound from './views/NotFound/NotFound';
import React, { useState } from 'react';
import { Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import Forms from './components/Form/Form';

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
   
   function IsLogged() {
      if(useLocation().pathname !== '/'){
         return <NavBar onSearch={onSearch} logout={logout}/>
   }
   }
   const [access, setAccess] = useState(false);
   const EMAIL = 'a@a.aaa';
   const PASSWORD = 'abcde1';

   function login(email, password) {
      console.log(password === PASSWORD);
      if (password === PASSWORD && email === EMAIL) {
         alert('¡Bienvenido!')
         setAccess(true);
         return <Navigate to="/home" />;
      }
   }
   function logout() {
      setAccess(false);
      return <Navigate to="/" />;
   }
   
   return (

      <div className={style.app}>
         {IsLogged()}
         <Routes>
            { access ? (
               <>
                  <Route path='/' element={<Navigate to='/home'/>}/>
                  <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
                  <Route path='/About_Me' element={<About/>}/>
                  {/* Redirige a la funcion Number Route que valida si el id de la URL esta dentro del rango permitido */}
                  <Route path="/:id" element={<NumberRoute />} />
                  {/* Ruta para el error 404 */}
                  <Route path="/4004" element={<NotFound />} />
                  {/* Ruta de captura de errores para cualquier otra URL */}
                  <Route path="*" element={<Navigate to="/4004" />} />
               </>
            ) : (
               <>
                  <Route path='/' element={access ? <Navigate to='/home'/> : <Forms login={login}/>}/>
                  <Route path='*' element={<Navigate to='/'/>}/>
               </>
            )}
         </Routes>
      </div>
   );
}

export default App;

// useHistory - React Routin 36A, Lecture 1hr09min
