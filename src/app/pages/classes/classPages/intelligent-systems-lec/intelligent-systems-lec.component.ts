import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
interface Contact {
  id: number;
  name: string;
  title: string;
  department?: string;
}

@Component({
  selector: 'app-intelligent-systems-lec',
  imports: [CommonModule, MatInputModule, MatIconModule, MatButtonModule, MatCard, MatCardModule, NgIf, NgFor],

  templateUrl: './intelligent-systems-lec.component.html',
  styleUrl: './intelligent-systems-lec.component.css',
})
export class IntelligentSystemsLecComponent {
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
      resourceDescription: 'Artificial Intelligence: A Modern Approach is a comprehensive textbook covering the foundations and advanced topics in AI, including intelligent agents, search algorithms, knowledge representation, reasoning, planning, learning, and robotics.',
      resourceName: 'Artificial Intelligence: A Modern Approach (Stuart Russell & Peter Norvig)',
      resourceLink: 'https://aima.cs.berkeley.edu/',
      resourceType: 'Book',
    },
    {
      resourceDescription: 'The Elements of Statistical Learning provides in-depth coverage of statistical learning theory and machine learning methods, which are fundamental for understanding intelligent systems.',
      resourceName: 'The Elements of Statistical Learning',
      resourceLink: 'https://web.stanford.edu/~hastie/ElemStatLearn/',
      resourceType: 'Book',
    },
    {
      resourceDescription: 'MIT OpenCourseWare offers free lecture notes, assignments, and exams for Artificial Intelligence courses, providing valuable resources for lecture-based learning.',
      resourceName: 'MIT OpenCourseWare: Artificial Intelligence',
      resourceLink: 'https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/',
      resourceType: 'Online Course',
    },
    {
      resourceDescription: 'DeepLearning.AI provides high-quality online courses and lectures on deep learning and neural networks, which are key topics in intelligent systems lectures.',
      resourceName: 'DeepLearning.AI',
      resourceLink: 'https://www.deeplearning.ai/',
      resourceType: 'Online Course',
    }
  ];
  classProfiles = [
    {
      name: 'John Doe',
      role: 'Student',
      email: 'johndoe@example.com'
    },
    {
      name: 'Jane Smith',
      role: 'Student',
      email: 'janesmith@example.com'
    },
    {
      name: 'Alice Johnson',
      role: 'Student',
      email: 'alice.johnson@example.com'
    },
    {
      name: 'Bob Brown',
      role: 'Student',
      email: 'bob.brown@example.com'
    },
    {
      name: 'Charlie Davis',
      role: 'Student',
      email: 'charlie.davis@example.com'
    },
    {
      name: 'Eve White',
      role: 'Student',
      email: 'eve.white@example.com'
    },
    {
      name: 'Frank Black',
      role: 'Student',
      email: 'frank.black@example.com'
    },
    {
      name: 'Grace Green',
      role: 'Student',
      email: 'grace.green@example.com'
    },
    {
      name: 'Hank Blue',
      role: 'Student',
      email: 'hank.blue@example.com'
    },
    {
      name: 'Ivy Yellow',
      role: 'Student',
      email: 'ivy.yellow@example.com'
    },
    {
      name: 'Jack Red',
      role: 'Student',
      email: 'jack.red@example.com'
    },
    {
      name: 'Kathy Purple',
      role: 'Student',
      email: 'kathy.purple@example.com'
    }
  ];

  studentWorks = [
    {
      studentName: "John Doe",
      workTitle: "Neural Network Implementation",
      submissionDate: "2025-04-01",
      feedback: "Impressive implementation of a basic neural network. Consider experimenting with different activation functions.",
      grade: "A"
    },
    {
      studentName: "Jane Smith",
      workTitle: "Expert Systems Case Study",
      submissionDate: "2025-04-02",
      feedback: "Well-researched case study on expert systems. Expand on the inference engine section for more depth.",
      grade: "A-"
    },
    {
      studentName: 'Alice Johnson',
      workTitle: 'Machine Learning Algorithms Comparison',
      submissionDate: '2025-04-03',
      feedback: 'Good comparison of supervised and unsupervised algorithms. Include more real-world applications.',
      grade: 'B+'
    },
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

