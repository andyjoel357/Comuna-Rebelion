// src/app/services/firebase-test.service.ts
import { inject, Injectable } from '@angular/core';
import { Database, ref, objectVal } from '@angular/fire/database'; // ✅ Cambiado a objectVal
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FirebaseTestService {
  private database = inject(Database);

  testFirebaseConnection(): Observable<any> {
    console.log('🔍 Probando conexión con Firebase Realtime Database...');

    // Referencia a la raíz de tu base de datos o a 'carousel'
    const dbRef = ref(this.database, 'carousel');

    // ✅ Usar objectVal() en lugar de ObjectValue
    return objectVal(dbRef).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // Método alternativo para obtener datos específicos
  getCarouselData(): Observable<any[]> {
    const carouselRef = ref(this.database, 'carousel');

    return objectVal(carouselRef).pipe(
      map((data: any) => {
        // Convertir objeto a array si es necesario
        return data ? Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        })) : [];
      })
    );
  }
}
