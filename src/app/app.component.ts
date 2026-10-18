import { Component } from '@angular/core';
import { ProjectComponent } from './project/project/project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project_9';
}
