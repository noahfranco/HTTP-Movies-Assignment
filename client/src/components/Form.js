import React, { useState, useEffect } from "react"; 
import axios from "axios";

const movieObject = {
    id: 1,
    title: "", 
    director: "", 
    matascore: "", 
    stars: ""
}

const Form = (props) => {
const [movie, setMovie] = useState(movieObject);
  useEffect(() => {
    //   Need someone to explain this to me 
    const id = props.match.params.id;
    const movieArray = props.movie.find(movietype => `${movietype.id}` === id);
    if(movieArray) setMovie(movieArray);
  }, [props.movie, props.match.params.id]);
    //   Need someone to explain this to me 
  
const changeHandler = event => {
    event.persist()
    let newMovie = event.target.name; 
    if(event.target.name === "movie")
    newMovie = parseInt(movie, ...movie)

    setMovie({
        ...movie,
         [event.target.name]: newMovie 
    }) 
}



//   Need someone to explain this to me 
const handleSubmit = event => {
    event.preventDefault()
    axios
    .put(`http://localhost:5000/api/movies/update-movie/${movie.id}`)
    .then(res => {
        console.log(res)
        setMovie(movieObject)
        props.updateItem(res.data)
        props.history.push("/update-movie"); 
    })
    .catch(error => {
        console.log("ERROR", error)
    },[]);
};
//   Need someone to explain this to me 

    return(
        <>
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Update Movie" 
            name="name"
            onChange={changeHandler}
            value={movie.name}
             />    
        </form> 
        </>
    )
}; 

export default Form; 