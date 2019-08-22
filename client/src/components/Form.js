import React, { useState, useEffect } from "react"; 

const movieObject = {
    id: 1,
    title: "", 
    director: "", 
    matascore: "", 
    stars: ""
}

const Form = () => {
const [movie, setMovie] = useState(movieObject);
  useEffect(() => {
    //   Need someone to explain this to me 
    const id = props.match.params.id;
    const movieArray = props.movie.find(movietype => `${movietype.id}` === id);
    if(movieArray) setItem(movieArray);
  }, [props.movie, props.match.params.id]);
    //   Need someone to explain this to me 
  
const changeHandler = event => {
event.persist(); 
let value = event.target.value; 
if(event.target.name === "movie")
value = parseInt(value, 10); 
console.log(value)
}



setMovie({
    ...movie,
     [event.target.name]: value 
}) 

    return(
        <>
        <form>
        <input 
            type="text" 
            placeholder="Update Movie" 
            name="name"
            onChange={changeHandler}
             />    
        
        
        </form> 
        </>
    )
}; 

export default Form; 