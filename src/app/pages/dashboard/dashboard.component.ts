import { Component } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { RouterOutlet } from "@angular/router";
import { MatToolbar } from "@angular/material/toolbar";
import { Router } from "@angular/router";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { timeout } from "rxjs";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgIf } from "@angular/common";
@Component({
  selector: "app-dashboard",
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbar,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NgIf,
  ],

  standalone: true,
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",

  template: ` <h1>{ClassesComponent}</h1> `,
})
export class DashboardComponent {
  opened = false;

  details = [
    {
      name: "John Doe",
      domain: "2032323@example.com",
    },
  ];

  constructor(private router: Router, private snackBar: MatSnackBar, private BreakpointObserver: BreakpointObserver) 
  {
    this.BreakpointObserver.observe([Breakpoints.Handset])
    .subscribe(result => {
      this.isSmallScreen = result.matches;
    })
  }

  onLogOut() {
    this.onLogoutSnack();
    
    setTimeout(() => {
      this.router.navigate(['Bataan-heroes-lamp']);
    }, 1500);
  }

  onLogoutSnack() {
    this.snackBar.open('Logout Successfuly', 'Close', {
      duration: 1500,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['success-snackbar']
    })
  }

 isSmallScreen = false;
}
