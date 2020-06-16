import React from "react";
import Film from "./Film.js"

const FilmList = (props) => {

const filmNodes = props.films.map((film, index) => {
  return <Film film = {film} key = {index} />});




return (
<>
  <ul>
  {filmNodes}
  </ul>
</>
)
}
export default FilmList
