import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss']
})
export class PerfilPage {
  nombre: string = '';
  telefono: string = '';
  correo: string = '';
  imagen: string | ArrayBuffer | null = 'assets/icon/person-circle-outline.svg'; // imagen por defecto

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.imagen = reader.result);
      reader.readAsDataURL(file);
    }
  }

  guardarCambios() {
    console.log('Datos guardados:', {
      nombre: this.nombre,
      telefono: this.telefono,
      correo: this.correo,
      imagen: this.imagen
    });
    alert(' Usuario registrado con éxito ');
  }
}
