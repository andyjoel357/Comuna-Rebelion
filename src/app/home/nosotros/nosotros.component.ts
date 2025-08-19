import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImagenesService } from '../../service/imagenes.service';
import { GalleryService } from '../../service/gallery.service';
@Component({
  selector: 'app-nosotros',
  imports: [NgFor],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css',
})
export class NosotrosComponent {
  service = inject(ImagenesService)
  servc = inject(GalleryService)
  url:any;
  alt:any;
  title:any;
  description:any;
  carouselImages: any[] = [];

  // Imágenes para la galería
  galleryImages: any []=[];

  // Imagen seleccionada para el modal
  selectedImage: string = '';

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
    // Llama al servicio para obtener las imágenes del carrusel
    this.service.getCarouselImages().subscribe((images) => {
      this.carouselImages = images;
    });
    this.servc.getGallery().subscribe((images)=>{
      this.galleryImages = images;
    });

  }
  // Función para abrir el modal
  openModal(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.modalService.open(document.getElementById('imageModal'), {
      size: 'lg',
    });
  }
}
