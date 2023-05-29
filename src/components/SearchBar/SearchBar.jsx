import style from './SearchBar.module.css'
import { useState } from 'react'
import {RMI, RML} from './ficheros'

export default function SearchBar(props) {
   const [id, setID] = useState('')
   const handleChange = (event) => {
      setID(event.target.value)
   }
   return (
      <>
         <div className={style.logo}>
            <img className={style.logoRyM} src={RMI}/>
            <img className={style.logoNombre} src={RML}/>
         </div>
         <div className={style.buscador}>
            <input className={style.searcher} type='text' onChange={handleChange}/>
            <button className={style.buttonSearch} onClick={()=>{props.onSearch(id)}}/>
         </div>
      </>
   );
}
