import { Component } from '@angular/core';
import { MatCard, MatCardTitle, MatCardHeader, MatCardSubtitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatCell, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intelligent-systems-lab',
  imports: [
      MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardSubtitle,
    MatTableModule,
    MatCell,
    MatIcon
  ],
  templateUrl: './intelligent-systems-lab.component.html',
  styleUrl: './intelligent-systems-lab.component.css'
})
export class IntelligentSystemsLabComponent {

   displayedColumns: string[] = ['criteria', 'score'];
  evaluationData = [
    { criteria: 'Subject Knowledge', score: 4.95 },
    { criteria: 'Teaching Methodology', score: 4.85 },
    { criteria: 'Student Engagement', score: 4.9 },
    { criteria: 'Assessment Fairness', score: 4.8 },
    { criteria: 'Availability for Doubts', score: 4.9 }
  ];

   getAverageScore(): number {
    const total = this.evaluationData.reduce((sum, item) => sum + item.score, 0);
    return (total / this.evaluationData.length).toFixed(2) as unknown as number;
  }

  goBack() {
    this.router.navigate(['Bataan-heroes-lamp/dashboard', 'faculty-evaluation']);
  }
  constructor(private router: Router) {}
}
