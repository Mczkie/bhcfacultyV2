import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';


interface Contact {
  id: number;
  name: string;
  title: string;
  department?: string;
}
@Component({
  selector: 'app-practicum2',
  imports: [CommonModule, MatInputModule, MatIconModule, MatButtonModule, MatCard, MatCardModule, NgIf, NgFor],
  templateUrl: './practicum2.component.html',
  styleUrl: './practicum2.component.css',
})
export class Practicum2Component {
  activeTab: string = 'Class Feed';

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

  classResources = [
    {
      resourceDescription: 'The National Association of Colleges and Employers (NACE) provides resources and guidelines for students participating in internships and practicums, including best practices, legal considerations, and career development tips. Their website offers articles, webinars, and toolkits to help students maximize their experiential learning opportunities.',
      resourceName: 'NACE Internship & Co-op Resources',
      resourceLink: 'https://www.naceweb.org/internships/',
      resourceType: 'Website',
    },
    {
      resourceDescription: 'Internships.com is a comprehensive platform for finding internship and practicum opportunities across various industries. It offers search tools, application tips, and resources for preparing resumes and cover letters, making it easier for students to connect with potential employers.',
      resourceName: 'Internships.com',
      resourceLink: 'https://www.internships.com/',
      resourceType: 'Website',
    },
    {
      resourceDescription: 'LinkedIn Learning provides online courses and video tutorials focused on professional skills, workplace readiness, and career development. These resources are valuable for students preparing for or currently engaged in practicums or internships, covering topics such as communication, teamwork, and project management.',
      resourceName: 'LinkedIn Learning',
      resourceLink: 'https://www.linkedin.com/learning/',
      resourceType: 'Website',
    },
    {
      resourceDescription: 'The U.S. Department of Labor offers guidelines and fact sheets regarding internships, including information on the Fair Labor Standards Act (FLSA) and student rights. This resource helps students and employers understand the legal aspects of unpaid and paid internships and practicums.',
      resourceName: 'U.S. Department of Labor: Internship Programs',
      resourceLink: 'https://www.dol.gov/agencies/whd/fact-sheets/71-flsa-internships',
      resourceType: 'Website',
    }
  ];
  classProfiles = [
    {
      name: 'John Doe',
      role: 'Student',
      email: ''
    },
    {
      name: 'Jane Smith',
      role: 'Student',
      email: ''
    },
    {
      name: 'Alice Johnson',
      role: 'Student',
      email: ''
    },
    {
      name: 'Bob Brown',
      role: 'Student',
      email: ''
    },
    {
      name: 'Charlie Davis',
      role: 'Student',
      email: ''
    },
    {
      name: 'Eve White',
      role: 'Student',
      email: ''
    },
    {
      name: 'Frank Black',
      role: 'Student',
      email: ''
    },
    {
      name: 'Grace Green',
      role: 'Student',
      email: ''
    },
    {
      name: 'Hank Blue',
      role: 'Student',
      email: ''
    },
    {
      name: 'Ivy Yellow',
      role: 'Student',
      email: ''
    },
    {
      name: 'Jack Red',
      role: 'Student',
      email: ''
    },
    {
      name: 'Kathy Purple',
      role: 'Student',
      email: ''
    }
  ];

     selectedContact: Contact | null = null;
  
  contacts: Contact[] = [
    { id: 1, name: 'Dr. Maria Santos', title: 'Department Head - Computer Science' },
    { id: 2, name: 'Prof. John Lim', title: 'Professor - Mathematics' },
    { id: 4, name: 'Ms. Sarah Chen', title: 'Adjunct Professor - Physics' },
    { id: 5, name: 'Dr. Robert Johnson', title: 'Dean - College of Sciences' }
  ];

  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }
}
