import React, {Fragment} from 'react'

const Film = (props) =>{

  return(
    <>

      <li>
      <a className ="single-film" href={props.film.url} target ="_blank">{props.film.name} </a>
      </li>

    </>
  )
}
export default Film
