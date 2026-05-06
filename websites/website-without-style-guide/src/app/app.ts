import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from '../components/navigation/navigation.component';
import { NotificationContainerComponent } from '../components/notification-container/notification-container.component';
import { DialogContainerComponent } from '../components/dialog-container/dialog-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, RouterOutlet, NotificationContainerComponent, DialogContainerComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
