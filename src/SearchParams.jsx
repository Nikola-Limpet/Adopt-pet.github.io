import { useState, useEffect } from "react";
import Pet from "./Pet";
import Results from "./Results";
import useBreedList from "./UseBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];


const SearchParams = () => {
  const [ location , setLocation ] = useState("");
  const [ animal , setAnimal ] = useState("");
  const [ breed , setBreeds ] = useState("");
  const [ pets , setPets ] = useState([]); 
  const [ breeds ] = useBreedList(animal);


  useEffect(() => { 
    // the effect function will run after the first render and after every update
    requestPets();
  }, []);   // the empty array means that the effect will only run after the first render

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }
  return (
    <div className= "search-params">
      <form 
        onSubmit={ e => {
        e.preventDefault();
        requestPets();
      }}>  
        <label htmlFor="location"> 
          Location🔎
          <input
           onChange={ (e) => setLocation(e.target.value)} 
          //  setlocation is a function that will update the state of location that is being passed in
           id="location" 
           value={location} 
           placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select 
            id="animal" 
            value={animal}
            onChange={ (e) => {
              setAnimal(e.target.value);
              setBreeds("");
            }}
            >
            <option />
            {
              ANIMALS.map(animal => (
                <option key={animal}>{animal}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="breed">
          Breeds
          <select id="breed" 
            disabled = {breeds.length === 0}
            value={breed}
            onChange={ (e) => 
              setBreeds(e.target.value
            )}>
            <option />
            {
              breeds.map( (breed) => (
                <option key={breed}>{breed}</option>
              ))
            }
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  )
}

export default SearchParams;