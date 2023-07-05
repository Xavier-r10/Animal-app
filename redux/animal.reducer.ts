import { listAnimals } from "../assets/data/animals";
import { ActionModel } from "../models/animal.model";

const initialState = {
    animals: listAnimals,
};
  
  const animalReducer = (state = initialState, action: ActionModel) => {
    switch (action.type) {
      case 'ADD_ANIMAL':
        return {
          ...state,
          animals: [...state.animals, action.payload],
        };
      case 'DELETE_ANIMAL':
        return {
          ...state,
          animals: state.animals.filter((animal) => animal.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default animalReducer;