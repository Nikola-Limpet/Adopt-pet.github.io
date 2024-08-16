import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import ErrorBoundary from "./ErrorBoundary";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import Modal from "./Modal";


const Details = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate(); // this is a hook that allows you to navigate to a different route
    const [_, setAdoptedPet] = useContext(AdoptedPetContext);
    const { id } = useParams();
    const results = useQuery(["details", id], fetchPet);
    


    if (results.isLoading) {
        return (
          <div className="loading-pane">
            <h2 className="loader">🌀</h2>
          </div>
        );
    }

    if (results.isError) {
        return <h2>Something went wrong.</h2>
    }

    const pet = results.data.pets[0];

    return (
      <div className="details">
        <Carousel images={pet.images} />
        <div>
          <h1>{pet.name}</h1>
          <h2>
            {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
            <button onClick={() => setShowModal(true)}>Adopt {pet.name} </button>
            <p>{pet.description}</p>
            {
              showModal ? (
                // this is a fragment
                <Modal>
                  <div>
                    <h2>Would you like to adopt {pet.name}?</h2>
                    <div className="buttons">
                      <button 
                        onClick={() => {
                        setAdoptedPet(pet) // this sets the adopted pet in the context
                        navigate("/"); // this navigates to the home page
                      }}
                      >
                        Yes
                      </button>

                      <button onClick={() => setShowModal(false)}>No</button>
                    </div>
                  </div>
                </Modal>
              ) : null}
          </h2>

        </div>
      </div>
    );
};


function DetailsErrorBoundary(props) {
    return (
      <ErrorBoundary>
        <Details {...props} />
      </ErrorBoundary>
    );
}


export default DetailsErrorBoundary;