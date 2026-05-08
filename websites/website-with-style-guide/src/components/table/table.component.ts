import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Product } from '../product-form/product-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  standalone: true,
  imports: [CommonModule, ButtonModule, TableModule]
})
export class TableComponent {
  @Input() products: Product[] = [];
  @Input() selectedProductId: string | null = null;
  @Output() selectionChange = new EventEmitter<Product>();
  @Output() edit = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<Product>();

  onSelect(product: Product) {
    this.selectionChange.emit(product);
  }

  onEdit(product: Product) {
    this.onSelect(product);
    this.edit.emit(product);
  }

  onDelete(product: Product) {
    this.onSelect(product);
    this.delete.emit(product);
  }
}
