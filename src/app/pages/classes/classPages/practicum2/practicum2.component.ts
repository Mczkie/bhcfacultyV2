import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practicum2',
  imports: [CommonModule],
  templateUrl: './practicum2.component.html',
  styleUrl: './practicum2.component.css'
})
export class Practicum2Component {
  activeTab: string = 'Class Feed';

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }

  isActiveTab(tabName: string): boolean {
    return this.activeTab === tabName;
  }
}
