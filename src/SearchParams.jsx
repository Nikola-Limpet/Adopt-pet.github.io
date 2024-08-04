import { useState } from "react";


const SeaerchParams = () => {
  const [ location , setLocation] = useState("Phnom Penh, Cambodia");
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
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SeaerchParams;