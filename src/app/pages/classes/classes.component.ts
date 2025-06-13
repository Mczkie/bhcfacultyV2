import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { 
  MatCard, 
  MatCardActions, 
  MatCardContent, 
  MatCardHeader, 
  MatCardModule, 
  MatCardSubtitle, 
  MatCardTitle,
} from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-classes',
  imports: [
    MatCard,
    MatCardModule,
    CommonModule,
    MatIconModule,
    RouterOutlet,
    MatButtonModule
  ],
  standalone: true,
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css',
})
export class ClassesComponent {
  
  currentTime: Date = new Date();

  childActive = false;

  classes = [
    {
      className: "Thesis Writing 2",
      classDate: 'Saturday, April 4, 2025, 00:00 PM',
      classCode: '12345',
      classRoom: '#Room: 408',
      routePath: 'thesis-writing2'
    },
    {
      className: "Discrete Mathematics",
      classDate: 'Monday, 04:00 pm - 05:00 pm',
      classCode: '12345',
      classRoom: '#Room: 421',
      routePath: 'discrete-mathematics'
    },
    {
      className: "Practicum 2",
      classDate: 'M - T,  08:00 am - 05:00 pm',
      classCode: '12345',
      classRoom: '#Room: 101',
      routePath: 'practicum2'
    },
    {
      className: "Intelligent Systems LEC",
      classDate: 'Monday, 12:00 PM - 02: 30 PM',
      classCode: '12345',
      classRoom: '#Room: 521',
      routePath: 'intelligent-systems-lec'
    },
    {
      className: "Intelligent Systems LAB",
      classDate: 'Tuesday, 12:00 PM - 02: 30 PM',
      classCode: '12345',
      classRoom: '#Room: 521',
      routePath: 'intelligent-systems-lab'
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToClass(path: string) {
    this.router.navigate([path], { relativeTo: this.route});
  }

  onActiveChild() {
    this.childActive = true;
  }

  onDeactivateChild() {
    this.childActive = false;
  }
}
