import React from 'react'
import "./character-list.css"
import { useCharacters } from '../hooks/useCharacters'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



export const CharactersList = () => {
 const {data, loading, error} = useCharacters();

    if(loading) return <div>Loading...</div>

    if(error) return <h1>someting has went wrong</h1>

    return (
    <div className='CharacterList'>
        {data.characters?.results.map(character => {
           
            return (
                 <Link to={`/${character.id}`}>
                <img src={character.image} />
                <h2>{character.name}</h2>
            </Link> 
        )})}
    </div>
  )
}
