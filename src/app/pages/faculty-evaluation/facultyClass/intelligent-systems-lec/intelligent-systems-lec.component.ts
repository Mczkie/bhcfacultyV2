import { Component } from '@angular/core';
import { MatCard, MatCardTitle, MatCardHeader, MatCardSubtitle } from '@angular/material/card';
import { MatCell, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-intelligent-systems-lec',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardSubtitle,
    MatTableModule,
    MatCell,
  ],
  templateUrl: './intelligent-systems-lec.component.html',
  styleUrl: './intelligent-systems-lec.component.css'
})
export class IntelligentSystemsLecComponent {
   displayedColumns: string[] = ['criteria', 'score'];
  evaluationData = [
    { criteria: 'Understanding of AI Concepts', score: 4.8 },
    { criteria: 'Application of Intelligent Algorithms', score: 4.6 },
    { criteria: 'Use of Real-world Examples', score: 4.7 },
    { criteria: 'Encouragement of Critical Thinking', score: 4.9 },
    { criteria: 'Clarity in Explaining Complex Topics', score: 4.8 }
  ];

   getAverageScore(): number {
    const total = this.evaluationData.reduce((sum, item) => sum + item.score, 0);
    return (total / this.evaluationData.length).toFixed(2) as unknown as number;
  }
}
