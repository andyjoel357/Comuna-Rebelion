import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-unete',
  imports: [FormsModule, CommonModule],
  templateUrl: './unete.component.html',
  styleUrl: './unete.component.css',
})
export class UneteComponent {
  alertMessage: string = '';
  alertType: 'success' | 'error' | 'warning' | '' = '';
  showAlert: boolean = false;

  constructor() {}

  showAlertMessage(message: string, type: 'success' | 'error' | 'warning') {
    this.alertMessage = message;
    this.alertType = type;
    this.showAlert = true;

    // Ocultar la alerta después de 5 segundos
    setTimeout(() => {
      this.hideAlert();
    }, 5000);
  }

  hideAlert() {
    this.showAlert = false;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = form.value;

      // Configura EmailJS con tu User ID
      emailjs.init('0zcL1VABbbl2CAIpm');

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
            this.showAlertMessage('Formulario enviado con éxito', 'success');
            form.resetForm();
          },
          (error) => {
            this.showAlertMessage('Error al enviar el formulario', 'error');
            console.error('Error:', error);
          }
        );
    } else {
      this.showAlertMessage('Por favor, completa el formulario correctamente', 'warning');
    }
  }
}
