import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('frontend');

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.ping().subscribe({
      next: (response) => {
        console.log('Backend ping response:', response);
      },
      error: (error) => {
        console.error('Backend ping failed:', error);
      }
    });
  }
}
