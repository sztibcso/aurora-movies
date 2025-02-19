import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundVideoComponent } from './background-video/background-video.component';
@Component({
  selector: 'app-root',
  imports: [BackgroundVideoComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'aurora-movies';
}
