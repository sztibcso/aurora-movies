import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dont-click',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dont-click-container">
      <p class="message">
        If you clicked where you shouldn't, then don't be shy and hire me!
      </p>
      <br>
      <p class="credits">
        Written and directed by:
      </p>
      <p class="message">Szalontai Tibor</p>
      <br><br>
      <p class="credits">Hired by:</p>
      <p class="message">AURORA</p>
      <br>
      <button routerLink="/" class="back-button">Back to Home</button>
    </div>
  `,
  styles: [`
    .dont-click-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      color: white;
      font-family: 'MyCustomFont', sans-serif;
      text-align: center;
      background: transparent;
    }
    .message {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .credits {
      font-size: 1.2rem;
    }
    .back-button {
      margin-top: 2rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      background-color: #ff4081;
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
    }
    .back-button:hover {
      background-color: #f50057;
    }
  `]
})
export class DontClickComponent {}
