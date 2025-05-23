import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/classes',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'todo-list',
        component: TodoListComponent
      },
      {
        path: 'classes',
        component: ClassesComponent,
      },
    ],
  },
];
