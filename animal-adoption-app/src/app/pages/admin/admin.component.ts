import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal.models';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  animals: Animal[] = [];
  animal: Animal = {
    id: 0,
    name: '',
    type: '',
    age: 0,
    description: '',
    imageUrl: '',
  };
  isEditing: boolean = false;

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalService.getAnimals().subscribe((data) => {
      this.animals = data;
    });
  }

  constructor(private animalService: AnimalService) {}

  onSubmit(form: any): void {
    if (form.valid) {
      if (this.isEditing) {
        // Actualizare animal
        this.animalService.updateAnimal(this.animal);
        this.isEditing = false;
      } else {
        // Adăugare animal
        this.animal.id = Math.floor(Math.random() * 10000);
        this.animalService.addAnimal(this.animal);
      }
      this.getAnimals();
      this.resetForm(form);
    }
    }

    editAnimal(animal: Animal): void {
      this.animal = { ...animal }; // Copie a animalului selectat
      this.isEditing = true;
    }

    deleteAnimal(id: number): void {
      this.animalService.deleteAnimal(id);
      this.getAnimals();
    }

    updateAnimal(updatedAnimal: Animal): void {
      const index = this.animals.findIndex((animal) => animal.id === updatedAnimal.id);
      if (index !== -1) {
        this.animals[index] = updatedAnimal; // Actualizează animalul în listă
      }
    }    

    resetForm(form: any): void {
      form.reset();
      this.animal = {
        id: 0,
        name: '',
        type: '',
        age: 0,
        description: '',
        imageUrl: '',
      };
  }
}
