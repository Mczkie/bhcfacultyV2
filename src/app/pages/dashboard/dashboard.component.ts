import { ClassesComponent } from './../classes/classes.component';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import {  
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatSidenavModule, 
    MatListModule,
    MatIconModule, 
    MatToolbar, 
    RouterLink, 
    RouterLinkActive,
    RouterOutlet,
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],

  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',

  template: `
    <h1>{ClassesComponent}</h1>
  `
})
export class DashboardComponent {
  opened = false;


   details = [
    {
      name: "Example Name",
      domain: '2032323@example.com',
    }
   ]
}
