import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-intelligent-systems-lab',
  imports: [CommonModule, MatInputModule, MatIconModule, MatButtonModule, MatCard, MatCardModule, NgIf, NgFor],
  templateUrl: './intelligent-systems-lab.component.html',
  styleUrl: './intelligent-systems-lab.component.css',
})
export class IntelligentSystemsLabComponent {
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
      resourceDescription: 'Intelligent Systems Laboratory Manual provides hands-on experiments and practical exercises in AI, machine learning, and robotics. It guides students through implementing intelligent algorithms and analyzing their performance.',
      resourceName: 'Intelligent Systems Laboratory Manual',
      resourceLink: 'https://example.com/intelligent-systems-lab-manual',
      resourceType: 'Manual',
    },
    {
      resourceDescription: 'Python Machine Learning offers practical tutorials and code examples for building intelligent systems using Python. Topics include supervised and unsupervised learning, neural networks, and model evaluation.',
      resourceName: 'Python Machine Learning',
      resourceLink: 'https://www.pythonmachinelearning.com/',
      resourceType: 'Book',
    },
    {
      resourceDescription: 'MIT OpenCourseWare: Artificial Intelligence Laboratory provides free lecture notes, assignments, and lab projects for hands-on learning in intelligent systems and AI.',
      resourceName: 'MIT OCW: AI Laboratory',
      resourceLink: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2023/labs/',
      resourceType: 'Course',
    },
    {
      resourceDescription: 'Google Colab is a cloud-based platform for running Python code and machine learning experiments. It is ideal for prototyping and sharing intelligent systems lab work.',
      resourceName: 'Google Colab',
      resourceLink: 'https://colab.research.google.com/',
      resourceType: 'Tool',
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
