import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com'; // Importa EmailJS

@Component({
  selector: 'app-unete',
  imports: [FormsModule, CommonModule],
  templateUrl: './unete.component.html',
  styleUrl: './unete.component.css',
})
export class UneteComponent {
  constructor() {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = form.value;

      // Configura EmailJS con tu User ID
      emailjs.init('0zcL1VABbbl2CAIpm'); // Reemplaza con tu User ID de EmailJS

      // Envía el correo electrónico
      emailjs
        .send('service_9ij24xs', 'template_swxeui4', {
          nombre: formData.nombre,
          correo: formData.correo,
          celular: formData.celular,
          barrio: formData.barrio,
        })
        .then(
          (response) => {
            alert('Formulario enviado con éxito');
            form.resetForm();
          },
          (error) => {
            alert('Error al enviar el formulario');
            console.error('Error:', error);
          }
        );
    } else {
      alert('Por favor, completa el formulario correctamente');
    }
  }
}
