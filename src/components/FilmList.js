import React from "react";
import Film from "./Film.js"

const FilmList = (props) => {

const filmNode = props.films.map((film, index) => {
  return <Film film = {film} key = {index} />});

})


return (

  <Film></Film>

)
}
export default FilmList
