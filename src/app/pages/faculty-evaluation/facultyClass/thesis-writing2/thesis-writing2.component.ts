import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-thesis-writing2',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardSubtitle,
    MatTableModule,

  ],
  templateUrl: './thesis-writing2.component.html',
  styleUrl: './thesis-writing2.component.css'
})
export class ThesisWriting2Component {
  displayedColumns: string[] = ['criteria', 'score'];
  // Evaluation data for Thesis Writing Professor
  evaluationData = [
    { criteria: 'Research Topic Relevance', score: 4.8 },
    { criteria: 'Literature Review Depth', score: 4.6 },
    { criteria: 'Methodology Appropriateness', score: 4.7 },
    { criteria: 'Data Analysis Quality', score: 4.5 },
    { criteria: 'Thesis Organization & Structure', score: 4.9 },
    { criteria: 'Originality of Work', score: 4.7 },
    { criteria: 'Clarity of Presentation', score: 4.6 }
  ];

   getAverageScore(): number {
    const total = this.evaluationData.reduce((sum, item) => sum + item.score, 0);
    return (total / this.evaluationData.length).toFixed(2) as unknown as number;
  }
}
