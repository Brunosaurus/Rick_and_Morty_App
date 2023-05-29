import style from './Card.module.css'
export default function Card({id, name, status, species, gender, origin, image, onClose, characters}) {

   const verificar = (event) => {
      let idLocal = parseInt(event.target.id)
      characters.map(({id}) => {
         if(id==idLocal){
            onClose(idLocal)
         }
      })
   }

return (
   <div className={style.padre}>
      <button className={style.button} id={id} title='close' onClick={verificar}></button>
      <h2 className={style.name}>{name}</h2>
      <div className={style.contenedor}>
      <h2 className={style.status}> Status: {status} </h2>
      <h2 className={style.species}> Species: {species} </h2>
      <h2 className={style.gender}> Gender: {gender} </h2>
      <h2 className={style.origin} title={origin}> Origin: {origin} </h2>
      <img className={style.image} src={image} alt=""/>
      </div>
   </div>
);
}