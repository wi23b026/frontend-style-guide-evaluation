import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-sg-components',
  standalone: true,
  imports: [ButtonModule, DialogModule, FormsModule, InputTextModule, SelectModule, TableModule],
  templateUrl: './sg-components.component.html',
  styleUrl: './sg-components.component.css'
})
export class SgComponentsComponent {
  countries = [
    { label: 'Japan', value: 'Japan' },
    { label: 'United States', value: 'USA' },
    { label: 'Germany', value: 'Germany' }
  ];

  sampleData = [
    { id: 1, name: 'Matcha Taiyaki', price: '$5.99', category: 'Specialty' },
    { id: 2, name: 'Red Bean Taiyaki', price: '$4.99', category: 'Classic' },
    { id: 3, name: 'Custard Taiyaki', price: '$4.99', category: 'Classic' }
  ];

  selectedCountry?: { label: string; value: string };
  showDialog = false;
  accordionOpen = true;
  activeTab = 'products';

  tabContent: Record<string, string> = {
    products: 'Product content is shown here.',
    categories: 'Category content is shown here.',
    history: 'History content is shown here.'
  };

  displayDialog() {
    this.showDialog = true;
  }

  toggleAccordion() {
    this.accordionOpen = !this.accordionOpen;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
