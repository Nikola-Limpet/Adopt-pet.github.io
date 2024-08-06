import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "Lion" , "Donkey"];
const SeaerchParams = () => {
  const [ location , setLocation ] = useState("Phnom Penh, Cambodia");
  const [ animal , setAnimal ] = useState("");
  return (
    <div className= "search-params">
      <form>  
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
          <select id="animal" 
            value={animal}
            onChange={ (e) => 
              setAnimal(e.target.value
            )}>
            <option />
            {
              ANIMALS.map(animal => (
                <option key={animal} > {animal}
                </option>
              ))
            }
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SeaerchParams;