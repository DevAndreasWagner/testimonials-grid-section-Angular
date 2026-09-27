import { Component, signal } from '@angular/core';
import { Card } from './components/card/card';

@Component({
  imports: [Card],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('testimonials-grid-section-Angular');
}
