import React from 'react'
import { useCharacter } from '../hooks/useCharacter'
import "./character.css"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
export const Character = () => {
    const {id} = useParams(3)
    const {loading , data , error} = useCharacter(1)
    console.log({error,loading, data})


    if (error) return <h1>Someting went wrong</h1>

    if(loading) return <div>Spinner</div>

  return (
    <div className='character'>
        <img src={data.character.image} 
        width={750} height={750} />
        <div className='character-content'>
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className='character-episode'>
                {data.character.episode.map((episode => {
                    return (<div>
                        {episode.name} - <b>{episode.episode}</b>
                    </div> 
                )})  

                )}
            </div>
        </div>
    </div>
  )
}
