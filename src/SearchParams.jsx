import { useState, useContext } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import Results from "./Results";
import useBreedList from "./UseBreedList";
import fetchSearch from "./fetchSearch";
import { useQuery } from "@tanstack/react-query";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];


const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: ""
  });
  const [ animal , setAnimal ] = useState("");
  // const [ pets , setPets ] = useState([]); 
  const [ breeds ] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptedPetContext);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results.data?.pets ?? [];

  // useEffect(() => { 
  //   // the effect function will run after the first render and after every update
  //   requestPets();
  // }, []);   // the empty array means that the effect will only run after the first render

  // async function requestPets() {
  //   const res = await fetch(
  //     `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //   );
  //   const json = await res.json();
  //   setPets(json.pets);
  // }
  return (
    <div className= "search-params">
      <form 
        onSubmit={ e => {
        e.preventDefault();
        // requestPets();
        const formData = new FormData(e.target); // e.target is the form element
        const obj = {
          animal: formData.get("animal") ?? "",
          location: formData.get("location") ?? "",
          breed: formData.get("breed") ?? ""
        };
        setRequestParams(obj);
      }}
      >
        {
          adoptedPet ? (
            <div className="pet image-container">
              <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
            </div>
          ) : null
        } 

        <label htmlFor="location"> 
          Location🔎
          <input
          name = "location"
          //  onChange={ (e) => setLocation(e.target.value)} 
          //  setlocation is a function that will update the state of location that is being passed in
          //  the value of the input field will be the value of the location state
          // value={location}
           id="location" 
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
              // setBreeds("");
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
            // value={breed}
            name = "breed"
            // onChange={ (e) => 
            //   setBreeds(e.target.value
            // )}
            >
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