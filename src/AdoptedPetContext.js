import { createContext } from 'react';

// this is the context that will be used to store the adopted pets
// the context is created with a default value of an empty array
const AdoptedPetContext = createContext(
);

export default AdoptedPetContext;