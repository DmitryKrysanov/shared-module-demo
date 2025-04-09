import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <ng-content></ng-content>
    </mat-card>
  `,
})
export class CardComponent {}
