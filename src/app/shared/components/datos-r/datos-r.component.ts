import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/petsapi.service';

@Component({
  selector: 'app-datos-r',
  templateUrl: './datos-r.component.html',
  styleUrls: ['./datos-r.component.scss'],
})
export class DatosRComponent implements OnInit {
  catFact: string;
  dogFact: string;
  catImageUrl: string;
  dogImageUrl: string;
  selectedCatBreed: string;

  constructor(private petService: PetService) {}

  ngOnInit() {
    // Cargar hechos e imágenes al inicializar el componente
    this.loadCatBreedFact();
    this.loadCatImage();
    this.loadDogFact(); // Cargar hecho de perro
    this.loadDogImage(); // Cargar imagen de perro
  }

  // Método para cargar un hecho de raza de gato
  loadCatBreedFact() {
    this.petService.getCatBreeds().subscribe(data => {
      if (data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const selectedBreed = data[randomIndex];
        this.catFact = selectedBreed.description || 'No hay datos disponibles.'; // Usa la descripción de la raza
        this.selectedCatBreed = selectedBreed.name; // Guarda el nombre de la raza
        this.loadCatImage(this.selectedCatBreed); // Carga la imagen de la raza específica
      } else {
        this.catFact = 'No hay razas disponibles.';
      }
    });
  }

  // Método para cargar un hecho de perro
  loadDogFact() {
    this.dogFact = this.petService.getRandomDogFact(); // Obtiene un hecho aleatorio de perro
  }

  // Método para cargar una imagen aleatoria de un gato
  loadCatImage(breed?: string) {
    const breedQuery = breed ? `?breed_ids=${breed.toLowerCase()}` : ''; // Crear la consulta para la raza
    this.petService.getRandomCatImage().subscribe(data => {
      if (data && data.length > 0) {
        this.catImageUrl = data[0].url; // Asumiendo que la respuesta es un array
      } else {
        this.catImageUrl = 'No hay imagen de gato disponible.';
      }
    });
  }

  // Método para cargar una imagen aleatoria de un perro
// Método para cargar una imagen aleatoria de un perro
loadDogImage() {
  this.petService.getRandomDogImage().subscribe(data => {
      if (data && data.length > 0) { // Check if data is an array and has at least one element
          this.dogImageUrl = data[0].url; // Assuming the response is an array, access the first item
      } else {
          this.dogImageUrl = 'No hay imagen de perro disponible.';
      }
  });
}

}
