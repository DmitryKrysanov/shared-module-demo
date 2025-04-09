import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  template: `<button mat-raised-button color="primary">Click me</button>`,
})
export class ButtonComponent {}
