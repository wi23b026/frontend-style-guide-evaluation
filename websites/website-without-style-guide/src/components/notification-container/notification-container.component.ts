import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService, Notification } from '../../services/notification.service';

@Component({
  selector: 'app-notification-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-container.component.html',
  styleUrl: './notification-container.component.css'
})
export class NotificationContainerComponent implements OnInit {
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getNotifications().subscribe(notifications => {
      this.notifications = notifications;
    });
  }

  remove(id: string) {
    this.notificationService.remove(id);
  }

  getBackgroundColor(type: string): string {
    switch (type) {
      case 'success':
        return 'var(--color-green)';
      case 'error':
        return 'var(--color-red)';
      case 'warning':
        return 'var(--color-orange)';
      case 'info':
        return 'var(--color-blue)';
      default:
        return 'var(--color-dark-brown)';
    }
  }
}
