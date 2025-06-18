import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardTitle, MatCardHeader, MatCardSubtitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatCell, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practicum2',
  imports: [
     MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardSubtitle,
    MatTableModule,
    MatCell,
    MatButton,
    MatIcon,
  ],
  templateUrl: './practicum2.component.html',
  styleUrl: './practicum2.component.css'
})
export class Practicum2Component {
   displayedColumns: string[] = ['criteria', 'score'];
  evaluationData = [
    { criteria: 'Guidance Provided', score: 4.9 },
    { criteria: 'Practical Knowledge', score: 4.8 },
    { criteria: 'Support for Students', score: 4.7 },
    { criteria: 'Assessment Fairness', score: 4.8 },
    { criteria: 'Professionalism', score: 4.9 }
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
