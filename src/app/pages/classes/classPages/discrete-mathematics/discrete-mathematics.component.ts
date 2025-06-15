import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';

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
    NgFor
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

  classResources = [
    {
      resourceDescription: 'Discrete Mathematics and Its Applications by Kenneth H. Rosen is a widely used textbook that covers fundamental topics such as logic, set theory, combinatorics, graph theory, and algorithms. It provides clear explanations, numerous examples, and a variety of exercises to help students understand and apply discrete mathematical concepts.',
      resourceName: 'Discrete Mathematics and Its Applications',
      resourceLink: 'https://www.mheducation.com/highered/product/discrete-mathematics-its-applications-rosen/M9781259676512.html',
      resourceType: 'Book',
    },
    {
      resourceDescription: 'Brilliant.org offers interactive courses and problem sets in discrete mathematics, including topics like logic, proofs, combinatorics, and graph theory. The platform emphasizes active problem solving and conceptual understanding through engaging challenges.',
      resourceName: 'Brilliant.org Discrete Mathematics',
      resourceLink: 'https://brilliant.org/courses/discrete-mathematics/',
      resourceType: 'Website',
    },
    {
      resourceDescription: 'MIT OpenCourseWare provides free access to lecture notes, assignments, and exams for the Discrete Mathematics course (6.042J). The materials cover logic, proofs, sets, functions, relations, graphs, and more, making it a valuable resource for self-study.',
      resourceName: 'MIT OpenCourseWare: Mathematics for Computer Science',
      resourceLink: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2005/',
      resourceType: 'Course',
    },
    {
      resourceDescription: 'Khan Academy offers a series of video lessons and exercises on discrete mathematics topics such as logic, probability, combinatorics, and graph theory. The platform is suitable for beginners and provides step-by-step explanations.',
      resourceName: 'Khan Academy: Discrete Mathematics',
      resourceLink: 'https://www.khanacademy.org/computing/computer-science/cryptography',
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

interface Contact {
  id: number;
  name: string;
  title: string;
  department?: string;
}
