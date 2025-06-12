import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thesis-writing2',
  imports: [CommonModule],
  templateUrl: './thesis-writing2.component.html',
  styleUrl: './thesis-writing2.component.css'
})
export class ThesisWriting2Component {
  activeTab: string = 'Class Feed';

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }

  isActiveTab(tabName: string): boolean {
    return this.activeTab === tabName;
  }
}
