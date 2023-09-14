import { gql, useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'

const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocations($name: String!){
    characters(filter: {name: $name}){
        results{
          location{
            name,
          },
        }
  }
}


`

export default function Search() {
 const [name, setName] = useState("")

 const [getLocations, {loading, data , error, called} ] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
    variables: {
        name
    }
 })

 console.log({
    error, called , data, loading
 })


    return (
    <div>
        <input value={name} onChange={(e)=> setName(e.target.value)}/>
        <button onClick={()=> getLocations()}>Search</button>
        {loading && <div>Spinner</div>}
        {error && <div>someting went wrong</div>}
        {data && (   <ul>
                {data.characters.results.map((character)=> {
                    return <li>{character.location.name}</li>
                })}
            </ul> )
          
        
        }
    </div>
  )
}
 