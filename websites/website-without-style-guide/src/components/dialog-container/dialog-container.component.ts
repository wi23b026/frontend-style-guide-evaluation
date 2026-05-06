import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService, DialogConfig } from '../../services/dialog.service';

@Component({
  selector: 'app-dialog-container',
  standalone: true,
  imports: [CommonModule],
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

  hasBackdrop(): boolean {
    return this.dialogs.length > 0;
  }
}
