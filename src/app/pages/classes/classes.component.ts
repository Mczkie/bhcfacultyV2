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
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-classes',
  imports: [
    MatCard,
    MatCardModule,
    CommonModule,
    MatIcon
  ],
  standalone: true,
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css',

  template: `
    <h1>Classes</h1>
  `
})
export class ClassesComponent {
  openDialog() {
    
    
  }

   time = new Date();
   currentDate = this.time.toLocaleDateString('en-US', {  
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });


  classes = [
    {
      className: "Thesis Writing 2",
      classDate: 'Saturday, April 4, 2025, 00:00 PM',
      classCode: '12345',
      classRoom: '#Room: 408',

    },
    {
      className: "Discrete Mathematics",
      classDate: 'Monday, 04:00 pm - 05:00 pm',
      classCode: '12345',
      classRoom: '#Room: 421',

    },
    {
      className: "Practicum 2",
      classDate: 'M - T,  08:00 am - 05:00 pm',
      classCode: '12345',
      classRoom: '#Room: 101',

    },
    {
      className: "Intelligent Systems LEC",
      classDate: 'Monday, 12:00 PM - 02: 30 PM',
      classCode: '12345',
      classRoom: '#Room: 521',

    },
    {
      className: "Intelligent Systems LAB",
      classDate: 'Tuesday, 12:00 PM - 02: 30 PM',
      classCode: '12345',
      classRoom: '#Room: 521',
    },
  ]
}
