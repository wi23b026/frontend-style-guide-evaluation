import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface DialogConfig {
  id: string;
  title: string;
  message: string;
  type: 'confirm' | 'info' | 'help';
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogs$ = new BehaviorSubject<DialogConfig[]>([]);
  private dialogIdCounter = 0;

  constructor() {}

  getDialogs(): Observable<DialogConfig[]> {
    return this.dialogs$.asObservable();
  }

  open(config: Omit<DialogConfig, 'id'>): string {
    const id = `dialog-${this.dialogIdCounter++}`;
    const dialog: DialogConfig = {
      ...config,
      id,
      confirmText: config.confirmText || 'Confirm',
      cancelText: config.cancelText || 'Cancel'
    };

    const currentDialogs = this.dialogs$.value;
    this.dialogs$.next([...currentDialogs, dialog]);
    return id;
  }

  confirm(title: string, message: string, onConfirm: () => void, onCancel?: () => void): string {
    return this.open({
      title,
      message,
      type: 'confirm',
      confirmText: 'Delete',
      cancelText: 'Cancel',
      onConfirm,
      onCancel
    });
  }

  info(title: string, message: string): string {
    return this.open({
      title,
      message,
      type: 'info',
      confirmText: 'OK',
      cancelText: undefined
    });
  }

  help(title: string, message: string): string {
    return this.open({
      title,
      message,
      type: 'help',
      confirmText: 'Got it',
      cancelText: undefined
    });
  }

  close(id: string) {
    const currentDialogs = this.dialogs$.value;
    this.dialogs$.next(currentDialogs.filter(d => d.id !== id));
  }

  closeAll() {
    this.dialogs$.next([]);
  }
}
