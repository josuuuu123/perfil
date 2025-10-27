import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss']
})
export class InicioPage {
  correo: string = '';
  password: string = '';

  constructor(private alertController: AlertController, private router: Router) {}

  async iniciarSesion() {
    const correoValido = 'jfmoscoso.2@sudamericano.edu.ec';
    const passwordValido = '123456';

    if (this.correo === correoValido && this.password === passwordValido) {
      //  Si las credenciales son correctas
      await this.mostrarAlerta('Acceso permitido ', 'Inicio de sesión exitoso.');
      this.router.navigate(['/perfil']);
    } else {
      //  Si las credenciales son incorrectas
      await this.mostrarAlerta('Error de acceso ', 'Correo o contraseña incorrectos. Intenta nuevamente.');
    }
  }

  private async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar'],
      cssClass: this.correo === 'jfmoscoso.2@sudamericano.edu.ec' && this.password === '123456'
        ? 'alerta-exito'
        : 'alerta-error'
    });
    await alert.present();
  }
}
