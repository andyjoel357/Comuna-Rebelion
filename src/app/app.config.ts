import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(
      MatIconModule,
      FormsModule
    ),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
     provideDatabase(() => getDatabase())
  ]
};
