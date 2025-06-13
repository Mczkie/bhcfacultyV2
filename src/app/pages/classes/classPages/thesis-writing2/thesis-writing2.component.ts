import { Component } from "@angular/core";
import { CommonModule, NgFor } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCard, MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-thesis-writing2",
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCard,
    MatCardModule,
    MatIconModule,
    MatIcon,
    NgFor,
  ],
  templateUrl: "./thesis-writing2.component.html",
  styleUrl: "./thesis-writing2.component.css",
})
export class ThesisWriting2Component {
  activeTab: string = "Class Feed";

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }

  isActiveTab(tabName: string): boolean {
    return this.activeTab === tabName;
  }

  selectedActivity: any = null;
  enterActivity(activity: any) {
    this.selectedActivity = activity;
    this.setActiveTab("Activities/Resources");
  }

  activies = [
    {
      activityName: "Research and Development",
      activityDate: "Saturday, April 4, 2025, 00:00 PM",
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
    },
    {
      activityName: "Activity 3: Thesis Proposal",
      activityDate: "Tuesday, 08:00 AM - 10:00 AM",
    },
    {
      activityName: "Activity 4: 100 paragraph essay",
      activityDate: "Monday, 12:00 PM - 02:30 PM",
    },
  ];
}
