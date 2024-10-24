import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';  // Importar Firestore
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Corrige a styleUrls (plural)
})
export class AppComponent {
  title = 'futbo';
  items$!: Observable<any[]>;  // Usa el modificador `!`

  constructor(private firestore: Firestore) {}

  // Método para probar la conexión con Firebase
  testConnection() {
    const itemsCollection = collection(this.firestore, 'items'); // Cambia 'items' por el nombre de tu colección
    this.items$ = collectionData(itemsCollection);

    this.items$.subscribe({
      next: (data) => {
        console.log('Datos de Firestore:', data);
        alert('Conexión exitosa a Firebase. Revisa la consola para ver los datos.');
      },
      error: (error) => {
        console.error('Error al conectar con Firebase:', error);
        alert('Error al conectar con Firebase. Revisa la consola para más detalles.');
      }
    });
  }
}
