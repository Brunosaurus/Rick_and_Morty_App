import style from './RanCard.module.css'

export default function RanCard({props}) {
    const randomizar = (Math.floor(Math.random() * (860 - 1 + 1)) + 1).toString()

    return(
        <button className={style.ranCard} onClick={()=>{props.onSearch(randomizar)}} title='Random card'/>
    );
}