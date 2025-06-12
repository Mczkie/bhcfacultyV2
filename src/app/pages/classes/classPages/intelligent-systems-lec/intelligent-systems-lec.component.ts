import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intelligent-systems-lec',
  imports: [CommonModule],
  templateUrl: './intelligent-systems-lec.component.html',
  styleUrl: './intelligent-systems-lec.component.css'
})
export class IntelligentSystemsLecComponent {
  activeTab: string = 'Class Feed';

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }

  isActiveTab(tabName: string): boolean {
    return this.activeTab === tabName;
  }
}
