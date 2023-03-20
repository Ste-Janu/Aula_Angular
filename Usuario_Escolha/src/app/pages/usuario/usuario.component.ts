import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  
  fontColor = '#000000';
  fontSize = 16;
  padding = 8;
  margin = 16;
  primaryColor = '#80A851';
  secondaryColor = '#F56C9A';

  updateColors() {
    console.log(this.primaryColor, this.secondaryColor, this.fontColor, this.fontSize, this.padding, this.margin);
    document.documentElement.style.setProperty('--primary-color', this.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', this.secondaryColor);
    document.documentElement.style.setProperty('--font-color', this.fontColor);
    document.documentElement.style.setProperty('--font-size', this.fontSize + 'px');
    document.documentElement.style.setProperty('--padding', this.padding + 'px');
    document.documentElement.style.setProperty('--margin', this.margin + 'px');
  }
 
  
}
