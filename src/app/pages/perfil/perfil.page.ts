import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
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
  imagen: string | ArrayBuffer | null = 'assets/icon/person-circle-outline.svg';

  constructor(private alertController: AlertController) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.imagen = reader.result);
      reader.readAsDataURL(file);
    }
  }

  async guardarCambios() {
    console.log('Datos guardados:', {
      nombre: this.nombre,
      telefono: this.telefono,
      correo: this.correo,
      imagen: this.imagen
    });

    // Mostrar modal (alert) de éxito
    const alert = await this.alertController.create({
      header: ' Registro Exitoso',
      message: `El usuario ${this.nombre} ha sido registrado correctamente.`,
      buttons: ['Aceptar'],
      cssClass: 'alerta-exito'
    });

    await alert.present();

    // Limpiar los campos después de registrar
    this.nombre = '';
    this.telefono = '';
    this.correo = '';
    this.imagen = 'assets/icon/person-circle-outline.svg';
  }
}
