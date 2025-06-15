import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCell } from '@angular/material/table';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-faculty-evaluation',
  standalone: true,
  imports: [
    NgIf,
    MatCard,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterOutlet,
  ],


  templateUrl: './faculty-evaluation.component.html',
  styleUrls: ['./faculty-evaluation.component.css'],
})
export class FacultyEvaluationComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  childActive = false;

  facultyClass = [
    {
      className: 'Thesis Writing 2',
      classDate: 'Saturday, April 4, 2025, 00:00 PM',
      classCode: '12345',
      classRoom: '#Room: 408',
      routePath: 'thesis-writing2',
    },
    {
      className: 'Discrete Mathematics',
      classDate: 'Monday, 04:00 pm - 05:00 pm',
      classCode: '12345',
      classRoom: '#Room: 421',
      routePath: 'discrete-mathematics',
    },
    {
      className: 'Practicum 2',
      classDate: 'M - T,  08:00 am - 05:00 pm',
      classCode: '12345',
      classRoom: '#Room: 101',
      routePath: 'practicum2',
    },
    {
      className: 'Intelligent Systems LEC',
      classDate: 'Monday, 12:00 PM - 02: 30 PM',
      classCode: '12345',
      classRoom: '#Room: 521',
      routePath: 'intelligent-system-lec',
    },
    {
      className: 'Intelligent Systems LAB',
      classDate: 'Tuesday, 12:00 PM - 02: 30 PM',
      classCode: '12345',
      classRoom: '#Room: 521',
      routePath: 'intelligent-systems-lab',
    },
  ];

  goToClass(path: string) {
    this.router.navigate([path], {relativeTo: this.route});
  }

   onActiveChild() {
     this.childActive = true;
   }

   onDeactivateChild() {
     this.childActive = false;
  }
}
