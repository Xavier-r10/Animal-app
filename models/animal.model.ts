export class AnimalModel {
    id!: number;
    type!: string;
    nom!: string;
    couleur!: string;
    image!: string;
}

export class CreateAnimalModel {
    type!: string;
    nom!: string;
    couleur!: string;
    image!: string;
}

export class ActionModel {
    type!: 'ADD_ANIMAL' | 'DELETE_ANIMAL' | 'UPDATE_ANIMAL';
    payload: any
}