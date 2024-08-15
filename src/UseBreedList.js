import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./FetchBreedList";

export default function useBreedList(animal) { 
  const results = useQuery(["breeds", animal], fetchBreedList);
  
  return [results?.data?.breeds ?? [], results.status];
  // if results is undefined, return an empty array, otherwise return results.data.breeds
}

