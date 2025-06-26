import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardTitle, MatCardHeader, MatCardSubtitle, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatCell, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intelligent-systems-lab',
  imports: [
      MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardSubtitle,
    MatTableModule,
    MatCell,
     MatButton,
    MatCardActions,
    MatCardContent,
    CommonModule
  ],
  templateUrl: './intelligent-systems-lab.component.html',
  styleUrl: './intelligent-systems-lab.component.css'
})
export class IntelligentSystemsLabComponent {
displayedColumns: string[] = ["question", "score"];

  evaluationData = [
    {
      classCode: '123',
      subject: "Thesis Writing 2",
    },
    {
      title: "RATING SCALE",
      no1: "5 - All of the Time:",
      no2: "4 - Most of the Time",
      no3: "3 - Sometimes",
      no4: "2 - Rarely",
      no5: "1 - Never",
    },
    {
      title: "GENERAL OBSERVATIONS",
      criteria: [
        {
          question:
            "My learning in the course is facilitated by the way the instructor organized course material to fit our needs.",
          score: "2.1",
        },
        {
          question:
            "My understanding of the course materials is ably aided by the instructor’s ability to clearly communicate the course and lessons of the day.",
          score: "1.5",
        },
        {
          question:
            "I am interested in the subject matter because of the instructor’s interest and enthusiasm in the subject.",
          score: "3",
        },
        {
          question:
            "My learning improved because of my instructor’s interest and concern in my studies.",
          score: "2",
        },
        {
          question:
            "I learned the lessons because the instructor established major points with illustrations, applications, and/or summaries.",
          score: "3.1",
        },
        {
          question:
            "My understanding of the course content is much aided by the instructor’s timely response to the questions and problems and provided individual help regarding the course content.",
          score: "2.1",
        },
        {
          question:
            "My learning is improved because the instructor allowed questions and discussions when appropriate.",
          score: "1.6",
        },
        {
          question:
            "My learning is improved because the instructor encouraged students to analyze ideas and to think critically.",
          score: "2.9",
        },
        {
          title: "ON SYNCHRONOUS SESSION",
          subTitle: "My interest in learning is very much improved because:",
          criteria: [
            {
              question: "The instructor starts and ends the session on time.",
              score: "4.1",
            },
            {
              question: "The instructor makes good use of the session.",
              score: "1.1",
            },
            {
              question:
                "The instructor allows us to interact with each other during the session.",
              score: "4.1",
            },
            {
              question: "Discussion questions were thought provoking.",
              score: "3.1",
            },
            {
              question: "Discussions were engaging.",
              score: "2",
            },
            {
              question: "Video sessions were meaningful and helpful.",
              score: "4.1",
            },
          ],
        },
        {
          title: "ON ASYNCHRONOUS SESSION",
          subTitle: "My learning is aided and improved by the fact that:",
        },
      ],
      score: 4.8,
    },
  ];

  // Extract GENERAL OBSERVATIONS questions only
  generalObservations = this.evaluationData[2]?.criteria?.filter(
    (item: any) => item.question
  ) ?? [];

  // Extract ON SYNCHRONOUS SESSION questions only
  syncSession = this.evaluationData[2]?.criteria?.find(
    (item: any) => item.title === "ON SYNCHRONOUS SESSION"
  )?.criteria ?? [];

  get averageScore(): number {
    if (!this.syncSession.length) return 0;
    const total = this.syncSession.reduce((sum, item) => sum + Number(item.score), 0);
    return total / this.syncSession.length;
  }

  goBack() {
    this.router.navigate(["Bataan-heroes-lamp/dashboard", "faculty-evaluation"]);
  }

  constructor(private router: Router) {}
}
