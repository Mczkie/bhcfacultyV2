import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-intelligent-systems-lab',
  imports: [CommonModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './intelligent-systems-lab.component.html',
  styleUrl: './intelligent-systems-lab.component.css',
})
export class IntelligentSystemsLabComponent {
  activeTab: string = 'Class Feed';

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }

  isActiveTab(tabName: string): boolean {
    return this.activeTab === tabName;
  }
}
