import React from "react";
import Film from "./Film.js"

const FilmList = (props) => {

const filmNodes = props.films.map((film, index) => {
  return <Film film = {film} key = {index} />});




return (
<>
  {filmNodes}
</>
)
}
export default FilmList
