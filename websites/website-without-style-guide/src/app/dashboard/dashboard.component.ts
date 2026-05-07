import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent, Product } from '../../components/product-form/product-form.component';
import { TableComponent } from '../../components/table/table.component';
import { NotificationContainerComponent } from '../../components/notification-container/notification-container.component';
import { DialogContainerComponent } from '../../components/dialog-container/dialog-container.component';
import { AutocompleteComponent } from '../../components/autocomplete/autocomplete.component';
import { NotificationService } from '../../services/notification.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductFormComponent,
    TableComponent,
    NotificationContainerComponent,
    DialogContainerComponent,
    AutocompleteComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  searchTerm = '';
  isEditMode = false;
  editingProduct: Product | null = null;
  searchSuggestions: string[] = [];

  products: Product[] = [
    { id: '1', name: 'Red Bean Taiyaki', price: 4.5, category: 'Sweet', rating: 5 },
    { id: '2', name: 'Custard Taiyaki', price: 4.5, category: 'Sweet', rating: 4 },
    { id: '3', name: 'Hojicha Taiyaki', price: 4.5, category: 'Herb', rating: 5 }
  ];

  constructor(
    private notificationService: NotificationService,
    private dialogService: DialogService
  ) {
    this.updateSearchSuggestions();
  }

  updateSearchSuggestions() {
    const suggestions = new Set<string>();
    this.products.forEach(product => {
      suggestions.add(product.name);
      suggestions.add(product.category);
      suggestions.add(`$${product.price}`);
    });
    this.searchSuggestions = Array.from(suggestions).sort();
  }

  get filteredProducts(): Product[] {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      return this.products;
    }
    return this.products.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.price.toString().includes(term)
    );
  }

  addProduct(product: Product) {
    product.id = Date.now().toString();
    this.products = [...this.products, product];
    this.notificationService.success(`Product "${product.name}" added successfully!`);
    this.updateSearchSuggestions();
  }

  onEditProduct(product: Product) {
    this.editingProduct = { ...product };
    this.isEditMode = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onUpdateProduct(product: Product) {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      const updatedProducts = [...this.products];
      updatedProducts[index] = product;
      this.products = updatedProducts;
      this.notificationService.success(`Product "${product.name}" updated successfully!`);
      this.cancelEdit();
    }
  }

  onDeleteProduct(product: Product) {
    this.dialogService.confirm(
      'Delete Product',
      `Are you sure you want to delete "${product.name}"? This action cannot be undone.`,
      () => {
        this.products = this.products.filter(p => p.id !== product.id);
        this.notificationService.success(`Product "${product.name}" deleted successfully!`);
        this.updateSearchSuggestions();
      }
    );
  }

  cancelEdit() {
    this.isEditMode = false;
    this.editingProduct = null;
  }

  showHelp() {
    this.dialogService.help(
      'How to Manage Products',
      `• Add Product: Fill in all fields and click "Add Product" to create a new product.\n` +
      `• Edit Product: Click the edit (✎) button next to a product to modify its details.\n` +
      `• Delete Product: Click the delete (🗑) button to remove a product. Confirm the action in the dialog.\n` +
      `• Search: Use the search bar to filter products by name, category, or price.\n` +
      `• Cancel: Click the "Cancel" button while editing to discard changes.`
    );
  }
}
