import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDivider, MatList, MatListItem } from '@angular/material/list';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle'
import { MatDialog } from '@angular/material/dialog';

interface Task {
  title: string;
  completed: boolean;
  dueDate?: Date;
}

@Component({
  selector: 'app-todo-list',
  imports: [
    MatCard,
    MatCardTitle,
    MatList,
    MatListItem,
    MatCheckbox,
    MatIcon,
    MatCardHeader,
    MatCardSubtitle,
    MatCardContent,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatDivider,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent {

  tasks: Task[] = [
    { title: 'Prepare lecture slides for CS101', completed: false, dueDate: new Date('2023-06-20') },
    { title: 'Grade midterm exams', completed: false },
    { title: 'Submit research paper revisions', completed: true }
  ];
  
  filteredTasks: Task[] = [...this.tasks];
  currentFilter: string = 'all';

  constructor(private dialog: MatDialog) {}

  addTask(title: string): void {
    if (title.trim()) {
      this.tasks.push({ title, completed: false });
      this.filterTasks(this.currentFilter);
    }
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    this.filterTasks(this.currentFilter);
  }

  toggleTask(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.filterTasks(this.currentFilter);
  }

  filterTasks(filter: string): void {
    this.currentFilter = filter;
    switch (filter) {
      case 'active':
        this.filteredTasks = this.tasks.filter(task => !task.completed);
        break;
      case 'completed':
        this.filteredTasks = this.tasks.filter(task => task.completed);
        break;
      default:
        this.filteredTasks = [...this.tasks];
    }
  }

  clearCompleted(): void {
    this.tasks = this.tasks.filter(task => !task.completed);
    this.filterTasks(this.currentFilter);
  }

  hasCompletedTasks(): boolean {
    return this.tasks.some(task => task.completed);
  }

  getActiveTaskCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  getCompletedTaskCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  openEditDialog(task: Task, index: number): void {
  
  }}
