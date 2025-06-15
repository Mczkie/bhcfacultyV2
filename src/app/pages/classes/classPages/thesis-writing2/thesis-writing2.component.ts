import { Component } from "@angular/core";
import { CommonModule, NgFor } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCard, MatCardModule } from "@angular/material/card";

interface Contact {
  id: number;
  name: string;
  title: string;
  department?: string;
}

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

  classResources = [
    {
      resourceDescription: 'Purdue Online Writing Lab (OWL) offers comprehensive resources for academic writing, including guides on thesis statements, research papers, citations, and grammar. It is widely used by students and educators for improving writing skills and understanding academic conventions.',
      resourceName: 'Purdue OWL',
      resourceLink: 'https://owl.purdue.edu/',
      resourceType: 'Website',
    },
    {
      resourceDescription: 'Zotero is a free, open-source reference management tool that helps students collect, organize, cite, and share research sources. It streamlines the process of managing bibliographies and citations for thesis writing and academic research.',
      resourceName: 'Zotero',
      resourceLink: 'https://www.zotero.org/',
      resourceType: 'Software',
    },
    {
      resourceDescription: 'Grammarly is an AI-powered writing assistant that checks for grammar, punctuation, clarity, and style issues. It is useful for thesis writers to ensure their drafts are clear, concise, and error-free.',
      resourceName: 'Grammarly',
      resourceLink: 'https://www.grammarly.com/',
      resourceType: 'Software',
    },
    {
      resourceDescription: 'Google Scholar is a freely accessible search engine that indexes scholarly articles, theses, books, and conference papers. It is an essential tool for literature review and sourcing credible references for thesis writing.',
      resourceName: 'Google Scholar',
      resourceLink: 'https://scholar.google.com/',
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
