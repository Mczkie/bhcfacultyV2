import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

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

  activities = [
    {
      activityName: "Introduction to Intelligent Systems",
      activityDate: "Monday, April 7, 2025, 09:00 AM - 11:00 AM",
      resources: [
        {
          resourceDescription: `Overview of intelligent systems, their applications, and basic concepts in artificial intelligence. Includes setup instructions for lab environment and introductory exercises.`,
          resourceName: "Lab 1 Guide",
          resourceLink: "https://example.com/intelligent-systems-lab1-guide",
          resourceType: "Document",
        },
      ],
    },
    {
      activityName: " Machine Learning Basics",
      activityDate: "Wednesday, April 9, 2025, 09:00 AM - 11:00 AM",
      resources: [
        {
          resourceDescription: `Hands-on activities with supervised and unsupervised learning algorithms. Students will implement simple classifiers and clustering algorithms.`,
          resourceName: "Machine Learning Lab Sheet",
          resourceLink: "https://example.com/ml-lab-sheet",
          resourceType: "PDF",
        },
      ],
    },
    {
      activityName: " Neural Networks Implementation",
      activityDate: "Friday, April 11, 2025, 09:00 AM - 11:00 AM",
      resources: [
        {
          resourceDescription: `Build and train a basic neural network using Python. Analyze performance and experiment with different architectures.`,
          resourceName: "Neural Networks Tutorial",
          resourceLink: "https://example.com/neural-networks-tutorial",
          resourceType: "Video",
        },
      ],
    },
    {
      activityName: "Robotics and Intelligent Agents",
      activityDate: "Monday, April 14, 2025, 09:00 AM - 11:00 AM",
      resources: [
        {
          resourceDescription: `Explore the fundamentals of robotics and agent-based systems. Includes simulation exercises and real-world applications.`,
          resourceName: "Robotics Lab Instructions",
          resourceLink: "https://example.com/robotics-lab-instructions",
          resourceType: "Document",
        },
      ],
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
      feedback: "Impressive implementation of a feedforward neural network. Consider experimenting with different activation functions.",
      grade: "A"
    },
    {
      studentName: "Jane Smith",
      workTitle: "Fuzzy Logic Controller Design",
      submissionDate: "2025-04-02",
      feedback: "Good application of fuzzy logic concepts. Try to provide more real-world use cases.",
      grade: "A-"
    },
    {
      studentName: 'Alice Johnson',
      workTitle: 'Genetic Algorithm for Optimization',
      submissionDate: '2025-04-03',
      feedback: 'Well-structured genetic algorithm. Improve documentation and discuss parameter tuning.',
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

interface Contact {
  id: number;
  name: string;
  title: string;
  department?: string;
}
