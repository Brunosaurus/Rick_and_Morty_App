import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from "./Details.module.css"
import axios from "axios"

export default function Details() {
    const {id} = useParams()
    const [characters, setCharacters] = useState({})
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then((response) => setCharacters(response.data));
    }, [])

    return(
        <div className={style.container}>

            <div className={style.divSon}>
                <div className={style.information}>
                    <h3 className={style.id}>ID | {characters.id}</h3>
                    <h1 className={style.name}>{characters.name}</h1>
                    <h3 className={style.status}>Status | {characters.status}</h3>
                    <h3 className={style.species}>Specie | {characters.species}</h3>
                    <h3 className={style.gender}>Gender | {characters.gender}</h3>
                    <h3 className={style.origin}>Origin | {characters.origin?.name}</h3>
                </div>
                <div className={style.imageDiv}>
                    <img src={characters.image} className={style.image}/>
                </div>
            </div>

        </div>
    )
}