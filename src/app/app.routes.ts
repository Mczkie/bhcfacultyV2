import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { FacultyEvaluationComponent } from './pages/faculty-evaluation/faculty-evaluation.component';
import { ThesisWriting2Component } from './pages/faculty-evaluation/facultyClass/thesis-writing2/thesis-writing2.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Bataan-heroes-lamp',
    pathMatch: 'full',
  },
  {
    path: 'Bataan-heroes-lamp',
    loadComponent: () =>
      import('./pages/login-page/login-page.component').then(
        (m) => m.LoginPageComponent
      ),
  },
  {
    path: 'Bataan-heroes-lamp/dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'faculty-evaluation',
        pathMatch: 'full',
      },
      {
        path: 'faculty-evaluation',
        component: FacultyEvaluationComponent,
        children: [
          {
            path: 'thesis-writing2',
            loadComponent: () =>
              import(
                './pages/faculty-evaluation/facultyClass/thesis-writing2/thesis-writing2.component'
              ).then((m) => m.ThesisWriting2Component),
          },
          {
            path: 'discrete-mathematics',
            loadComponent: () =>
              import(
                './pages/faculty-evaluation/facultyClass/discrete-mathematics/discrete-mathematics.component'
              ).then((m) => m.DiscreteMathematicsComponent),
          },
          {
            path: 'practicum2',
            loadComponent: () =>
              import(
                './pages/faculty-evaluation/facultyClass/practicum2/practicum2.component'
              ).then((m) => m.Practicum2Component),
          },
          {
            path: 'intelligent-system-lec',
            loadComponent: () =>
              import(
                './pages/faculty-evaluation/facultyClass/intelligent-systems-lec/intelligent-systems-lec.component'
              ).then((m) => m.IntelligentSystemsLecComponent),
          },
          {
            path: 'intelligent-systems-lab',
            loadComponent: () =>
              import(
                './pages/faculty-evaluation/facultyClass/intelligent-systems-lab/intelligent-systems-lab.component'
              ).then((m) => m.IntelligentSystemsLabComponent),
          },
        ],
      },
    ],
  },
];
