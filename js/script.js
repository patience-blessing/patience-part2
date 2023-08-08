const movies = document.querySelector("#movies");
const btn = document.querySelector("button");

const addNewMovie = async () =>{
    const movieText = await getmovies();
    const newLi = document.createElement("li");
    newLi.append(movieText);
    movies.append(newLi);
}
const getmovies = async()=>{
try {
    const config = {headers: {Accept: "tt1375666"}}
    const res = await axios.get("https://imdb-api.com/en/API/Title/k_12345678/tt1375666", config)
    return res.data.movie
} 
catch (err){
  return "Sorry no movie available"
}}

btn.addEventListener("click", addNewMovie)

