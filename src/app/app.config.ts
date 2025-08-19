import { MatIconModule } from '@angular/material/icon';
import { ApplicationConfig, importProvidersFrom,  } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(), // Para animaciones de Angular Material
    importProvidersFrom(MatIconModule, FormsModule), // Importa módulos necesarios
  ]
};
