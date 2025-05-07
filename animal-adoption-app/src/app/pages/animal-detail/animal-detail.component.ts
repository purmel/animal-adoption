import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal.models';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-animal-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './animal-detail.component.html',
  styleUrl: './animal-detail.component.scss'
})
export class AnimalDetailComponent implements OnInit {
  animal?: Animal;

  constructor(private route: ActivatedRoute, private animalService: AnimalService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.animalService.getAnimalById(id).subscribe(data => {
      this.animal = data;
    });
  }
}
