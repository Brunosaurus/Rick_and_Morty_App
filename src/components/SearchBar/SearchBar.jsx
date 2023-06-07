import style from './SearchBar.module.css'
import RanCard from '../NavBar/RanCard/RanCard'
import { useState } from 'react'
import { Link } from "react-router-dom"

export default function SearchBar(props) {
   const [id, setID] = useState('')
   const handleChange = (event) => {
      setID(event.target.value)
   }
   const execute = () => {
      document.querySelector('#input1').value = ''
      props.onSearch(id)
   }
   return (
         <div className={style.buscador}>            
            <Link to='/'><button className={style.buttonHome} title='Home'>Home</button></Link>
            <Link to='/About_Me'><button className={style.buttonAbout} title='About'>About</button></Link>
            <RanCard className={style.ranCard} props = {props}/>
            <input id='input1' className={style.searcher} type='text' onChange={handleChange}/>
            <button className={style.buttonSearch} onClick={execute} title='Search'/>
         </div>
   );
}
