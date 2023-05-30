import style from './SearchBar.module.css'
import RanCard from '../NavBar/RanCard/RanCard'
import { useState } from 'react'

export default function SearchBar(props) {
   const [id, setID] = useState('')
   const handleChange = (event) => {
      setID(event.target.value)
   }
   return (
         <div className={style.buscador}>
            <RanCard className={style.ranCard} props = {props}/>
            <input className={style.searcher} type='text' onChange={handleChange}/>
            <button className={style.buttonSearch} onClick={()=>{props.onSearch(id)}}/>
         </div>
   );
}
