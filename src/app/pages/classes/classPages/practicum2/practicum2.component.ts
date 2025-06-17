import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';


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

  activities = [
    {
      activityName: "Field Experience Orientation",
      activityDate: "Monday, April 7, 2025, 09:00 AM - 11:00 AM",
      resources: [
        {
          resourceDescription: `Overview of practicum/internship expectations, site requirements, and professional conduct. Includes orientation materials and a checklist for students to review before starting their placement.`,
          resourceName: "Orientation Guide",
          resourceLink: "https://www.naceweb.org/career-readiness/competencies/orientation-guide/",
          resourceType: "Document",
        },
      ],
    },
    {
      activityName: "Internship Weekly Progress Meeting",
      activityDate: "Wednesday, 02:00 PM - 03:00 PM",
      resources: [
        {
          resourceDescription: `Weekly check-in meeting to discuss progress, challenges, and learning goals. Students should prepare a brief summary of their activities and any questions for their supervisor.`,
          resourceName: "Progress Meeting Agenda",
          resourceLink: "https://www.internships.com/progress-meeting-agenda",
          resourceType: "Template",
        },
      ],
    },
    {
      activityName: "Midterm Evaluation",
      activityDate: "Friday, April 25, 2025, 10:00 AM - 11:00 AM",
      resources: [
        {
          resourceDescription: `Midterm evaluation form for supervisors to assess student performance and provide feedback. Students should review the evaluation criteria in advance.`,
          resourceName: "Midterm Evaluation Form",
          resourceLink: "https://www.linkedin.com/learning/midterm-evaluation-form",
          resourceType: "Form",
        },
      ],
    },
    {
      activityName: "Final Presentation",
      activityDate: "Thursday, May 15, 2025, 01:00 PM - 03:00 PM",
      resources: [
        {
          resourceDescription: `Students present a summary of their practicum or internship experience, key projects, and learning outcomes. Presentation guidelines and sample slides provided.`,
          resourceName: "Final Presentation Guidelines",
          resourceLink: "https://www.dol.gov/agencies/whd/fact-sheets/71-flsa-internships",
          resourceType: "Guide",
        },
      ],
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
      email: 'john.doe@email.com'
    },
    {
      name: 'Jane Smith',
      role: 'Student',
      email: 'jane.smith@email.com'
    },
    {
      name: 'Alice Johnson',
      role: 'Student',
      email: 'alice.johnson@email.com'
    },
    {
      name: 'Bob Brown',
      role: 'Student',
      email: 'bob.brown@email.com'
    },
    {
      name: 'Charlie Davis',
      role: 'Student',
      email: 'charlie.davis@email.com'
    },
    {
      name: 'Eve White',
      role: 'Student',
      email: 'eve.white@email.com'
    },
    {
      name: 'Frank Black',
      role: 'Student',
      email: 'frank.black@email.com'
    },
    {
      name: 'Grace Green',
      role: 'Student',
      email: 'grace.green@email.com'
    },
    {
      name: 'Hank Blue',
      role: 'Student',
      email: 'hank.blue@email.com'
    },
    {
      name: 'Ivy Yellow',
      role: 'Student',
      email: 'ivy.yellow@email.com'
    },
    {
      name: 'Jack Red',
      role: 'Student',
      email: 'jack.red@email.com'
    },
    {
      name: 'Kathy Purple',
      role: 'Student',
      email: 'kathy.purple@email.com'
    }
  ];

  studentWorks = [
    {
      studentName: "John Doe",
      workTitle: "Practicum Report: Software Development Internship at TechCorp",
      submissionDate: "2025-04-01",
      feedback: "Excellent reflection on your internship experience. Consider elaborating on the challenges faced.",
      grade: "A"
    },
    {
      studentName: "Jane Smith",
      workTitle: "Internship Project: Data Analysis at HealthCare Inc.",
      submissionDate: "2025-04-02",
      feedback: "Strong analysis and clear presentation of your project outcomes.",
      grade: "A+"
    },
    {
      studentName: 'Alice Johnson',
      workTitle: 'Practicum Reflection: Marketing Internship at AdWorks',
      submissionDate: '2025-04-03',
      feedback: 'Good insights into your learning process. Expand on teamwork experiences.',
      grade: 'B+'
    },
  ]

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

  constructor(private snackBar: MatSnackBar) {}

  sentAction() {
    this.snackBar.open('Sent Success', 'close', {
      duration: 1500,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['success-snackbar']
    })
  }

  invalidAction() {
    this.snackBar.open('Not Sent try again!', 'close', {
      duration: 1500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['failed-snackbar']
    })
  }
  sendAction() {
    if(!this.wasSent){
      this.wasSent = true;
      setTimeout(() => {
        this.sentAction()
      }, 1500);
    }else{
      this.invalidAction();
    }
  }
  wasSent = false;
}
