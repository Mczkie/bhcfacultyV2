import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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

  animations: [
  trigger('slideInLeft', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)', opacity: 0 }),
      animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
    ]),
    transition(':leave', [
      animate('300ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 })),
    ]),
  ]),
],
  templateUrl: './faculty-evaluation.component.html',
  styleUrls: ['./faculty-evaluation.component.css'],
})
export class FacultyEvaluationComponent {
  constructor(private router: Router) {}

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
    this.router.navigate(['dashboard', 'faculty-evaluation', path]);
  }

  onActiveChild() {
    this.childActive = true;
  }

  onDeactivateChild() {
    this.childActive = false;
  }
}
