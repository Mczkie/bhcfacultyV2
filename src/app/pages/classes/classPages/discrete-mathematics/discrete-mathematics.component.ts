import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
<<<<<<< HEAD

=======
>>>>>>> recovered-work

@Component({
  selector: 'app-discrete-mathematics',
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCard,
    MatCardModule,
    NgIf,
<<<<<<< HEAD
    NgFor,
=======
    NgFor
>>>>>>> recovered-work
  ],
  templateUrl: './discrete-mathematics.component.html',
  styleUrl: './discrete-mathematics.component.css',
})
export class DiscreteMathematicsComponent {
  activeTab: string = 'Class Feed';

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }

  isActiveTab(tabName: string): boolean {
    return this.activeTab === tabName;
  }

<<<<<<< HEAD

=======
>>>>>>> recovered-work
  selectedActivity: any = null;
  enterActivity(activity: any) {
    this.selectedActivity = activity;
    this.setActiveTab("Activities/Resources");
  }

  activies = [
    {
      activityName: "Research and Development",
      activityDate: "Saturday, April 4, 2025, 00:00 PM",
      activityPoints: 100,
      resources: [
        {
          resourceDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
          resourceName: "Resource 1",
          resourceLink: "https://material.angular.dev/",
          resourceType: "Video",
        },
      ],
    },
    {
      activityName: "activity 2: BMC",
      activityDate: "Monday, 04:00 pm - 05:00 pm",
      activityPoints: 60,
    },
    {
      activityName: "Activity 3: Thesis Proposal",
      activityDate: "Tuesday, 08:00 AM - 10:00 AM",
      activityPoints: 20,
    },
    {
      activityName: "Activity 4: 100 paragraph essay",
      activityDate: "Monday, 12:00 PM - 02:30 PM",
      activityPoints: 50,
    },
  ];
}
