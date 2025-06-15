import { Component } from '@angular/core';
import { MatCard, MatCardTitle, MatCardHeader, MatCardSubtitle } from '@angular/material/card';
import { MatCell, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-discrete-mathematics',
  imports: [
      MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardSubtitle,
    MatTableModule,
    MatCell,
  ],
  templateUrl: './discrete-mathematics.component.html',
  styleUrl: './discrete-mathematics.component.css'
})
export class DiscreteMathematicsComponent {
  displayedColumns: string[] = ['criteria', 'score'];
  evaluationData = [
    { criteria: 'Subject Knowledge (Discrete Mathematics)', score: 4.9 },
    { criteria: 'Clarity of Explanations (Discrete Structures)', score: 4.8 },
    { criteria: 'Engagement with Students', score: 4.7 },
    { criteria: 'Assessment Fairness', score: 4.6 },
    { criteria: 'Encouragement of Logical Thinking', score: 4.8 }
  ];

   getAverageScore(): number {
    const total = this.evaluationData.reduce((sum, item) => sum + item.score, 0);
    return (total / this.evaluationData.length).toFixed(2) as unknown as number;
  }
}
