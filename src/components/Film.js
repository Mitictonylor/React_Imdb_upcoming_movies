import React, {Fragment} from 'react'

const Film = (props) =>{

  return(
    <>
      <ul>
      <li>
      <a className ="single-film" href={props.film.url} target ="_blank">{props.film.name} </a>
      </li>
      </ul>
    </>
  )
}
export default Film
