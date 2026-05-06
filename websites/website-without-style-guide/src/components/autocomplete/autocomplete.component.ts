import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css'
})
export class AutocompleteComponent implements OnInit {
  @Input() suggestions: string[] = [];
  @Input() placeholder = '';
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();
  @Output() selected = new EventEmitter<string>();

  filteredSuggestions: string[] = [];
  showSuggestions = false;
  selectedIndex = -1;

  ngOnInit() {
    this.filterSuggestions();
  }

  onInput(event: any) {
    this.value = event.target.value;
    this.valueChange.emit(this.value);
    this.filterSuggestions();
    this.showSuggestions = true;
    this.selectedIndex = -1;
  }

  filterSuggestions() {
    if (!this.value) {
      this.filteredSuggestions = this.suggestions.slice(0, 5);
    } else {
      this.filteredSuggestions = this.suggestions
        .filter(suggestion =>
          suggestion.toLowerCase().includes(this.value.toLowerCase())
        )
        .slice(0, 5);
    }
  }

  selectSuggestion(suggestion: string) {
    this.value = suggestion;
    this.valueChange.emit(this.value);
    this.selected.emit(suggestion);
    this.showSuggestions = false;
    this.selectedIndex = -1;
  }

  onKeyDown(event: KeyboardEvent) {
    if (!this.showSuggestions) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.selectedIndex = Math.min(this.selectedIndex + 1, this.filteredSuggestions.length - 1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
        break;
      case 'Enter':
        event.preventDefault();
        if (this.selectedIndex >= 0) {
          this.selectSuggestion(this.filteredSuggestions[this.selectedIndex]);
        }
        break;
      case 'Escape':
        this.showSuggestions = false;
        this.selectedIndex = -1;
        break;
    }
  }

  onFocus() {
    this.filterSuggestions();
    this.showSuggestions = true;
  }

  onBlur() {
    // Delay hiding to allow click on suggestions
    setTimeout(() => {
      this.showSuggestions = false;
      this.selectedIndex = -1;
    }, 200);
  }
}