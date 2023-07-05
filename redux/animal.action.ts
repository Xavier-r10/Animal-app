import { AnimalModel, CreateAnimalModel } from "../models/animal.model";

export const addAnimal = (animal: CreateAnimalModel) => ({
    type: 'ADD_ANIMAL',
    payload: animal
});
  
export const deleteAnimal = (animalId: number) => ({
    type: 'DELETE_ANIMAL',
    payload: animalId,
});

export const updateAnimal = (animal: AnimalModel) => ({
    type: 'UPDATE_ANIMAL',
    payload: animal
});