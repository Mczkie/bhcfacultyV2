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
