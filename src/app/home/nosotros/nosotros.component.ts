import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseTestService } from '../../service/firebase-test.service'; // Asegúrate de que esta ruta es correcta

@Component({
  selector: 'app-nosotros',
  imports: [NgFor, CommonModule],
  standalone: true,
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css',
})
export class NosotrosComponent implements OnInit {
  // Inyectar el servicio de Firebase
  private firebaseService = inject(FirebaseTestService);
  private modalService = inject(NgbModal);

  // Variables para almacenar los datos
  carouselImages: any[] = [];
  galleryImages: any[] = [];
  selectedImage: string = '';

  // Variables para manejar el estado de carga
  isLoading: boolean = true;
  error: string | null = null;

  ngOnInit(): void {
    this.loadCarouselImages();
    this.loadGalleryImages();
  }

  // Cargar imágenes del carrusel desde Firebase
  loadCarouselImages(): void {
    this.isLoading = true;
    this.error = null;

    this.firebaseService.getCarouselData().subscribe({
      next: (images) => {
        this.carouselImages = images;
        this.isLoading = false;
        console.log('✅ Carrusel cargado desde Firebase:', images);
      },
      error: (err) => {
        this.error = 'Error al cargar el carrusel: ' + err.message;
        this.isLoading = false;
        console.error('❌ Error cargando carrusel:', err);
      }
    });
  }

  loadGalleryImages(): void {
 this.isLoading = true;
    this.error = null;

    this.firebaseService.getCarouselData().subscribe({
      next: (images) => {
        this.galleryImages = images;
        this.isLoading = false;
        console.log('✅ Carrusel cargado desde Firebase:', images);
      },
      error: (err) => {
        this.error = 'Error al cargar la galeria: ' + err.message;
        this.isLoading = false;
        console.error('❌ Error cargando galeria:', err);
      }
    });
  }

  // Función para abrir el modal
  openModal(imageUrl: string): void {
    this.selectedImage = imageUrl;
    this.modalService.open(document.getElementById('imageModal'), {
      size: 'lg',
    });
  }
  reload(): void {
    this.loadCarouselImages();
  }
}
