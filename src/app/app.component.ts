import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { ButtonComponent } from './shared/button.component';
import { CapitalizePipe } from './shared/capitalize.pipe';
import { CardComponent } from './shared/card.component';

const imports = [ButtonComponent, CapitalizePipe, CardComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-card>
      <app-button></app-button>
      <p>{{ 'angular' | capitalize }}</p>
    </app-card>
  `,
  // imports,
  imports: [SharedModule],
})
export class AppComponent {}
