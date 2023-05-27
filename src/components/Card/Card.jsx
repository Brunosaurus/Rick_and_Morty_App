import style from './Card.module.css'
export default function Card({id, name, status, species, gender, origin, image, onClose}) {
return (
   <div className={style.padre}>
      <button className={style.button} title='close' onClick={onClose}></button>
      <h2 className={style.name} id="name">{name}</h2>
      <div className={style.contenedor}>
      <h2 className={style.status} id="status"> Status: {status} </h2>
      <h2 className={style.species} id="species"> Species: {species} </h2>
      <h2 className={style.gender} id="gender"> Gender: {gender} </h2>
      <h2 className={style.origin} id="origin" title={origin}> Origin: {origin} </h2>
      <img className={style.image} src={image} alt=""/>
      </div>
   </div>
);
}