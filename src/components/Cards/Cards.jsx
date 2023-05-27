import style from './Cards.module.css'
import Card from '../Card/Card';

export default function Cards({characters}) {
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
               onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            )
         })
      }
   </div>
   )
}
// minuto 45:19 - Daiana Agustina Grillia _ Video: React-Intro - Code Review
