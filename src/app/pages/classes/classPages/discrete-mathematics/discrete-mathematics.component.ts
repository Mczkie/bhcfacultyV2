import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-discrete-mathematics',
  imports: [CommonModule],
  templateUrl: './discrete-mathematics.component.html',
  styleUrl: './discrete-mathematics.component.css'
})
export class DiscreteMathematicsComponent {
  activeTab: string = 'Class Feed';

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }

  isActiveTab(tabName: string): boolean {
    return this.activeTab === tabName;
  }
}
