import { VerResumenProfesorComponent } from './components/home/professor/ver-resumen-profesor/ver-resumen-profesor.component';
import { ModificarResumenComponent } from './components/home/student/modificar-resumen/modificar-resumen.component';
import { AnalizarResumenComponent } from './components/home/student/analizar-resumen/analizar-resumen.component';
import { VerUnResumenComponent } from './components/home/student/ver-un-resumen/ver-un-resumen.component';
import { VerMisResumenesComponent } from './components/home/student/ver-mis-resumenes/ver-mis-resumenes.component';
import { VerResumenesProfessorComponent } from './components/home/professor/ver-resumenes-professor/ver-resumenes-professor.component';
import { NuevoResumenComponent } from './components/home/student/nuevo-resumen/nuevo-resumen.component';
import { VerAlgortimoComponent } from './components/home/admin/ver-algortimo/ver-algortimo.component';
import { AlgoritmoComponent } from './components/home/admin/algoritmo/algoritmo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/home/admin/admin.component';
import { InicioComponent } from './components/home/admin/inicio/inicio.component';
import { ModificarAdminComponent } from './components/home/admin/modificar-admin/modificar-admin.component';
import { ProfileAdminComponent } from './components/home/admin/profile-admin/profile-admin.component';
import { InicioProfessorComponent } from './components/home/professor/inicio-professor/inicio-professor.component';
import { ProfessorComponent } from './components/home/professor/professor.component';
import { ProfileProfessorComponent } from './components/home/professor/profile-professor/profile-professor.component';
import { InicioStudentComponent } from './components/home/student/inicio-student/inicio-student.component';
import { ProfileStudentComponent } from './components/home/student/profile-student/profile-student.component';
import { StudentComponent } from './components/home/student/student.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NewPasswordComponent } from './components/pages/new-password/new-password.component';
import { SingupComponent } from './components/pages/singup/singup.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AdminGuard } from './guards/admin/admin.guard';
import { ProfessorGuard } from './guards/professor/professor.guard';
import { StudentGuard } from './guards/student/student.guard';
import { AlgoritmoProfessorComponent } from './components/home/professor/algoritmo-professor/algoritmo-professor.component';
import { VerAlgortimoProffesorComponent } from './components/home/professor/ver-algortimo-proffesor/ver-algortimo-proffesor.component';

const routes: Routes = [
  {
    path: 'navbar', 
    component:NavbarComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'singup',
    component: SingupComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children:[
      {
        path:'profile',
        component: ProfileAdminComponent
      },
      {
        path:'edit',
        component: ModificarAdminComponent
      },
      {
        path:'admin',
        component: InicioComponent
      },
      {
        path:'',
        component: InicioComponent
      },
      {
        path:'algoritmos',
        component: AlgoritmoComponent
      },
      {
        path:'ver-algoritmo',
        component: VerAlgortimoComponent
      }
    ] 
  },
  {
    path: 'professor',
    component: ProfessorComponent,
    canActivate: [ProfessorGuard],
    children:[
      {
        path:'profile',
        component: ProfileProfessorComponent
      },
      {
        path:'ver-resumenes',
        component: VerResumenesProfessorComponent
      },
      {
        path:'',
        component: InicioProfessorComponent
      },
      {
        path:'algoritmos',
        component: AlgoritmoProfessorComponent
      },
      {
        path:'ver-algoritmo',
        component: VerAlgortimoProffesorComponent
      },
      {
        path:'resumen',
        component:VerResumenProfesorComponent
      }
    ]
  },
  {
    path: 'student',
    component: StudentComponent,
    canActivate: [StudentGuard],
    children:[
      {
        path:'profile',
        component: ProfileStudentComponent
      },
      {
        path:'',
        component: InicioStudentComponent
      },
      {
        path:'nuevo-resumen',
        component: NuevoResumenComponent
      },
      {
        path:'mis-resumenes',
        component: VerMisResumenesComponent
      },
      {
        path:'resumen',
        component: VerUnResumenComponent,
      },
      {
        path:'analizar',
        component: AnalizarResumenComponent
      },
      {
        path:'modificar',
        component: ModificarResumenComponent
      }      
    ]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'new-password',
    component: NewPasswordComponent
  },
  {
    path: '**',
    pathMatch:'full',
    redirectTo: 'login'
  },
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
