import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HubTasksComponent } from './components/hub-tasks/hub-tasks.component';
import { HubHomeComponent } from './components/hub-home/hub-home.component';
import { HubNavbarComponent } from './components/hub-navbar/hub-navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    HubTasksComponent, 
    HubHomeComponent,
    HubNavbarComponent, 
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hubify';
}
