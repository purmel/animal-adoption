import { Injectable } from '@angular/core';
import { Animal } from '../models/animal.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animals: Animal[] = [
      new Animal(1, 'Rex', 'Câine', 3, 'Un câine prietenos', 'https://placehold.co/150'),
      new Animal(2, 'Miau', 'Pisică', 2, 'O pisică blândă', 'https://placehold.co/150'),
      new Animal(3, 'Lulu', 'Papagal', 1, 'Un papagal vorbăreț', 'https://placehold.co/150'),
      new Animal(4, 'Max', 'Iepure', 2, 'Un iepure foarte drăgălaș', 'https://placehold.co/150'),
      new Animal(5, 'Rocky', 'Șopârlă', 4, 'O șopârlă exotică', 'https://placehold.co/150')
    ];
    //manipulam date despre animale
    getAnimals(): Observable<Animal[]> {
      return of(this.animals);
    }
  
    addAnimal(animal: Animal): void {
      this.animals.push(animal);
    }

    getAnimalById(id: number): Observable<Animal | undefined> {
      return of(this.animals.find(animal => animal.id === id));
    }
  
    updateAnimal(updatedAnimal: Animal): void {
      const index = this.animals.findIndex((animal) => animal.id === updatedAnimal.id);
      if (index !== -1) {
        this.animals[index] = updatedAnimal;
      }
    }
  
    deleteAnimal(id: number): void {
      this.animals = this.animals.filter((animal) => animal.id !== id);
    }
}
