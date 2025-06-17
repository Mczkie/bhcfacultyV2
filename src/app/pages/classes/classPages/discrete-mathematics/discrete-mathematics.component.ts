import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

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
  constructor(private snackBar: MatSnackBar) {}

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
      activityName: "Logic and Proof Workshop",
      activityDate: "Monday, April 7, 2025, 10:00 AM - 12:00 PM",
      activityPoints: 40,
      resources: [
        {
          resourceDescription: "A video introduction to propositional logic and proof strategies.",
          resourceName: "Introduction to Logic",
          resourceLink: "https://www.youtube.com/watch?v=6cMhzMHtVnM",
          resourceType: "Video",
        },
        {
          resourceDescription: "Practice problems on logical equivalence and basic proof techniques.",
          resourceName: "Logic Practice Set",
          resourceLink: "https://brilliant.org/practice/logic-proofs/",
          resourceType: "Website",
        },
      ],
    },
    {
      activityName: "Set Theory and Functions Assignment",
      activityDate: "Wednesday, April 9, 2025, 11:00 AM - 01:00 PM",
      activityPoints: 30,
      resources: [
        {
          resourceDescription: "Lecture notes on sets, subsets, and functions.",
          resourceName: "Set Theory Notes",
          resourceLink: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2005/resources/lecture-notes/",
          resourceType: "Document",
        },
      ],
    },
    {
      activityName: "Combinatorics Problem Solving",
      activityDate: "Friday, April 11, 2025, 09:00 AM - 11:00 AM",
      activityPoints: 50,
      resources: [
        {
          resourceDescription: "Interactive exercises on permutations and combinations.",
          resourceName: "Combinatorics Practice",
          resourceLink: "https://www.khanacademy.org/math/statistics-probability/counting-permutations-and-combinations",
          resourceType: "Website",
        },
      ],
    },
    {
      activityName: "Graph Theory Exploration",
      activityDate: "Monday, April 14, 2025, 02:00 PM - 04:00 PM",
      activityPoints: 60,
      resources: [
        {
          resourceDescription: "Overview of basic graph theory concepts and applications.",
          resourceName: "Graph Theory Basics",
          resourceLink: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
          resourceType: "Website",
        },
      ],
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
      email: 'john.doe@example.com'
    },
    {
      name: 'Jane Smith',
      role: 'Student',
      email: 'jane.smith@example.com'
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
      workTitle: "Graph Theory Applications",
      submissionDate: "2025-04-01",
      feedback: "Excellent exploration of real-world graph problems. Try to include more examples on Eulerian paths.",
      grade: "A"
    },
    {
      studentName: "Jane Smith",
      workTitle: "Combinatorics and Counting Principles",
      submissionDate: "2025-04-02",
      feedback: "Great use of combinatorial arguments. Clarify your explanation of the pigeonhole principle.",
      grade: "A-"
    },
    {
      studentName: 'Alice Johnson',
      workTitle: 'Logic and Proof Techniques',
      submissionDate: '2025-04-03',
      feedback: 'Solid understanding of direct and indirect proofs. Work on proof by contradiction.',
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

interface Contact {
  id: number;
  name: string;
  title: string;
  department?: string;
}



