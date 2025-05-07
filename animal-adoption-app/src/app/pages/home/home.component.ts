import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal.models';
import{ RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  animals: Animal[] = [];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animalService.getAnimals().subscribe(data => {
      this.animals = data;
    });
  }
}
