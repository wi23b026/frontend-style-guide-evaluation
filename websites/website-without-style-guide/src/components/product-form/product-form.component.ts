import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';

export interface Product {
  id?: string;
  name: string;
  price: number;
  category: string;
  rating: number;
}

@Component({
  selector: 'app-product-form',
  standalone: true,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
  imports: [CommonModule, FormsModule, AutocompleteComponent]
})
export class ProductFormComponent {
  @Input() editingProduct: Product | null = null;
  @Output() productAdd = new EventEmitter<Product>();
  @Output() productUpdate = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();

  name = '';
  price: number | null = null;
  category = '';
  rating: number | null = null;

  validationErrors: { [key: string]: string } = {};

  productNameSuggestions = [
    'Red Bean Taiyaki',
    'Custard Taiyaki',
    'Hojicha Taiyaki',
    'Matcha Taiyaki',
    'Chocolate Taiyaki'
  ];

  filteredProductNames: string[] = [];

  categoryOptions = [
    { label: 'Sweet', value: 'Sweet' },
    { label: 'Herb', value: 'Herb' },
    { label: 'Classic', value: 'Classic' },
    { label: 'Seasonal', value: 'Seasonal' }
  ];

  ngOnInit() {
    if (this.editingProduct) {
      this.name = this.editingProduct.name;
      this.price = this.editingProduct.price;
      this.category = this.editingProduct.category;
      this.rating = this.editingProduct.rating;
    }
  }

  ngOnChanges() {
    if (this.editingProduct) {
      this.name = this.editingProduct.name;
      this.price = this.editingProduct.price;
      this.category = this.editingProduct.category;
      this.rating = this.editingProduct.rating;
      this.validationErrors = {};
    }
  }

  searchProductName(event: { query: string }) {
    const query = event.query.toLowerCase().trim();

    this.filteredProductNames = this.productNameSuggestions.filter(name =>
      name.toLowerCase().includes(query)
    );
  }

  validateForm(): boolean {
    this.validationErrors = {};

    if (!this.name || this.name.trim().length === 0) {
      this.validationErrors['name'] = 'Product name is required';
    }

    if (this.price === null || this.price === undefined) {
      this.validationErrors['price'] = 'Price is required';
    } else if (this.price < 0) {
      this.validationErrors['price'] = 'Price must be positive';
    }

    if (!this.category) {
      this.validationErrors['category'] = 'Category is required';
    }

    if (this.rating === null || this.rating === undefined) {
      this.validationErrors['rating'] = 'Rating is required';
    } else if (this.rating < 0 || this.rating > 5) {
      this.validationErrors['rating'] = 'Rating must be between 0 and 5';
    }

    return Object.keys(this.validationErrors).length === 0;
  }

  submitForm() {
    if (!this.validateForm()) {
      return;
    }

    const product: Product = {
      name: this.name,
      price: this.price!,
      category: this.category,
      rating: this.rating!
    };

    if (this.editingProduct && this.editingProduct.id) {
      product.id = this.editingProduct.id;
      this.productUpdate.emit(product);
    } else {
      this.productAdd.emit(product);
    }

    this.resetForm();
  }

  cancelForm() {
    this.resetForm();
    this.cancel.emit();
  }

  resetForm() {
    this.name = '';
    this.price = null;
    this.category = '';
    this.rating = null;
    this.validationErrors = {};
  }

  hasError(field: string): boolean {
    return !!this.validationErrors[field];
  }

  getError(field: string): string {
    return this.validationErrors[field] || '';
  }
}
