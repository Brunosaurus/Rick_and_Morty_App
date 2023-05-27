import style from './SearchBar.module.css'
import {RMI, RML} from './ficheros'

export default function SearchBar({onSearch}) {
   return (
      <div className={style.cuadro}>
         <div className={style.logo}>
            <img className={style.logoRyM} src={RMI}/>
            <img className={style.logoNombre} src={RML}/>
         </div>
         <div className={style.buscador}>
            <input className={style.searcher} type='search' />
            <button className={style.buttonSearch} onClick={onSearch}></button>
         </div>
      </div>
   );
}
