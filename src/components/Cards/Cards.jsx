import style from './Cards.module.css'
import Card from '../Card/Card';

export default function Cards({characters, onClose}) {
   console.log(characters)
   return (
   <div className={style.padre}>
      {
         characters.map(({id, name, status, species, gender, origin, image}) => {
            return(
               <Card 
               key={id} 
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
               characters={characters}
               />
            )
         })
      }
   </div>
   )
}
// minuto 45:19 - Daiana Agustina Grillia _ Video: React-Intro - Code Review
