import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  facebookUrl: string = 'https://www.facebook.com/comunarebelion'; // URL de Facebook
  instagramUrl: string = 'https://github.com/andyjoel357?tab=repositories';   // URL de GitHub

  // Imágenes adicionales

}
