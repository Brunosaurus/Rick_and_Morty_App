import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function Details() {
    const {id} = useParams()
    const [characters, setCharacters] = useState({})
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then((response) => setCharacters(response.data));
    }, [])

    return(
        <div>
            <h1>{characters.id}</h1>
            <h1>{characters.name}</h1>
            <h1>{characters.status}</h1>
            <h1>{characters.species}</h1>
            <h1>{characters.gender}</h1>
            <h1>{characters.origin?.name}</h1>
            <img src={characters.image}/>
        </div>
    )
}