import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DialogConfig } from '../../services/dialog.service';

@Component({
  selector: 'app-dialog-container',
  standalone: true,
  imports: [CommonModule, ButtonModule, DialogModule],
  templateUrl: './dialog-container.component.html',
  styleUrl: './dialog-container.component.css'
})
export class DialogContainerComponent implements OnInit {
  dialogs: DialogConfig[] = [];

  constructor(private dialogService: DialogService) {}

  ngOnInit() {
    this.dialogService.getDialogs().subscribe(dialogs => {
      this.dialogs = dialogs;
    });
  }

  confirm(dialog: DialogConfig) {
    if (dialog.onConfirm) {
      dialog.onConfirm();
    }
    this.dialogService.close(dialog.id);
  }

  cancel(dialog: DialogConfig) {
    if (dialog.onCancel) {
      dialog.onCancel();
    }
    this.dialogService.close(dialog.id);
  }

  getDialogIcon(dialog: DialogConfig): string {
    switch (dialog.type) {
      case 'confirm':
        return 'pi pi-exclamation-triangle';
      case 'help':
        return 'pi pi-question-circle';
      case 'info':
        return 'pi pi-info-circle';
      default:
        return 'pi pi-info-circle';
    }
  }

  getConfirmIcon(dialog: DialogConfig): string {
    return dialog.type === 'confirm' ? 'pi pi-trash' : 'pi pi-check';
  }

  getConfirmStyle(dialog: DialogConfig): string {
    if (dialog.type === 'confirm') {
      return 'sg-button-cancel';
    }

    return dialog.type === 'help' ? 'sg-button-save' : 'sg-button-dark';
  }

  hasBackdrop(): boolean {
    return this.dialogs.length > 0;
  }
}
